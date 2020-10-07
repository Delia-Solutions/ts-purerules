function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return (Array
    .from(value)
    .filter(elt => elt !== undefined)
    .length) > 0;
}

function emailMustBeValid(value: string): boolean {
  return /.+@.+/.test(value) || false;
}

function numberMustBeMin(value: number, length: number): boolean {
  return value && value >= length ? true : false;
}

function objectMustNotBeEmpty(value: any): boolean {
  const keys = Object.keys(value);
  return value.toString() === '[object Object]' && keys.length !== 0;
}

function stringMustBeAtLeastNCharacters(value: string, length: number): boolean {
  return value.length >= length || false;
}

function stringMustBeSimilarTo(value: string, other: string): boolean {
  return value === other || false;
}

function stringMustNotBeEmpty(value: string): boolean {
  return value !== '' || false;
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
