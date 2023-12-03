import { describe, expect, test } from "@jest/globals";
import { generatePin } from "./generatePasswd";

describe("generatePin function", () => {
  test("Generates PIN with the specified length", () => {
    const length = 4;
    const pin = generatePin(length);
    expect(pin.length).toBe(length);
  });

  test("Generates PIN with digits only", () => {
    const length = 6;
    const pin = generatePin(length);
    expect(/^\d+$/.test(pin)).toBeTruthy();
  });

  test("Generates PIN with correct digit range", () => {
    const length = 3;
    const pin = generatePin(length);
    const digits = pin.split("").map(Number);
    digits.forEach((digit) => {
      expect(digit).toBeGreaterThanOrEqual(0);
      expect(digit).toBeLessThanOrEqual(9);
    });
  });

  test("Generates different PINs for multiple calls", () => {
    const length = 5;
    const pin1 = generatePin(length);
    const pin2 = generatePin(length);
    expect(pin1).not.toBe(pin2);
  });
});
