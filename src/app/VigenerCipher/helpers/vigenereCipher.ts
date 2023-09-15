function encryptChar(char: string, keyChar: string, alphabet: string): string {
    const charIndex = alphabet.indexOf(char);
    const keyIndex = alphabet.indexOf(keyChar);
    if (charIndex === -1) return char;
    const encryptedIndex = (charIndex + keyIndex) % alphabet.length;
    return alphabet.charAt(encryptedIndex);
}

function decryptChar(char: string, keyChar: string, alphabet: string): string {
    const charIndex = alphabet.indexOf(char);
    const keyIndex = alphabet.indexOf(keyChar);
    if (charIndex === -1) return char;
    const decryptedIndex = (charIndex - keyIndex + alphabet.length) % alphabet.length;
    return alphabet.charAt(decryptedIndex);
}

function transform(input: string, key: string, transformChar: (char: string, keyChar: string, alphabet: string) => string, alphabet: string): string {
    const inputUppercase = input.toUpperCase();
    const keyUppercase = key.toUpperCase();
    let result = '';

    for (let i = 0; i < input.length; i++) {
        const inputChar = inputUppercase.charAt(i);
        const keyChar = keyUppercase.charAt(i % keyUppercase.length);
        result += transformChar(inputChar, keyChar, alphabet);
    }

    return result;
}

export function vigenereEncrypt(plainText: string, key: string, alphabet: string): string {
    return transform(plainText, key, encryptChar, alphabet);
}

export function vigenereDecrypt(cipherText: string, key: string, alphabet: string): string {
    return transform(cipherText, key, decryptChar, alphabet);
}

