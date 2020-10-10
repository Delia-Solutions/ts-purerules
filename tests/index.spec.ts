import * as lib from '../src/index';


describe('Arrays', () => {
  it('array must not be empty', () => {
    expect(lib.arrayMustNotBeEmpty([1, 2, 3])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([''])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([])).toBe(false);
    expect(lib.arrayMustNotBeEmpty(new Array)).toBe(false);
    const a = [4];
    delete a[0];
    expect(lib.arrayMustNotBeEmpty(a)).toBe(false);
  });
});


describe('Numbers', () => {
  it('number must be min', () => {
    expect(lib.numberMustBeMin(5, 3)).toBe(true);
    expect(lib.numberMustBeMin(3, 4)).toBe(false);
    expect(lib.numberMustBeMin(2, 2)).toBe(true);
    expect(lib.numberMustBeMin(-1, -13)).toBe(true);
    expect(lib.numberMustBeMin(1.3443, 1)).toBe(true);
    expect(lib.numberMustBeMin(-1.1, -1)).toBe(false);
    expect(lib.numberMustBeMin(0, 8)).toBe(false);
    expect(lib.numberMustBeMin(0, -2)).toBe(true);
  });
  it('number must be maximum', () => {
    expect(lib.numberMustBeMax(5, 3)).toBe(false);
    expect(lib.numberMustBeMax(3, 4)).toBe(true);
    expect(lib.numberMustBeMax(2, 2)).toBe(true);
    expect(lib.numberMustBeMax(-1, -13)).toBe(false);
    expect(lib.numberMustBeMax(1.3443, 1)).toBe(false);
    expect(lib.numberMustBeMax(-1.1, -1)).toBe(true);
    expect(lib.numberMustBeMax(0, 8)).toBe(true);
    expect(lib.numberMustBeMax(0, -2)).toBe(false);
  });

  it('number must be strictly min', () => {
    expect(lib.numberMustBeStrictlyMin(5, 3)).toBe(true);
    expect(lib.numberMustBeStrictlyMin(3, 4)).toBe(false);
    expect(lib.numberMustBeStrictlyMin(2, 2)).toBe(false);
    expect(lib.numberMustBeStrictlyMin(-1, -13)).toBe(true);
    expect(lib.numberMustBeStrictlyMin(1.3443, 1)).toBe(true);
    expect(lib.numberMustBeStrictlyMin(-1.1, -1)).toBe(false);
    expect(lib.numberMustBeStrictlyMin(0, 8)).toBe(false);
    expect(lib.numberMustBeStrictlyMin(0, -2)).toBe(true);
  });
  it('number must be strictly maximum', () => {
    expect(lib.numberMustBeStrictlyMax(5, 3)).toBe(false);
    expect(lib.numberMustBeStrictlyMax(3, 4)).toBe(true);
    expect(lib.numberMustBeStrictlyMax(2, 2)).toBe(false);
    expect(lib.numberMustBeStrictlyMax(-1, -13)).toBe(false);
    expect(lib.numberMustBeStrictlyMax(1.3443, 1)).toBe(false);
    expect(lib.numberMustBeStrictlyMax(-1.1, -1)).toBe(true);
    expect(lib.numberMustBeStrictlyMax(0, 8)).toBe(true);
    expect(lib.numberMustBeStrictlyMax(0, -2)).toBe(false);
  });
});

describe('Date', () => {
  it('Check if a given year is a leap year', () => {
    expect(lib.isLeapYear(2020)).toBe(true);
    expect(lib.isLeapYear(2021)).toBe(false);
  });
});


describe('Objects', () => {
  it('object must not be empty', () => {
    expect(lib.objectMustNotBeEmpty({ hello: 4 })).toBe(true);
    expect(lib.objectMustNotBeEmpty({})).toBe(false);
    expect(lib.objectMustNotBeEmpty([1, 2, 3])).toBe(false);
    expect(lib.objectMustNotBeEmpty([''])).toBe(false);
    expect(lib.objectMustNotBeEmpty([])).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Array)).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Object)).toBe(false);
  });
});


describe('Strings', () => {
  it('string must be at least N characters', () => {
    expect(lib.stringMustBeAtLeastNCharacters('hello', 3)).toBe(true);
    expect(lib.stringMustBeAtLeastNCharacters('hello', 8)).toBe(false);
    expect(lib.stringMustBeAtLeastNCharacters('', 0)).toBe(true);
    expect(lib.stringMustBeAtLeastNCharacters('', 4)).toBe(false);
  });

  it('string must be similar to', () => {
    expect(lib.stringMustBeSimilarTo('hello', 'hello')).toBe(true);
    expect(lib.stringMustBeSimilarTo('hello', 'yes')).toBe(false);
    expect(lib.stringMustBeSimilarTo('', '')).toBe(true);
    expect(lib.stringMustBeSimilarTo('', 'hi you')).toBe(false);
  });

  it('string must not be empty', () => {
    expect(lib.stringMustNotBeEmpty('hello')).toBe(true);
    expect(lib.stringMustNotBeEmpty('0')).toBe(true);
    expect(lib.stringMustNotBeEmpty('')).toBe(false);
    expect(lib.stringMustNotBeEmpty('')).toBe(false);
  });

  it('string must be an email', () => {
    expect(lib.stringMustBeValidEmail('hello@delia-solutions.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('hello55@delia-solutions.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('hello.55@delia-solutions.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('hello@gmaiil.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('hellogmaiil.com')).toBe(false);
    expect(lib.stringMustBeValidEmail('hello@gmaiilcom')).toBe(false);
    expect(lib.stringMustBeValidEmail('hello@@@@@@gmaiilcom')).toBe(false);
    expect(lib.stringMustBeValidEmail('hellogmaiilcom')).toBe(false);
    expect(lib.stringMustBeValidEmail('hello@gmail')).toBe(false);
    expect(lib.stringMustBeValidEmail('he-llo@gmail.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('he.llo@gmail.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('h.e-l.lo@gmail.com')).toBe(true);
    expect(lib.stringMustBeValidEmail('.llo@gmail.com')).toBe(false);
  });

  it('string must be an IP', () => {
    expect(lib.stringMustBeValidIpAddress('50.238.2.98')).toBe(true);
    expect(lib.stringMustBeValidIpAddress('256.238.23.98')).toBe(false);
    expect(lib.stringMustBeValidIpAddress('')).toBe(false);
  });
});
