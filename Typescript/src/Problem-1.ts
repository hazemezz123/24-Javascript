const is100 = (x: number, y: number): boolean =>
  x === 100 || y === 100 || x + y === 100;

console.log(is100(100, 20));
