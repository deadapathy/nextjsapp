import * as crypto from 'crypto';

export function md5HashString(inputString: string): string {
    const hash = crypto.createHash('md5');
    hash.update(inputString);
    return hash.digest('hex');
}
