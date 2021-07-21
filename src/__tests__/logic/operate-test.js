import operate from '../../logic/operate';

describe('Operation', () => {
  it('should return addition of two number', () => {
    const result = operate('10', '20', '+');
    expect(result * 1).toEqual(30);
  });
  it('should return subtraction of two numbers', () => {
    const result = operate('30', '20', '-');
    expect(result * 1).toEqual(10);
  });
  it('should return multiplication of two numbers', () => {
    const result = operate('10', '20', 'X');
    expect(result * 1).toEqual(200);
  });
  it('should return devision of two numbers', () => {
    const result = operate('10', '20', '÷');
    expect(result * 1).toEqual(0.5);
  });
  it('should return infinity when number divided by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe(Infinity);
  });
  it('it should return result of number divided by 100', () => {
    const result = operate('10', '0', '%');
    expect(result * 1).toEqual(0.1);
  });
});
