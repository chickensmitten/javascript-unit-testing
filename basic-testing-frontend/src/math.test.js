import { it, expect } from "vitest";
import { add } from "./math";

it("should summarise all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );  
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numberic string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );    
  expect(result).toBe(expectedResult);
})

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
})

it("should throw an error if no value is passed into the function", () => {
  // // (1) first method to test error
  // try {
  //   const result = add();
  // } catch(error) {
  //   expect(error).toBeDefined();
  // }

  // (2) second method to test error
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();

  // // use .not to check for the opposite
  // expect(resultFn).not.toThrow();
});

it("should throw an error if provided with multiple arugments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  // this function would not be possible in typescript
  // because it knows that it can only take one parameter
  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
})