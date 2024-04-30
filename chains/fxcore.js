const fxcore = {
    "chainId": "fxcore",
    "chainName": "f(x)Core",
    "rpc": "https://fx-json.functionx.io",
    "rest": "https://fx-rest.functionx.io",
    "walletUrl": "https://wallet.keplr.app/chains/fxcore",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/chain.png",
    "bip44": {
      "coinType": 60
    },
    "nodeProvider": {
      "name": "fxCore Network",
      "email": "contact@functionx.io",
      "website":"https://functionx.io"
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "fx",
      "bech32PrefixAccPub": "fxpub",
      "bech32PrefixValAddr": "fxvaloper",
      "bech32PrefixValPub": "fxvaloperpub",
      "bech32PrefixConsAddr": "fxvalcons",
      "bech32PrefixConsPub": "fxvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "FX",
        "coinMinimalDenom": "FX",
        "coinDecimals": 18,
        "coinGeckoId": "fx-coin",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "FX",
        "coinMinimalDenom": "FX",
        "coinDecimals": 18,
        "coinGeckoId": "fx-coin",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png",
        "gasPriceStep": {
          "low": 4000000000000,
          "average": 4200000000000,
          "high": 5000000000000
        }
      }
    ],
    "stakeCurrency": {
      "coinDenom": "FX",
      "coinMinimalDenom": "FX",
      "coinDecimals": 18,
      "coinGeckoId": "fx-coin",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png"
    },
    "features": [
      "eth-address-gen",
      "eth-key-sign"
    ]
  };

export { fxcore };