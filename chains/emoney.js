const emoney = {
    "rpc": "https://emoney.validator.network",
    "rest": "https://emoney.validator.network/api",
    "nodeProvider": {
      "name": "Validator Network",
      "email": "contact@validator.network",
      "website": "https://twitter.com/validator_net"
    },
    "chainId": "emoney-3",
    "chainName": "e-Money",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/chain.png",
    "stakeCurrency": {
      "coinDenom": "NGM",
      "coinMinimalDenom": "ungm",
      "coinDecimals": 6,
      "coinGeckoId": "e-money",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png"
    },
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "emoney",
      "bech32PrefixAccPub": "emoneypub",
      "bech32PrefixValAddr": "emoneyvaloper",
      "bech32PrefixValPub": "emoneyvaloperpub",
      "bech32PrefixConsAddr": "emoneyvalcons",
      "bech32PrefixConsPub": "emoneyvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "NGM",
        "coinMinimalDenom": "ungm",
        "coinDecimals": 6,
        "coinGeckoId": "e-money",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png"
      },
      {
        "coinDenom": "EEUR",
        "coinMinimalDenom": "eeur",
        "coinDecimals": 6,
        "coinGeckoId": "e-money-eur"
      },
      {
        "coinDenom": "EDKK",
        "coinMinimalDenom": "edkk",
        "coinDecimals": 6
      },
      {
        "coinDenom": "ESEK",
        "coinMinimalDenom": "esek",
        "coinDecimals": 6
      },
      {
        "coinDenom": "ENOK",
        "coinMinimalDenom": "enok",
        "coinDecimals": 6
      },
      {
        "coinDenom": "ECHF",
        "coinMinimalDenom": "echf",
        "coinDecimals": 6
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "NGM",
        "coinMinimalDenom": "ungm",
        "coinDecimals": 6,
        "coinGeckoId": "e-money",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png",
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      },
      {
        "coinDenom": "EEUR",
        "coinMinimalDenom": "eeur",
        "coinDecimals": 6,
        "coinGeckoId": "e-money-eur",
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      },
      {
        "coinDenom": "ECHF",
        "coinMinimalDenom": "echf",
        "coinDecimals": 6,
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      },
      {
        "coinDenom": "ESEK",
        "coinMinimalDenom": "esek",
        "coinDecimals": 6,
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      },
      {
        "coinDenom": "ENOK",
        "coinMinimalDenom": "enok",
        "coinDecimals": 6,
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      },
      {
        "coinDenom": "EDKK",
        "coinMinimalDenom": "edkk",
        "coinDecimals": 6,
        "gasPriceStep": {
          "low": 1,
          "average": 1,
          "high": 1
        }
      }
    ],
    "features": [],
    "validator_address":"emoneyvaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cv4yf7w"
  };

export { emoney };