// This Function Calculate the Characters in a string and the number of it
const isRepeated = (word: string) => {
  let characters: Record<string, number> = {};

  for (let x of word) {
    characters[x] = (characters[x] ?? 0) + 1;
  }
  return characters;
};

console.log(isRepeated("Hello,World!"));

// This Function Check of a Specified Character is Repeated (2 to 4) times in a String

const isCharRepeated = (word: string, char: string) => {
  let count = word.split("").filter((str) => str === char).length;
  return count >= 2 && count <= 4;
};

console.log(isCharRepeated("oool", "o"));
