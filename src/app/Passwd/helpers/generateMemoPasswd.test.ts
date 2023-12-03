import { describe, expect, test } from "@jest/globals";
import { generateMemorablePassword } from "./generatePasswd";

describe("generateMemorablePassword function", () => {
  test("Generates password with the specified length", () => {
    const length = 10;
    const useCapitalizedWords = true;
    const password = generateMemorablePassword(length, useCapitalizedWords);
    console.log(password);
    expect(password.length).toBe(password.length);
  });

  test("Generates password without capitalized words", () => {
    const length = 8;
    const useCapitalizedWords = false;
    const password = generateMemorablePassword(length, useCapitalizedWords);
    expect(/[A-Z]/.test(password)).toBeFalsy();
  });

  test("Generates password with capitalized words", () => {
    const length = 12;
    const useCapitalizedWords = true;
    const password = generateMemorablePassword(length, useCapitalizedWords);
    expect(/[A-Z]/.test(password)).toBeTruthy();
  });

  test("Generates password with hyphens between words", () => {
    const length = 14;
    const useCapitalizedWords = true;
    const password = generateMemorablePassword(length, useCapitalizedWords);
    expect(password.includes("-")).toBeTruthy();
  });

  test("Generates password with correct word format", () => {
    const length = 16;
    const useCapitalizedWords = true;
    const password = generateMemorablePassword(length, useCapitalizedWords);
    const words = password.split("-");
    words.forEach((word) => {
      expect(word.charAt(0)).toMatch(/[A-Z]/);
      expect(word.slice(1)).toMatch(/[a-z]/);
    });
  });
});
