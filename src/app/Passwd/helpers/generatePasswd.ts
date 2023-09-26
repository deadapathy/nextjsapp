import { wordList } from "./wordList";

export function generatePassword(length: number, useNumbers: boolean, useSymbols: boolean): string {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = uppercaseLetters + lowercaseLetters;

    if (useNumbers) {
        validChars += numbers;
    }

    if (useSymbols) {
        validChars += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    return password;
}


export function generateMemorablePassword(length: number, useCapitalizedWords: boolean): string {
    const getRandomElement = (array: string[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    let password = '';

    for (let i = 0; i < length; i++) {
        const word = getRandomElement(wordList);

        if (useCapitalizedWords) {
            password += capitalizeFirstLetter(word);
        } else {
            password += word;
        }

        if (i < length - 1) {
            password += '-';
        }
    }

    return password;
}


export function generatePin(length: number): string {
    let pin = '';
    const minDigit = 0;
    const maxDigit = 9;

    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * (maxDigit - minDigit + 1)) + minDigit;
        pin += randomDigit.toString();
    }

    return pin;
}
