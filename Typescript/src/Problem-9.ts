const nearEst = (x: number, y: number) => {
  let dx = Math.abs(100 - x);
  let dy = Math.abs(100 - y);

  if (dx < dy) {
    return x;
  } else if (dx > dy) {
    return y;
  }
  return "Both Variables are the same Near to the 100 ";
};

console.log(nearEst(99, 99));
