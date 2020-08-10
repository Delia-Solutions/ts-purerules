export type ValidationRule = (value: any) => true | string;

function emailMustBeValid(): ValidationRule {
  const errorMessage = "Email must be valid";
  return value => {
    return /.+@.+/.test(value) || errorMessage
  }
}

function stringMustNotBeEmpty(): ValidationRule {
  const errorMessage = "String must not be empty";
  return value => {
    return value !== '' || errorMessage
  }
}

function passwordShouldBeSimilar(password: string, confirmationPassword: string): boolean | string {
  const errorMessage = "Password are not equal";
  return password === confirmationPassword ? true : errorMessage
}

function mustBeAtLeastNCharacters(length: number): ValidationRule {
  const errorMessage = "Must be atleast 8 caracs"
  return value => {
    return value.length > length || errorMessage
  }
}

export {
  emailMustBeValid,
  stringMustNotBeEmpty,
  passwordShouldBeSimilar,
  mustBeAtLeastNCharacters
}