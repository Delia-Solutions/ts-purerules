# CHANGELOG


### 2.0.1
**Breaking changes:**
Rename some rules:
   - `emailMustBeValid` -> `stringMustBeValidEmail`
   - `mustBeAtLeastNCharacters` -> `stringMustBeAtLeastNCharacters`
   - `passwordShouldBeSimilar` -> `stringMustBeSimilarTo`

**Changes:**
- Add linting and testing. Exposed respectively through `yarn lint` and `yarn test`.
