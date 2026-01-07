// Write a javascript program to replace every character in a given
// String with the character following in the alphabet

let word = "abcefgz";

function nextCharWord(word) {
  return word
    .split("")
    .map((letter) =>
      letter === "z" || letter === "Z"
        ? "a"
        : String.fromCharCode(letter.charCodeAt() + 1)
    )
    .join("");
}

console.log(nextCharWord(word));
