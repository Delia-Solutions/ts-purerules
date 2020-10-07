function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return (Array
    .from(value)
    .filter(elt => elt !== undefined)
    .length) > 0;
}

function emailMustBeValid(value: string): boolean {
  return /.+@.+/.test(value);
}

function numberMustBeMin(value: number, length: number): boolean {
  return value >= length;
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


export {
  arrayMustNotBeEmpty,
  emailMustBeValid,
  numberMustBeMin,
  objectMustNotBeEmpty,
  stringMustBeAtLeastNCharacters,
  stringMustBeSimilarTo,
  stringMustNotBeEmpty,
};
