import { should } from "vitest";
import { stringCalculator } from "..";

describe("stringCalculator", () => {
  it("should return 0 for an empty string", () => {
    const result = stringCalculator("");
    expect(result).toBe(0);
  });

  it("should return the number for a single number", () => {
    const result = stringCalculator("1");
    expect(result).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    const result = stringCalculator("1,2");
    expect(result).toBe(3);
  });

  it("should understand new lines as separators", () => {
    const result = stringCalculator("1\n2,3");
    expect(result).toBe(6);
  });

  it("should support custom delimiters", () => {
    const result = stringCalculator("//;\n1;2");
    expect(result).toBe(3);
  });

  it("should throw an error for negative numbers", () => {
    try {
      stringCalculator("1,-2");
    } catch (e) {
      expect(e.message).toBe("Negatives not allowed");
    }
  });

  it("should throw an error for multiple negative numbers", () => {
    try {
      stringCalculator("1,-2,-3");
    } catch (e) {
      expect(e.message).toBe("Negatives not allowed");
    }
  });

  it("should ignore numbers greater than 1000", () => {
    const result = stringCalculator("2,1001");
    expect(result).toBe(2);
  });

  it("should support custom delimiters of any length", () => {
    const result = stringCalculator("//[***]\n1***2***3");
    expect(result).toBe(6);
  });

  it("should support multiple custom delimiters", () => {
    const result = stringCalculator("//[*][%]\n1*2%3");
    expect(result).toBe(6);
  });

  it("should support multiple custom delimiters of any length", () => {
    const result = stringCalculator("//[***][%%%]\n1***2%%%3");
    expect(result).toBe(6);
  });
});
