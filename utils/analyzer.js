const crypto = require("crypto");

module.exports = function analyzeQuery(value) {
  const trimmed = value.trim();

  const length = trimmed.length;
  const is_palindrome =
    trimmed.toLowerCase() ===
    trimmed.toLowerCase().split("").reverse().join("");
  const unique_characters = new Set(trimmed).size;
  const word_count = trimmed.split(/\s+/).filter(Boolean).length;
  const sha256_hash = crypto.createHash("sha256").update(trimmed).digest("hex");

  const character_frequency_map = {};
  for (let char of trimmed) {
    character_frequency_map[char] = (character_frequency_map[char] || 0) + 1;
  }

  return {
    id: sha256_hash,
    value: trimmed,
    properties: {
      length,
      is_palindrome,
      unique_characters,
      word_count,
      sha256_hash,
      character_frequency_map,
    },
    created_at: new Date().toISOString(),
  };
};
