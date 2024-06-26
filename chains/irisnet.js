const irisnet = {
    "rpc": "https://iris-rpc.publicnode.com:443",
    "rest": "https://lcd-iris.keplr.app",
    "chainId": "irishub-1",
    "chainName": "IRISnet",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/chain.png",
    "stakeCurrency": {
      "coinDenom": "IRIS",
      "coinMinimalDenom": "uiris",
      "coinDecimals": 6,
      "coinGeckoId": "iris-network",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png"
    },
    "walletUrl": "https://wallet.keplr.app/chains/irisnet",
    "walletUrlForStaking": "https://wallet.keplr.app/chains/irisnet",
    "bip44": {
      "coinType": 118
    },
    "alternativeBIP44s": [
      {
        "coinType": 566
      }
    ],
    "bech32Config": {
      "bech32PrefixAccAddr": "iaa",
      "bech32PrefixAccPub": "iap",
      "bech32PrefixValAddr": "iva",
      "bech32PrefixValPub": "ivp",
      "bech32PrefixConsAddr": "ica",
      "bech32PrefixConsPub": "icp"
    },
    "currencies": [
      {
        "coinDenom": "IRIS",
        "coinMinimalDenom": "uiris",
        "coinDecimals": 6,
        "coinGeckoId": "iris-network",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "IRIS",
        "coinMinimalDenom": "uiris",
        "coinDecimals": 6,
        "coinGeckoId": "iris-network",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png",
        "gasPriceStep": {
          "low": 0.2,
          "average": 0.3,
          "high": 0.4
        }
      }
    ],
    "features": [],
    "validator_address":"iva1lrzxwu4dmy8030waevcpft7rpxjjz26cy9jhgg"
  };

export { irisnet };