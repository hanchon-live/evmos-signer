import { signEthSecp256k1 } from '../src/signer'

test('test eth signer', () => {
    const privKey = Buffer.from([
        186, 11, 156, 234, 90, 241, 218, 188, 13, 58, 202, 98, 87, 101, 244,
        128, 253, 23, 0, 180, 96, 155, 216, 190, 230, 170, 65, 163, 85, 86, 11,
        163,
    ])
    const message = Buffer.from([
        177, 240, 144, 132, 71, 52, 192, 86, 100, 12, 4, 148, 127, 217, 62, 166,
        254, 121, 39, 134, 16, 193, 151, 209, 7, 181, 85, 226, 30, 52, 62, 7,
    ])
    const sig = Buffer.from([
        245, 167, 163, 221, 231, 60, 6, 188, 101, 237, 235, 104, 205, 107, 214,
        180, 27, 213, 16, 161, 154, 8, 180, 244, 1, 136, 124, 205, 163, 59, 93,
        3, 35, 24, 142, 200, 223, 233, 21, 51, 199, 110, 174, 174, 237, 115, 2,
        104, 131, 241, 235, 156, 137, 31, 182, 244, 214, 186, 161, 183, 140,
        131, 141, 233, 0,
    ])
    expect(signEthSecp256k1(privKey, message)).toStrictEqual(sig)
})
