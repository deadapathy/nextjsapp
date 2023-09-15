
/**
 * The `caesarCipherEncrypt` function takes a string and a key as input and returns the encrypted
 * string using the Caesar cipher algorithm.
 * @param {string} text - The `text` parameter is a string that represents the text that you want to
 * encrypt using the Caesar cipher algorithm.
 * @param {number} key - The key parameter in the caesarCipherEncrypt function is a number that
 * represents the amount of shift to be applied to each character in the text.
 * @returns a string, which is the result of encrypting the input text using the Caesar cipher
 * algorithm with the given key.
 */
export function caesarCipherEncrypt(text: string, key: number): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Zа-яА-Я]/)) {
            const isUpperCase = char === char.toUpperCase();
            const charCodeA = isUpperCase ? (char >= 'А' && char <= 'Я' ? 1040 : 65) : (char >= 'а' && char <= 'я' ? 1072 : 97);
            const charCodeZ = isUpperCase ? (char >= 'А' && char <= 'Я' ? 1071 : 90) : (char >= 'а' && char <= 'я' ? 1103 : 122);
            const shiftedCharCode = char.charCodeAt(0) - charCodeA + key;
            char = String.fromCharCode(((shiftedCharCode % 26 + 26) % 26) + charCodeA);
        }
        result += char;
    }
    console.log(result);
    return result;
}


/**
 * The function caesarCipherDecrypt takes a text and a key as input and returns the decrypted text
 * using the Caesar cipher algorithm.
 * @param {string} text - The `text` parameter is a string that represents the encrypted text that you
 * want to decrypt using the Caesar cipher algorithm.
 * @param {number} key - The key is an integer value that represents the number of positions to shift
 * each character in the text. A positive key value indicates a right shift, while a negative key value
 * indicates a left shift.
 * @returns the result of calling the `caesarCipherEncrypt` function with the `text` and `-key` as
 * arguments.
 */
export function caesarCipherDecrypt(text: string, key: number): string {
    return caesarCipherEncrypt(text, -key);
}
