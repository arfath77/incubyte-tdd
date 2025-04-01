const { add } = require('./app');

describe('Add Function', () => {
  test('Return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('Return the number itself for a single value', () => {
    expect(add('1')).toBe(1);
  });

  test('Add numbers separated by commas', () => {
    expect(add('1,5')).toBe(6);
  });

  test('Add numbers separated by newlines and commas', () => {
    expect(add('1\n5,10,240')).toBe(256);
  });

  test('Handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('Handle negative numbers correctly', () => {
    expect(add('//;\n1;2;-3')).toThrow(error);
  });

  test('Handle multiple negative numbers correctly', () => {
    expect(add('//;\n1;2;-3;-5;-6')).toThrow(error);
  });

  test('Numbers bigger than 1000 should be ignored', () => {
    expect(add('//;\n1;2;1001')).toBe(3);
  });

  test('Delimiters can be of any length', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });

  test('Allow multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });
});
