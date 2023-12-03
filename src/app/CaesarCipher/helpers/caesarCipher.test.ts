import { describe, expect, test } from "@jest/globals";
import { caesarCipherEncrypt, caesarCipherDecrypt } from "./caesarCipher";

describe("Caesar Cipher Encryption and Decryption", () => {
  test("Encrypts text using Caesar cipher", () => {
    const originalText = "Hello, World!";
    const key = 3;
    const encryptedText = caesarCipherEncrypt(originalText, key);
    expect(encryptedText).toBe("Khoor, Zruog!");
  });

  test("Decrypts text using Caesar cipher", () => {
    const encryptedText = "Khoor, Zruog!";
    const key = 3;
    const decryptedText = caesarCipherDecrypt(encryptedText, key);
    expect(decryptedText).toBe("Hello, World!");
  });
});
