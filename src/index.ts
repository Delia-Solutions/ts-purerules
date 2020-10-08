function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return value.length > 0;
}

function emailMustBeValid(value: string): boolean {
  return /.+@.+/.test(value) || false;
}

function mustBeAtLeastNCharacters(value: string, length: number): boolean {
  return value.length >= length || false;
}

function numberMustBeMin(value: number, length: number): boolean {
  return value && value >= length ? true : false;
}

function objectMustNotBeEmpty(value: object): boolean {
  return value && value !== {};
}

function passwordShouldBeSimilar(password: string, confirmationPassword: string): boolean {
  return password === confirmationPassword || false;
}

function stringMustNotBeEmpty(value: string): boolean {
  return value !== '' || false;
}


export {
  arrayMustNotBeEmpty,
  emailMustBeValid,
  mustBeAtLeastNCharacters,
  numberMustBeMin,
  objectMustNotBeEmpty,
  passwordShouldBeSimilar,
  stringMustNotBeEmpty,
};
