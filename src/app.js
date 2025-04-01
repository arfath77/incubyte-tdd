// function to add

const add = (a = '') => {
  if (!a) return 0;
  const array = a.split(' ');
  return Number(array[0]);
};

module.exports = {
  add,
};
