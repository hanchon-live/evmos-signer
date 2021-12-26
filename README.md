# Evmos signer

A typescript signer for the evmos networks, it supports `secp256k1` and `eth_secp256k1` signing.

## Requirements

- Node v15.8.0

## Installation

```sh
yarn add @hanchon/evmos-signer
```

## Usage

### Signer

```ts
import {
  signEthSecp256k1,
} from "@hanchon/evmos-signer";

const privKey = Buffer.from([
    186, 11, 156, 234, 90, 241, 218, 188, 13, 58, 202, 98, 87, 101, 244,
    128, 253, 23, 0, 180, 96, 155, 216, 190, 230, 170, 65, 163, 85, 86, 11,
    163,
])
const message = Buffer.from([
    177, 240, 144, 132, 71, 52, 192, 86, 100, 12, 4, 148, 127, 217, 62, 166,
    254, 121, 39, 134, 16, 193, 151, 209, 7, 181, 85, 226, 30, 52, 62, 7,
])

const sig = signEthSecp256k1(privKey, message)
```

## Build locally

```sh
yarn install
yarn test
yarn build
```

## TODOs

- Add `secp256k1` support.
