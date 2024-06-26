const composable = {
  "rpc": "https://rpc.cosmos.directory/composable",
  "rest": "https://composable-api.lavenderfive.com:443",
  "nodeProvider": {
    "name": "Lavender.Five Nodes",
    "email": "hello@lavenderfive.com",
    "website": "https://lavenderfive.com/"
  },
  "chainId": "centauri-1",
  "chainName": "Composable",
  "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/chain.png",
  "stakeCurrency": {
    "coinDenom": "PICA",
    "coinMinimalDenom": "ppica",
    "coinDecimals": 12,
    "coinGeckoId": "picasso",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png"
  },
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "centauri",
    "bech32PrefixAccPub": "centauripub",
    "bech32PrefixValAddr": "centaurivaloper",
    "bech32PrefixValPub": "centaurivaloperpub",
    "bech32PrefixConsAddr": "centaurivalcons",
    "bech32PrefixConsPub": "centaurivalconspub"
  },
  "currencies": [
    {
      "coinDenom": "PICA",
      "coinMinimalDenom": "ppica",
      "coinDecimals": 12,
      "coinGeckoId": "picasso",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png"
    },
    {
      "coinDenom": "KSM",
      "coinMinimalDenom": "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
      "coinDecimals": 12,
      "coinGeckoId": "kusama",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ksm.png"
    },
    {
      "coinDenom": "DOT",
      "coinMinimalDenom": "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
      "coinDecimals": 10,
      "coinGeckoId": "polkadot",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/dot.png"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "PICA",
      "coinMinimalDenom": "ppica",
      "coinDecimals": 12,
      "coinGeckoId": "picasso",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png",
      "gasPriceStep": {
        "low": 0,
        "average": 0,
        "high": 0
      }
    }
  ],
  "features": [],
  "validator_address": "picavaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cln5uap",
};

export { composable };