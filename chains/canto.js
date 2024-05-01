const canto = {
    "rpc": "https://canto-rpc.polkachu.com/",
    "rest": "https://canto-rest.plexnode.wtf",
    "chainId": "canto_7700-1",
    "chainName": "Canto",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/canto_7700/chain.png",
    "nodeProvider": {
      "name": "Plex Labs",
      "email": "contact@plex.engineer",
      "website": "https://plex.engineer/"
    },
    "stakeCurrency": {
      "coinDenom": "CANTO",
      "coinMinimalDenom": "acanto",
      "coinDecimals": 18,
      "coinGeckoId": "canto"
    },
    "walletUrl": "https://canto.io/",
    "walletUrlForStaking": "https://canto.io/staking",
    "bip44": {
      "coinType": 60
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "canto",
      "bech32PrefixAccPub": "cantopub",
      "bech32PrefixValAddr": "cantovaloper",
      "bech32PrefixValPub": "cantovaloperpub",
      "bech32PrefixConsAddr": "cantovalcons",
      "bech32PrefixConsPub": "cantovalconspub"
    },
    "currencies": [
      {
        "coinDenom": "CANTO",
        "coinMinimalDenom": "acanto",
        "coinDecimals": 18,
        "coinGeckoId": "canto",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/canto_7700/chain.png",
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "CANTO",
        "coinMinimalDenom": "acanto",
        "coinDecimals": 18,
        "coinGeckoId": "canto",
        "gasPriceStep": {
          "low": 1250000000000,
          "average": 2500000000000,
          "high": 3750000000000
        }
      }
    ],
    "features": [
      "eth-address-gen",
      "eth-key-sign"
    ]
  };

export { canto };