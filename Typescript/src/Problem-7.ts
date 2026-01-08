const halfEven = (word: string): string => {
  if (word.length % 2 == 0) {
    let wordMiddle = word.length / 2;
    word = word.slice(0, wordMiddle);
  } else {
    return "the word is odd";
  }
  return word;
};

console.log(halfEven("Hazemeee"));
