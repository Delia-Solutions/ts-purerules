export type ValidationRule = (value: any) => true | false;

function emailMustBeValid(): ValidationRule {
  return value => {
    return /.+@.+/.test(value) || false
  }
}

function stringMustNotBeEmpty(): ValidationRule {
  return value => {
    return value !== '' || false
  }
}

function passwordShouldBeSimilar(password: string, confirmationPassword: string): boolean | string {
  return password === confirmationPassword || false
}

function mustBeAtLeastNCharacters(length: number): ValidationRule {
  return value => {
    return value.length >= length || false
  }
}

export {
  emailMustBeValid,
  stringMustNotBeEmpty,
  passwordShouldBeSimilar,
  mustBeAtLeastNCharacters
}