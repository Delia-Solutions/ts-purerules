import * as lib from "../src/index";


describe("Arrays", () => {
  it("array must not be empty", () => {
    expect(lib.arrayMustNotBeEmpty([1, 2, 3])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([""])).toBe(true);
    expect(lib.arrayMustNotBeEmpty([])).toBe(false);
    expect(lib.arrayMustNotBeEmpty(new Array)).toBe(false);
    const a = [4];
    delete a[0];
    expect(lib.arrayMustNotBeEmpty(a)).toBe(false);
  });
});


describe("Objects", () => {
  it("object must not be empty", () => {
    expect(lib.objectMustNotBeEmpty({ hello: 4 })).toBe(true);
    expect(lib.objectMustNotBeEmpty({})).toBe(false);
    expect(lib.objectMustNotBeEmpty([1, 2, 3])).toBe(false);
    expect(lib.objectMustNotBeEmpty([""])).toBe(false);
    expect(lib.objectMustNotBeEmpty([])).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Array)).toBe(false);
    expect(lib.objectMustNotBeEmpty(new Object)).toBe(false);
  });
});


describe("Strings", () => {
  it("string must be at least N characters", () => {
    expect(lib.stringMustBeAtLeastNCharacters("hello", 3)).toBe(true);
    expect(lib.stringMustBeAtLeastNCharacters("hello", 8)).toBe(false);
    expect(lib.stringMustBeAtLeastNCharacters("", 0)).toBe(true);
    expect(lib.stringMustBeAtLeastNCharacters("", 4)).toBe(false);
  });

  it("string must be similar to", () => {
    expect(lib.stringMustBeSimilarTo("hello", "hello")).toBe(true);
    expect(lib.stringMustBeSimilarTo("hello", "yes")).toBe(false);
    expect(lib.stringMustBeSimilarTo("", "")).toBe(true);
    expect(lib.stringMustBeSimilarTo("", "hi you")).toBe(false);
  });

  it("string must not be empty", () => {
    expect(lib.stringMustNotBeEmpty("hello")).toBe(true);
    expect(lib.stringMustNotBeEmpty("")).toBe(false);
    expect(lib.stringMustNotBeEmpty('')).toBe(false);
  });
});
