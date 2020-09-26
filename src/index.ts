function arrayMustNotBeEmpty(value: Array<any>): boolean {
  return value.length > 0
}

function objectMustNotBeEmpty(value: object): boolean {
  return value && value !== {}
}

function numberMustBeMin(value: number, length: number): boolean {
  return value && value >= length ? true : false
}

function emailMustBeValid(value: string): boolean {
  return /.+@.+/.test(value) || false
}

function stringMustNotBeEmpty(value: string): boolean {
  return value !== '' || false
}

function passwordShouldBeSimilar(password: string, confirmationPassword: string): boolean {
  return password === confirmationPassword || false
}

function mustBeAtLeastNCharacters(value: string, length: number): boolean {
  return value.length >= length || false
}

export {
  emailMustBeValid,
  stringMustNotBeEmpty,
  passwordShouldBeSimilar,
  mustBeAtLeastNCharacters,
  numberMustBeMin,
  objectMustNotBeEmpty,
  arrayMustNotBeEmpty
}