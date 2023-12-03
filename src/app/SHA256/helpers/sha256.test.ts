import { describe, expect, test } from "@jest/globals";
import { sha256HashString } from "./sha256Hash";

describe("Test SHA-256 hash", () => {
  test("Encrypt string with sha 256 hash", () => {
    const originalText = "Hello, World!";

    const encryptedText = sha256HashString(originalText);

    expect(encryptedText).toBe(
      "dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f"
    );
  });
});
