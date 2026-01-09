const findEvenAndCount = (arr: number[]) => {
  let arrOfEven: number[] = [];
  for (let x of arr) {
    if (x % 2 == 0) {
      arrOfEven.push(x);
    }
  }
  return `The length of Output even arr is ${arrOfEven.length}`;
};

console.log(
  findEvenAndCount([123, 12, 3, 124, 2, 345, 66, 57, 646, 35, 21, 34, 56, 4])
);
