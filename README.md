# ts-purerules

A library to validate stuff in pure TS. (It just means we delegate some work to the TS typing system).


## Installation
Depending on the package manager your project uses, install it with either `npm`:
```
npm install --save @delia-solutions/ts-purerules
```

or `yarn`:
```
yarn add @delia-solutions/ts-purerules
```

Then the way of importing it depends on your project's settings.
``` typescript
// ES6 import style
import * as pureRules from '@delia-solutions/ts-purerules';

// or you can import only the rules you want
import { stringMustBeValidEmail } from '@delia-solutions/ts-purerules';
import { arrayMustNotBeEmpty, stringMustBeValidEmail } from '@delia-solutions/ts-purerules';
```

``` typescript
// Node require style
const pureRules = require('@delia-solutions/ts-purerules');
```


## Usage
We created it for our front-end use, but it is not restricted to this use case.
Many frameworks, when using inputs, let us specify some rules which are run against every input given.
``` html
<!-- This example uses Vue and Vuetify. Vuetify gives us the v-input element. -->
<template>
  <v-input :rules="[rule1, rule2]"/>
</template>
```

It has been well tested with [Vuetify](https://github.com/vuetifyjs/vuetify).

You can simply use it by importing it, then testing your values against the rules you want.
**Every rule returns a boolean**, so it is easy to use it.
```typescript
import * as pureRules from '@delia-solutions/ts-purerules';

// value can come from anywhere
const value = ['hello', 'world'];

if (pureRules.arrayMustNotBeEmpty(variable)) {
	doWork();
}
```


## Rules list
- `mustNotBeNull(value: any)`<br/>
  False if value is null.
- `mustNotBeUndefined(value: any)`<br/>
  False if value is undefined.
- `mustNotBeNullOrUndefined(value: any)`<br/>
  False if value is null or undefined.
- `arrayMustNotBeEmpty(value: Array<any>)`<br/>
  False if array is empty, true otherwise.
- `isLeapYear(year: string | number)`<br/>
  True if year is a leap year, false otherwise.
- `numberMustBeMax(value: number, maxValue: number)`<br/>
  False if number >= max, true otherwise.
- `numberMustBeMin(value: number, minValue: number)`<br/>
  False if number <= min, true otherwise.
- `numberMustBeStrictlyMax(value: number, maxValue: number)`<br/>
  False if number > max, true otherwise.
- `numberMustBeStrictlyMin(value: number, minValue: number)`<br/>
  False if number < min, true otherwise.
- `objectMustNotBeEmpty(value: any)`<br/>
  False if object is empty, true otherwise.
- `stringMustBeAtLeastNCharacters(value: string, length: number)`<br/>
  False if string is less than N characters, true otherwise.
- `stringMustBeDifferentTo(value: string, other: string)`<br/>
  False if string is the same as the other one, true otherwise.
- `stringMustBeSIREN(value: string)`<br/>
  False if the string doesn't describe a [SIREN number](https://en.wikipedia.org/wiki/SIREN_code), true otherwise.
- `stringMustBeSIRET(value: string)`<br/>
  False if the string doesn't describe a [SIRET number](https://en.wikipedia.org/wiki/SIRET_code), true otherwise.
- `stringMustBeSimilarTo(value: string, other: string)`<br/>
  True if string is the same as the other one, false otherwise.
- `stringMustBeValidEmail(value: string)`<br/>
  False if string doesn't describe a valid email, true otherwise.
- `stringMustBeValidIPv4(value)`<br/>
  False if string doesn't describe a valid IPv4 address, true otherwise.
- `stringMustContainWords(value: string, words: string | Array<string >)`<br/>
  False if string doesn't include every words as substrings, true otherwise.
- `stringMustNotBeEmpty(value: string)`<br/>
  False if string is empty, true otherwise.


## Contributing
See [CONTRIBUTING.md](https://github.com/Delia-Solutions/ts-purerules/blob/master/CONTRIBUTING.md).


## License
This software is distributed under the terms of the ISC License.
The complete License is in the [LICENSE file](https://github.com/Delia-Solutions/ts-purerules/blob/master/LICENSE).
