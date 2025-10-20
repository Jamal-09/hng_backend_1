const express = require("express");
const analyzeQuery = require("../utils/analyzer.js");
const interpretQuery = require("../utils/naturalLanguage.js");

const router = express.Router();
const strings = [];

// POST     /strings
router.post("/", (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ error: "Missing 'value' field" });
  }
  if (typeof value !== "string") {
    return res.status(422).json({ error: "'value' must be a string" });
  }

  const existing = strings.find((s) => s.value === value.trim());
  if (existing) {
    return res.status(409).json({ error: "String already exists" });
  }

  const analyzed = analyzeQuery(value);
  strings.push(analyzed);
  return res.status(201).json(analyzed);
});

// GET      /strings (filtering)
router.get("/", (req, res) => {
  let filtered = [...strings];
  const {
    is_palindrome,
    min_length,
    max_length,
    word_count,
    contains_character,
  } = req.query;

  if (is_palindrome !== undefined)
    filtered = filtered.filter(
      (s) => s.properties.is_palindrome === (is_palindrome === "true")
    );

  if (min_length)
    filtered = filtered.filter((s) => s.properties.length >= +min_length);
  if (max_length)
    filtered = filtered.filter((s) => s.properties.length <= +max_length);
  if (word_count)
    filtered = filtered.filter((s) => s.properties.word_count === +word_count);
  if (contains_character)
    filtered = filtered.filter((s) => s.value.includes(contains_character));

  res.json({
    data: filtered,
    count: filtered.length,
    filters_applied: req.query,
  });
});

router.get("/filter-by-natural-language", (req, res) => {
  const { query } = req.query;
  if (!query)
    return res.status(400).json({ error: "Missing 'query' parameter" });

  const filters = interpretQuery(query);
  if (!filters)
    return res
      .status(400)
      .json({ error: "Unable to parse natural language query" });

  let filtered = [...strings];

  if (filters.is_palindrome !== undefined)
    filtered = filtered.filter(
      (s) => s.properties.is_palindrome === filters.is_palindrome
    );

  if (filters.word_count)
    filtered = filtered.filter(
      (s) => s.properties.word_count === filters.word_count
    );

  if (filters.min_length)
    filtered = filtered.filter(
      (s) => s.properties.length >= filters.min_length
    );

  if (filters.contains_character)
    filtered = filtered.filter((s) =>
      s.value.includes(filters.contains_character)
    );

  res.status(200).json({
    data: filtered,
    count: filtered.length,
    interpreted_query: {
      original: query,
      parsed_filters: filters,
    },
  });
});

// GET      /strings/:value
router.get("/:value", (req, res) => {
  const { value } = req.params;
  const found = strings.find((s) => s.value === value);
  if (!found) return res.status(404).json({ error: "String not found" });
  res.json(found);
});

// DELETE   /strings/:value
router.delete("/:value", (req, res) => {
  const index = strings.findIndex((s) => s.value === req.params.value);
  if (index === -1) return res.status(404).json({ error: "String not found" });

  strings.splice(index, 1);
  res.status(204).json({ message: "String successfully " });
});

module.exports = router;
