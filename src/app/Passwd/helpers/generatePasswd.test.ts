import { describe, expect, test } from "@jest/globals";
import { generatePassword } from "./generatePasswd";

describe("generatePassword function", () => {
  test("Generates password with the specified length", () => {
    const length = 10;
    const useNumbers = true;
    const useSymbols = true;
    const password = generatePassword(length, useNumbers, useSymbols);
    expect(password.length).toBe(length);
  });

  test("Generates password with uppercase letters", () => {
    const length = 8;
    const useNumbers = false;
    const useSymbols = false;
    const password = generatePassword(length, useNumbers, useSymbols);
    expect(/[A-Z]/.test(password)).toBeTruthy();
  });

  test("Generates password with numbers", () => {
    const length = 12;
    const useNumbers = true;
    const useSymbols = false;
    const password = generatePassword(length, useNumbers, useSymbols);
    expect(/\d/.test(password)).toBeTruthy();
  });

  test("Generates password with symbols", () => {
    const length = 15;
    const useNumbers = true;
    const useSymbols = true;
    const password = generatePassword(length, useNumbers, useSymbols);
    expect(/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)).toBeTruthy();
  });

  test("Generates password with a combination of characters", () => {
    const length = 14;
    const useNumbers = true;
    const useSymbols = true;
    const password = generatePassword(length, useNumbers, useSymbols);
    expect(/[A-Z]/.test(password)).toBeTruthy();
    expect(/\d/.test(password)).toBeTruthy();
    expect(/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)).toBeTruthy();
  });
});
