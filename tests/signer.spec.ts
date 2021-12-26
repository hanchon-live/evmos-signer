import { signEthSecp256k1 } from '../src/signer'

test('test eth signer', () => {
    let privkey = 'privkey'
    let message = '0x0000000'

    expect(signEthSecp256k1(privkey, message)).toBe(`${privkey} ${message}`)
})
