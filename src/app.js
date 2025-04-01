// function to add

const add = (a = '') => {
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
