import * as crypto from 'crypto';

export function sha1HashString(inputString: string): string {
    const hash = crypto.createHash('sha1');
    hash.update(inputString);
    return hash.digest('hex');
}
