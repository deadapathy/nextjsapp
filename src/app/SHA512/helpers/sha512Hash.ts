import * as crypto from 'crypto';

export function sha512HashString(inputString: string): string {
    const hash = crypto.createHash('sha512');
    hash.update(inputString);
    return hash.digest('hex');
}