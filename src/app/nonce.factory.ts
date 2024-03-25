export function nonceFactory () {
    const nonce = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    (globalThis as any).nonceValue = nonce;
    return nonce;
}