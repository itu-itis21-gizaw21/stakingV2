const assetmantle = {
    "chainId": "mantle-1",
    "chainName": "AssetMantle",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
    "nodeProvider": {
      "name": "mantleNode",
      "email": "hello@assetmantle.one",
      "website": "https://assetmantle.one/"
    },
    "rpc": "https://rpc.assetmantle.one",
    "rest": "https://rest.assetmantle.one",
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "mantle",
      "bech32PrefixAccPub": "mantlepub",
      "bech32PrefixValAddr": "mantlevaloper",
      "bech32PrefixValPub": "mantlevaloperpub",
      "bech32PrefixConsAddr": "mantlevalcons",
      "bech32PrefixConsPub": "mantlevalconspub"
    },
    "currencies": [
      {
        "coinDenom": "MNTL",
        "coinMinimalDenom": "umntl",
        "coinDecimals": 6,
        "coinGeckoId": "assetmantle",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "MNTL",
        "coinMinimalDenom": "umntl",
        "coinDecimals": 6,
        "coinGeckoId": "assetmantle",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.025,
          "high": 0.04
        }
      }
    ],
    "stakeCurrency": {
      "coinDenom": "MNTL",
      "coinMinimalDenom": "umntl",
      "coinDecimals": 6,
      "coinGeckoId": "assetmantle",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png"
    },
    "features": [],
    "walletUrl": "https://wallet.assetmantle.one",
    "walletUrlForStaking": "https://wallet.assetmantle.one/stake"
  };

export { assetmantle };