import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () =>{
    const input ="1";
  
    const result = transformToNumber(input);
  
    expect(result).toBeTypeOf("number");
  });
  
  it("should transform a string number to a number of type number", () =>{
    const input ="1";
  
    const result = transformToNumber(input);
  
    expect(result).toBe(+input);
  });
  
  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const input2 = {};
  
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2); 
  
    expect(result).toBeNaN();
    // you can do multiple tests, but typically, you should only have one
    expect(result2).toBeNaN();
  });
  
});

describe("cleanNumbers()", () => {
  // this is an integration test because despite all the functions in side this function works.
  // they might not work correctly together. So we will need this test.
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // toBe doesnt work for array because objects like [] or {} are reference values, they are not equal.
    // use toEqual instead
    expect(cleanedNumbers).toEqual([1, 2]);
  });  

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  })

});

