declare function mustNotBeNull(value: any): boolean;
declare function mustNotBeUndefined(value: any): boolean;
declare function mustNotBeNullOrUndefined(value: any): boolean;
declare function arrayMustNotBeEmpty(value: Array<any>): boolean;
declare function stringMustBeValidEmail(value: string): boolean;
declare function numberMustBeMin(value: number, minValue: number): boolean;
declare function numberMustBeMax(value: number, maxValue: number): boolean;
declare function numberMustBeStrictlyMin(value: number, minValue: number): boolean;
declare function numberMustBeStrictlyMax(value: number, maxValue: number): boolean;
declare function objectMustNotBeEmpty(value: any): boolean;
declare function stringMustBeAtLeastNCharacters(value: string, length: number): boolean;
declare function stringMustBeSimilarTo(value: string, other: string): boolean;
declare function stringMustBeDifferentTo(value: string, other: string): boolean;
declare function stringMustNotBeEmpty(value: string): boolean;
declare function stringMustContainWords(value: string, words: string | Array<string>): boolean;
declare function isLeapYear(year: string | number): boolean;
declare function stringMustBeValidIPv4(value: string): boolean;
/**
 * Checks if a string is a valid SIRET number (a french legal number).
 */
declare function stringMustBeSIRET(value: string): boolean;
/**
 * Checks if a string is a valid SIREN number (a french legal number).
 */
declare function stringMustBeSIREN(value: string): boolean;
declare function stringMustBeZipCode(value: string): boolean;
export { mustNotBeNull, mustNotBeUndefined, mustNotBeNullOrUndefined, arrayMustNotBeEmpty, isLeapYear, numberMustBeMax, numberMustBeMin, numberMustBeStrictlyMax, numberMustBeStrictlyMin, objectMustNotBeEmpty, stringMustBeAtLeastNCharacters, stringMustBeDifferentTo, stringMustBeSIREN, stringMustBeSIRET, stringMustBeSimilarTo, stringMustBeValidEmail, stringMustBeValidIPv4, stringMustContainWords, stringMustNotBeEmpty, stringMustBeZipCode };
//# sourceMappingURL=index.d.ts.map