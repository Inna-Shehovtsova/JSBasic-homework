import { sum, mul, strLengthSum } from './hw_functions';

describe('Sum', () => {
  it('return sum of two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it('return sum of two numbers', () => {
    expect(sum(-1, 0)).toEqual(-1);
  });
  it('return sum of two numbers', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('return sum of two numbers', () => {
    expect(sum(-2, 2)).toEqual(0);
  });
});

describe('Mul', () => {
  it('return multiple of two numbers', () => {
    expect(mul(1, 2)).toEqual(2);
  });
  it('return multiple of two numbers', () => {
    expect(mul(-1, 0)).toEqual(-0);
  });
  it('return multiple of two numbers', () => {
    expect(mul(1, 0)).toEqual(0);
  });
  it('return multiple of two numbers', () => {
    expect(mul(0, 0)).toEqual(0);
  });
  it('return multiple of two numbers', () => {
    expect(mul(-2, 2)).toEqual(-4);
  });
});

describe('Sum two strings length', () => {
  it('return sum of str len', () => {
    expect(strLengthSum('', '')).toEqual(0);
  });
  it('return sum of str len', () => {
    expect(strLengthSum('a', '')).toEqual(1);
  });
  it('return sum of str len', () => {
    expect(strLengthSum('a', 'b')).toEqual(2);
  });
  it('return sum of str len', () => {
    expect(strLengthSum('test', 'test case')).toEqual(13);
  });
});
