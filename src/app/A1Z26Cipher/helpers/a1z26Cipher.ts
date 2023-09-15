export function encryptA1Z26(input: string): string {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i].toUpperCase();
        if (char === ' ') {
            result += ' ';
        } else {
            const charCode = char.charCodeAt(0);
            if (charCode >= 1040 && charCode <= 1071) {
                result += (charCode - 1039).toString();
            }
        }
        if (i !== input.length - 1) {
            result += '-';
        }
    }

    return result;
}

export function decryptA1Z26(input: string): string {
    let result = '';

    const chunks = input.split('-');
    for (const chunk of chunks) {
        if (chunk === '') {
            result += ' ';
        } else {
            const number = parseInt(chunk, 10);
            if (!isNaN(number) && number >= 1 && number <= 32) {
                result += String.fromCharCode(number + 1039);
            }
        }
    }

    return result;
}
