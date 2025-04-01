// function to add
const regex = /^\/\/(.*?)\n/;

const add = (a = '') => {
  const delimiter = a.match(regex) || ',';
  if (Array.isArray(delimiter)) a = a.replace(delimiter[0], '');
  a = a.replace(/\n/g, ',');
  const array = a.split(delimiter[1] || ',');
  const negativeNumbers = array.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(',')}`
    );
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return sum;
};

module.exports = {
  add,
};
