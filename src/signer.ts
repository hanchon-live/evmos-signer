export function signEthSecp256k1(privkey: string, message: string) {
    return `${privkey} ${message}`
}
