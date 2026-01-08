const addNew = (word: string) =>
  word.includes("New") ? word : word + " New ! ";

console.log(addNew("Hello world"));
