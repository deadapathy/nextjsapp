function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

function getKeyMatrix(keyText: string, blockSize: number): number[][] | null {
    keyText = keyText.toUpperCase().replace(/[^A-ZА-Я]/g, '');

    console.log(keyText.length)
    if (keyText.length !== blockSize * blockSize) {
        console.log('Длина ключа должна быть равной квадрату размера блока.');
        return null;
    }

    const keyMatrix: number[][] = [];
    let index = 0;

    for (let i = 0; i < blockSize; i++) {
        keyMatrix[i] = [];
        for (let j = 0; j < blockSize; j++) {
            const charIndex = keyText.charCodeAt(index++) - 'A'.charCodeAt(0);
            keyMatrix[i][j] = charIndex;
        }
    }

    return keyMatrix;
}

function hillCipher(text: string, key: number[][], alphabet: string): string {
    text = text.toUpperCase().replace(/[^A-ZА-Я]/g, '');

    const blockSize = key.length;
    while (text.length % blockSize !== 0) {
        text += 'X';
    }

    let result = '';
    for (let i = 0; i < text.length; i += blockSize) {
        const block = text.substr(i, blockSize);
        for (let j = 0; j < blockSize; j++) {
            let sum = 0;
            for (let k = 0; k < blockSize; k++) {
                const charIndex = alphabet.indexOf(block[k]);
                sum += key[j][k] * charIndex;
            }
            const encryptedChar = alphabet.charAt(mod(sum, alphabet.length));
            result += encryptedChar;
        }
    }

    return result;
}

export function encryptHill(keyText: string, blockSize: number, plaintext: string, alphabet: string) {
    const keyMatrix = getKeyMatrix(keyText, blockSize);

    if (keyMatrix) {
        const encryptedText = hillCipher(plaintext, keyMatrix, alphabet);
        return encryptedText;
    } else {
        console.log('Неверный формат ключа.');
        return '';
    }
}