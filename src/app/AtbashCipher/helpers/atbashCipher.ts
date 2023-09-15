export function atbashCipher(input: string): string {
    const cyrillicAlphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
    const reversedCyrillicAlphabet = 'яюэьыъщшчцхуфтсрпонмлкйизжедгвба';

    let result = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        const index = cyrillicAlphabet.indexOf(char);

        if (index !== -1) {
            const reversedChar = reversedCyrillicAlphabet[index];
            result += input[i] === input[i].toUpperCase() ? reversedChar.toUpperCase() : reversedChar;
        } else {
            result += input[i];
        }
    }

    return result;
}


export function atbashDecrypt(input: string): string {
    const cyrillicAlphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
    const reversedCyrillicAlphabet = 'яюэьыъщшчцхуфтсрпонмлкйизжедгвба';

    let result = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        const index = reversedCyrillicAlphabet.indexOf(char);

        if (index !== -1) {
            const originalChar = cyrillicAlphabet[index];
            result += input[i] === input[i].toUpperCase() ? originalChar.toUpperCase() : originalChar;
        } else {
            result += input[i];
        }
    }

    return result;
}
