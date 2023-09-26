import * as crypto from 'crypto';

export function sha256HashString(inputString: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}