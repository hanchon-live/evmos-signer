const secp = require('secp256k1-native')

function reverse(buf: Buffer) {
    const tmp = []

    let i
    for (i = 0; i < Math.ceil(buf.byteLength / 2); i++) {
        tmp.push(buf[i])
        buf[i] = buf[buf.length - 1 - i]
    }

    const offset = i
    for (; i < buf.byteLength; i++) {
        buf[i] = tmp[2 * offset - i - 1]
    }

    return buf
}

export function signEthSecp256k1(privKey: Buffer, message: Buffer) {
    if (privKey.byteLength !== secp.secp256k1_SECKEYBYTES) {
        return null
    }
    const ctx = secp.secp256k1_context_create(secp.secp256k1_context_SIGN)
    const sig = Buffer.alloc(secp.secp256k1_ecdsa_recoverable_SIGBYTES)
    secp.secp256k1_ecdsa_sign_recoverable(ctx, sig, message, privKey)

    // Reverse the r and s values
    const r: Buffer = reverse(sig.slice(0, 32))
    const s: Buffer = reverse(sig.slice(32, 64))

    // const v: Number = sig.readUInt8(64) + 27
    return sig
}
