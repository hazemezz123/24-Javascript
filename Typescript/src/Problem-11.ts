const findEvenInArray = (arr: number[]) => {
  let arrOfEven: number[] = [];
  let arrOfOdd: number[] = [];
  for (let x of arr) {
    if (x % 2 == 0) {
      arrOfEven.push(x);
    } else {
      arrOfOdd.push(x);
    }
  }
  console.log("Even Array is :", arrOfEven);
  console.log("Odd Array is ", arrOfOdd);
};

const isEven = (arr: number[]) => arr.filter((num) => num % 2 == 0);

console.log(isEven([2, 4, 6, 1, 3]));
