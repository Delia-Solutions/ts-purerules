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
  mustBeAtLeastNCharacters
}