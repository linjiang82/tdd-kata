import { add } from './kata01';
describe('String Calculation', () => {
  it('should return 0 when passing empty string', () => {
    expect(add('')).toBe(0);
  });
  it('should return X when passing string "X"', () => {
    expect(add('3')).toBe(3);
  });
  it('should return X+Y when passing string "X,Y"', () => {
    expect(add('3,4')).toBe(7);
  });
  it('should return X+Y+...+Z when passing string "X,Y,...,Z"', () => {
    expect(add('3,4,5,6')).toBe(18);
  });
  it('should return X+Y+...+Z when passing string "X,Y,...,Z" but with new line', () => {
    expect(add('3\n4,5,6')).toBe(18);
  });

  it('should return X+Y+...+Z when passing string "//d\nXdYd...dZ" where d is a specified dilimiter', () => {
    expect(add('//;\n3\n4;5;6')).toBe(18);
  });

  it('should return X+Y+...+Z when passing string "//[d]\nXdYd...dZ" where d is a specified any length dilimiter', () => {
    expect(add('//[***]\n3\n4***5***6')).toBe(18);
  });

  it('should return X+Y+...+Z when passing string "//[d][b]\nXdYd...dZ" where d is a specified any length multi dilimiter', () => {
    expect(add('//[***][###]\n3\n4***5###8***6###9')).toBe(35);
  });

  it('should return X+Y+...+Z when passing string "//d\nXdYd...dZ" where d is a specified dilimiter and number equal or over 1000 will be ignored', () => {
    expect(add('//;\n3\n4;5;6;1000;2;2000')).toBe(20);
  });
  it('should throw error if a negative number was passed and show the negative number in the error thrown', () => {
    function addNegative() {
      add('//;\n3\n4;-2;6');
    }
    expect(addNegative).toThrow('negatives not allowed - -2');
  });
  it('should throw error if negative numbers was passed and show the negative numbers in the error thrown', () => {
    function addNegative() {
      add('//;\n3\n4;-2;6;-4');
    }
    expect(addNegative).toThrow('negatives not allowed - -2,-4');
  });
});
