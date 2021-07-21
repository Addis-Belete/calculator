/* eslint-disable no-unused-vars */
import calculate from '../../logic/calculator';

const calculate1 = { total: null, next: null, operation: null };
const calculate2 = { total: '10', next: null, operation: null };
describe('calculate methods', () => {
  it('should be a function', () => {
    expect(typeof calculate).toBe('function');
  });
});
