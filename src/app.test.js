const { add } = require('./app');

test('add', () => {
  expect(add('')).toBe(0);
  expect(add('1')).toBe(1);
  expect(add('1,5')).toBe(6);
  expect(add('1,5,10,240')).toBe(256);
});
