function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return (Array
    .from(value)
    .filter(elt => elt !== undefined)
    .length) > 0;
}

function stringMustBeValidEmail(value: string): boolean {
  /* This regex comes from
     http://emailregex.com/
     It matches 99.99% of MODERN email addresses.
  */
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

function numberMustBeMin(value: number, minValue: number): boolean {
  return value >= minValue;
}
function numberMustBeMax(value: number, maxValue: number): boolean {
  return maxValue >= value;
}

function numberMustBeStrictlyMin(value: number, minValue: number): boolean {
  return value > minValue;
}
function numberMustBeStrictlyMax(value: number, maxValue: number): boolean {
  return maxValue > value;
}

function objectMustNotBeEmpty(value: any): boolean {
  const keys = Object.keys(value);
  return value.toString() === '[object Object]' && keys.length !== 0;
}

function stringMustBeAtLeastNCharacters(value: string, length: number): boolean {
  return value.length >= length;
}

function stringMustBeSimilarTo(value: string, other: string): boolean {
  return value === other;
}

function stringMustNotBeEmpty(value: string): boolean {
  return value !== '';
}

function stringMustContainWords(value: string, words: string | Array<string>): boolean {
  if (Array.isArray(words)) {
    return words.every(v => value.includes(v));
  }
  return value.includes(words);
}

function isLeapYear(year: string | number): boolean {
  // if year is a string, we need to cast the value to number
  const formattedYear = typeof year === 'string' ? +year : year;
  return (formattedYear % 4 === 0 && formattedYear % 100 !== 0) || formattedYear % 400 === 0;
}

function stringMustBeValidIPv4(value: string) {
  const re = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return re.test(value);
}

/**
 * Performs a Luhn checksum.
 * Used in the computation of the SIRET and SIREN numbers.
 * See: https://en.wikipedia.org/wiki/Luhn_algorithm
 */
const checksumLuhn = (value: string, size: number): boolean => {
  const check = value.replace(/ /g, '');
  if (check.length < size) return false;
  const parity = size % 2;
  let sum = 0;
  for (let i = size - 1; i >= 0; i--) {
    let d = parseInt(check.charAt(i));
    if (i % 2 === parity) {
      d *= 2;
    }
    if (d > 9) {
      d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
};

// DONT: the following 2 rules might be way too specific to be part of this lib.
/**
 * Checks if a string is a valid SIRET number (a french legal number).
 */
function stringMustBeSIRET(value: string): boolean {
  const size = 14;
  return checksumLuhn(value, size);
}

/**
 * Checks if a string is a valid SIREN number (a french legal number).
 */
function stringMustBeSIREN(value: string): boolean {
  const size = 9;
  return checksumLuhn(value, size);
}


export {
  arrayMustNotBeEmpty,
  stringMustBeValidEmail,
  numberMustBeMin,
  numberMustBeMax,
  numberMustBeStrictlyMin,
  numberMustBeStrictlyMax,
  stringMustContainWords,
  objectMustNotBeEmpty,
  stringMustBeAtLeastNCharacters,
  stringMustBeSimilarTo,
  stringMustNotBeEmpty,
  stringMustBeSIRET,
  stringMustBeSIREN,
  isLeapYear,
  stringMustBeValidIPv4,
  stringMustBeDifferentTo,
};
