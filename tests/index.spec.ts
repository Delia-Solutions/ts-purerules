import * as lib from "../src/index";


describe("Arrays", () => {
  it("array must not be empty", () => {
    expect(lib.arrayMustNotBeEmpty([1, 2, 3])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([""])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([])).toBe(false);
    expect(lib.arrayMustNotBeEmpty(new Array)).toBe(false);
  });
});


describe("Objects", () => {
  it("object must not be empty", () => {
    expect(lib.objectMustNotBeEmpty([1, 2, 3])).toBe(true);
    expect(lib.objectMustNotBeEmpty({})).toBe(false);
    expect(lib.objectMustNotBeEmpty([""])).toBe(true);
    expect(lib.objectMustNotBeEmpty([])).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Array)).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Object)).toBe(false);
  });
});


describe("Strings", () => {
  it("must be at least N characters", () => {
    expect(lib.mustBeAtLeastNCharacters("hello", 3)).toBe(true);
    expect(lib.mustBeAtLeastNCharacters("hello", 8)).toBe(false);
    expect(lib.mustBeAtLeastNCharacters("", 0)).toBe(true);
    expect(lib.mustBeAtLeastNCharacters("", 4)).toBe(false);
  });

  it("password should be similar to", () => {
    expect(lib.passwordShouldBeSimilar("hello", "hello")).toBe(true);
    expect(lib.passwordShouldBeSimilar("hello", "yes")).toBe(false);
    expect(lib.passwordShouldBeSimilar("", "")).toBe(true);
    expect(lib.passwordShouldBeSimilar("", "hi you")).toBe(false);
  });

  it("string must not be empty", () => {
    expect(lib.stringMustNotBeEmpty("hello")).toBe(true);
    expect(lib.stringMustNotBeEmpty("")).toBe(false);
    expect(lib.stringMustNotBeEmpty('')).toBe(false);
  });
});
