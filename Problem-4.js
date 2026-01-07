const returnCurrentData = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year} , ${day}/${month}/${year}`;
};

console.log(returnCurrentData());
