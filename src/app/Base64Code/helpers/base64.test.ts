import { describe, expect, test } from "@jest/globals";
import { codeInText, textInCode } from "./codeInText";

describe("Base 64 encrypt and decrypt", () => {
  test("Encrypts text using base 64 code", () => {
    const textToEncode = "Test";

    const encryptedText = textInCode(textToEncode).toLowerCase();
    expect(encryptedText).toBe("vgvzda==");
  });

  test("Decode text using base 64 decode", () => {
    const textToDecode = "vgvzda==";

    const decodedText = codeInText(textToDecode).toLowerCase();
    expect(decodedText).toBe("Test");
  });
});
