const { add } = require('./app');

describe('Add Function', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself for a single value', () => {
    expect(add('1')).toBe(1);
  });

  test('should add numbers separated by commas', () => {
    expect(add('1,5')).toBe(6);
  });

  test('should add numbers separated by newlines and commas', () => {
    expect(add('1\n5,10,240')).toBe(256);
  });

  test('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('should handle negative numbers correctly', () => {
    expect(add('//;\n1;2;-3')).toThrow(error);
  });

  test('should handle multiple negative numbers correctly', () => {
    expect(add('//;\n1;2;-3;-5;-6')).toThrow(error);
  });
});
