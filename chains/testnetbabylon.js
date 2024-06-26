const testnetbabylon = {
    "chainId": "bbn-test-3",
    "chainName": "Babylon Testnet",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
    "rpc": "https://rpc.testnet3.babylonchain.io",
    "rest": "https://lcd.testnet3.babylonchain.io",
    "nodeProvider": {
      "name": "Babylonchain",
      "email": "contact@babylonchain.io",
      "website": "https://babylonchain.io/"
    },
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "bbn",
      "bech32PrefixAccPub": "bbnpub",
      "bech32PrefixValAddr": "bbnvaloper",
      "bech32PrefixValPub": "bbnvaloperpub",
      "bech32PrefixConsAddr": "bbnvalcons",
      "bech32PrefixConsPub": "bbnvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "BBN",
        "coinMinimalDenom": "ubbn",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "BBN",
        "coinMinimalDenom": "ubbn",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
        "gasPriceStep": {
          "low": 0.007,
          "average": 0.007,
          "high": 0.01
        }
      }
    ],
    "stakeCurrency": {
      "coinDenom": "BBN",
      "coinMinimalDenom": "ubbn",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png"
    },
    "features": ["cosmwasm"],
    "validator_address": "bbnvaloper19nd4z06ymhc4cdlfqt5njprea0ypchapg2vqsg",
  };

export { testnetbabylon};