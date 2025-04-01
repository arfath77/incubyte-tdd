// function to add

const add = (a = '') => {
  a = a.replace(/\n/g, ',');
  console.log(a);
  const array = a.split(',');
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return sum;
};

module.exports = {
  add,
};
