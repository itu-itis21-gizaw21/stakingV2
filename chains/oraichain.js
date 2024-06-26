const oraichain = {
    "rpc": "https://rpc.orai.io",
    "rest": "http://lcd.orai.io",
    "nodeProvider": {
      "name": "Oraichain",
      "email": "contact@orai.io",
      "website": "https://orai.io/"
    },
    "chainId": "Oraichain",
    "chainName": "Oraichain",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/chain.png",
    "bech32Config": {
      "bech32PrefixAccPub": "oraipub",
      "bech32PrefixValPub": "oraivaloperpub",
      "bech32PrefixAccAddr": "orai",
      "bech32PrefixConsPub": "oraivalconspub",
      "bech32PrefixValAddr": "oraivaloper",
      "bech32PrefixConsAddr": "oraivalcons"
    },
    "bip44": {
      "coinType": 118
    },
    "stakeCurrency": {
      "coinDenom": "ORAI",
      "coinDecimals": 6,
      "coinMinimalDenom": "orai",
      "coinGeckoId": "oraichain-token",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png"
    },
    "currencies": [
      {
        "coinDenom": "ORAI",
        "coinDecimals": 6,
        "coinMinimalDenom": "orai",
        "coinGeckoId": "oraichain-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png"
      },
      {
        "coinDenom": "ORAIX",
        "coinDecimals": 6,
        "coinMinimalDenom": "factory/orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge/oraix",
        "coinGeckoId": "oraidex",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/factory/orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge/oraix.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "ORAI",
        "coinDecimals": 6,
        "coinMinimalDenom": "orai",
        "coinGeckoId": "oraichain-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png",
        "gasPriceStep": {
          "low": 0.003,
          "average": 0.005,
          "high": 0.007
        }
      }
    ],
    "features": ["cosmwasm"],
    "validator_address": "oraivaloper1lrzxwu4dmy8030waevcpft7rpxjjz26c704ra2"
  }

export { oraichain };