// Функция для шифрования текста шифром Цезаря
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
// Функция для дешифрования текста, зашифрованного шифром Цезаря
export function caesarCipherDecrypt(text: string, key: number): string {
    return caesarCipherEncrypt(text, -key);
}

// Пример использования
// const plaintext: string = "Hello, World!";
// const key: number = 3;

// const encryptedText: string = caesarCipherEncrypt(plaintext, key);
// console.log("Зашифрованный текст:", encryptedText);

// const decryptedText: string = caesarCipherDecrypt(encryptedText, key);
// console.log("Расшифрованный текст:", decryptedText);
