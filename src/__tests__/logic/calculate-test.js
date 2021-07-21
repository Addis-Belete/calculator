import calculate from '../../logic/calculator';

const calculate1 = { total: null, next: null, operation: null };
const calculate2 = { total: '10', next: null, operation: null };
describe('calculate methods', () => {
  it('should be a function', () => {
    expect(typeof calculate).toBe('function');
  });
  it('should return an object', () => {
    const result = calculate(10, calculate1);
    expect(typeof result).toEqual('object');
  });
  it('Should return total divide by 100', () => {
    const result = calculate('%', calculate2);
    expect(result.total).toEqual(0.1);
  });
  it('should return -ve value', () => {
    const result = calculate('+/-', calculate2);
    expect(result.total).toBe(-10);
  });
  it('should return all null', () => {
    const result = calculate('AC', { total: '10', next: '2', operation: '*' });
    expect(result.next).toBe(null);
    expect(result.total).toBe(null);
    expect(result.operation).toBe(null);
  });
});
