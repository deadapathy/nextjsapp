

export function codeInText(base64String: string) {

    const text = atob(base64String);
    return text;
};

export function textInCode(base64Code: string) {
    const text = btoa(base64Code);
    return text;
}