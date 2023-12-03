import { describe, expect, test } from "@jest/globals";
import { encodeHuffman } from "./haffman";

describe("Haffman encrypt", () => {
  test("Encrypts text using Haffman cipher", () => {
    const textToEncode = "Test";

    const encryptedText = encodeHuffman(textToEncode);
    expect(encryptedText).toBe("00011011");
  });
});
