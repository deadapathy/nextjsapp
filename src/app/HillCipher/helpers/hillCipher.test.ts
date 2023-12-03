import { describe, expect, test } from "@jest/globals";
import { encryptHill } from "./hillCipher";

describe("Caesar Cipher Encryption and Decryption", () => {
  test("Encrypts text using Caesar cipher", () => {
    const originalText = "Hello, World!";
    const blockSize = 2;
    const key = "test";
    const alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const encryptedText = encryptHill(
      key,
      blockSize,
      originalText,
      alphabet
    ).toLowerCase();
    expect(encryptedText).toBe("кеzimтшfщб");
  });
});
