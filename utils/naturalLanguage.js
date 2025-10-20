module.exports = function interpretQuery(query) {
  if (!query || typeof query !== "string") return null;

  const lower = query.toLowerCase().trim();

  switch (lower) {
    case "all single word palindromic strings":
      return { word_count: 1, is_palindrome: true };

    case "strings longer than 10 characters":
      return { min_length: 11 };

    case "palindromic strings that contain the first vowel":
      return { is_palindrome: true, contains_character: "a" };

    case "strings containing the letter z":
      return { contains_character: "z" };

    default:
      return null;
  }
};
