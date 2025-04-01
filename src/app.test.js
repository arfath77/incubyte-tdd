const { add } = require('./app');

test('add', () => {
  expect(add('')).toBe(0);
});
