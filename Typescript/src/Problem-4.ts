const returnCurrentDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // ✅ fix
  const year = date.getFullYear();

  return `${day}-${month}-${year} , ${day}/${month}/${year}`;
};

console.log(returnCurrentDate());
