let word = "abcefgz";

function nextCharWord(word: string): string {
  return word
    .split("")
    .map(
      (letter: string) =>
        letter === "z" || letter === "Z"
          ? "a"
          : String.fromCharCode(letter.charCodeAt(0) + 1) // in TypeScript charCodeAt() must have 1 argument
    )
    .join("");
}

console.log(nextCharWord(word));
