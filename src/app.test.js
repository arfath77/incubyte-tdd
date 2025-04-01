const { add } = require('./app');

test('add', () => {
  expect(add('')).toBe(0);
  expect(add('1')).toBe(1);
  expect(add('1,5')).toBe(6);
  expect(add('1,5,10,240')).toBe(256);
  expect(add('1\n5,10,240')).toBe(256);
  expect(add('//;\n1;2')).toBe(3);
  // expect(add('//;\n1;2;-3')).toBe(0);
  expect(add('//;\n1;2;-3;-5;-6')).toBe(-11);
});
