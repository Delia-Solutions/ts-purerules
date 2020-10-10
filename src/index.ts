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

function isLeapYear(year: string | number): boolean {
  // if year is a string, we need to cast the value to number
  const formattedYear = typeof year === 'string' ? +year : year;
  return (formattedYear % 4 === 0 && formattedYear % 100 !== 0) || formattedYear % 400 === 0;
}


export {
  arrayMustNotBeEmpty,
  stringMustBeValidEmail,
  numberMustBeMin,
  objectMustNotBeEmpty,
  stringMustBeAtLeastNCharacters,
  stringMustBeSimilarTo,
  stringMustNotBeEmpty,
  isLeapYear,
  stringMustBeDifferentTo,
  numberMustBeMax,
  numberMustBeStrictlyMin,
  numberMustBeStrictlyMax,
};
