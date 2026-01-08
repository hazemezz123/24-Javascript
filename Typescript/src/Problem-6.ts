const mergeChar = (word: string): string => {
  return word.length <= 3 ? word : word.slice(0, 3) + word.slice(-3);
};

console.log(mergeChar("Hazem Mohamed"));
console.log(mergeChar("Front-end"));
console.log(mergeChar("GO"));
