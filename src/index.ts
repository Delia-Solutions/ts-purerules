function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return value.length > 0;
}

function emailMustBeValid(value: string): boolean {
  return /.+@.+/.test(value) || false;
}

function numberMustBeMin(value: number, length: number): boolean {
  return value && value >= length ? true : false;
}

function objectMustNotBeEmpty(value: object): boolean {
  return value && value !== {};
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
