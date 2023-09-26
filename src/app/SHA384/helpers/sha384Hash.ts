import * as crypto from 'crypto';

export function sha384HashString(inputString: string): string {
    const hash = crypto.createHash('sha384');
    hash.update(inputString);
    return hash.digest('hex');
}