// function to add
const regex = /^\/\/(.*?)\n/;

const add = (a = '') => {
  const delimiterMatch = a.match(regex);
  let delimiter = ',';
  if (delimiterMatch) {
    delimiter = delimiterMatch[1];

    a = a.replace(delimiterMatch[0], '');

    const matches = [...delimiter.matchAll(/\[(.*?)\]/g)].map(
      match => match[1]
    );

    matches.length
      ? matches.forEach(match => (a = a.replaceAll(match, ',')))
      : (a = a.replace(new RegExp(delimiter, 'g'), ','));
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
