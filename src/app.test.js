const { add } = require('./app');

test('add', () => {
  expect(add('')).toBe(0);
  expect(add('1')).toBe(1);
});
