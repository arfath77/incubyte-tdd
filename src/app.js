// function to add
const regex = /^\/\/(.*?)\n/;

const add = (a = '') => {
  const delimiter = a.match(regex) || ',';
  if (Array.isArray(delimiter)) {
    a = a.replace(delimiter[0], '');
    const matches = [...delimiter[1].matchAll(/\[(.*?)\]/g)]?.map(
      match => match[1]
    );
    console.log({ matches });
    if (matches.length) {
      for (let i = 0; i < matches.length; i++) {
        a = a.replaceAll(matches[i], ',');
      }
    } else {
      a = a.replace(new RegExp(delimiter[1], 'g'), ',');
    }
  }
  a = a.replace(/\n/g, ',');
  const array = a.split(',');
  const negativeNumbers = array.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(',')}`
    );
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 1000) continue;
    sum += Number(array[i]);
  }
  return sum;
};

module.exports = {
  add,
};
