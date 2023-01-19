# Learning Testing in Javascript

## Summary of Testing Setup
- [`/public/testing setup.png`](https://raw.githubusercontent.com/chickensmitten/javascript-unit-testing/main/public/testing%20setup.png?token=GHSAT0AAAAAABWFSHJCE5AZFO4EBHKG5SHYYZBPBPA)
- `npm install -D vitest`
= this is needed in package.json `"test": "vitest --run --reporter verbose"` to see a verbose report when running `npm test`

## Unit Testing Basics
- AAA: Arranging, Act, Assert
  - Arrange: Define the testing environment & values
  - Act: Run the actual code / function that should be tested
  - Assert: Evaluate the produced value / result and compare it to the expected value /result
- ensure you are in right root directory, then run `npm test` to get started with testing.
- use `npm run test:watch` to keep the test constantly running in the background
