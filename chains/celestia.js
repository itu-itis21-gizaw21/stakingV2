const celestia = {
    "bech32Config": {
      "bech32PrefixAccAddr": "celestia",
      "bech32PrefixAccPub": "celestiapub",
      "bech32PrefixConsAddr": "celestiavalcons",
      "bech32PrefixConsPub": "celestiavalconspub",
      "bech32PrefixValAddr": "celestiavaloper",
      "bech32PrefixValPub": "celestiavaloperpub"
    },
    "bip44": {
      "coinType": 118
    },
    "chainId": "celestia",
    "chainName": "Celestia",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
    "currencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "TIA",
        "coinGeckoId": "celestia",
        "coinMinimalDenom": "utia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png"
      }
    ],
    "features": [],
    "feeCurrencies": [
      {
        "coinDecimals": 6,
        "coinDenom": "TIA",
        "coinGeckoId": "celestia",
        "coinMinimalDenom": "utia",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.02,
          "high": 0.1
        }
      }
    ],
    "rpc": "https://celestia-rpc.publicnode.com:443",
    "rest": "https://lcd-celestia.keplr.app",
    "stakeCurrency": {
      "coinDecimals": 6,
      "coinDenom": "TIA",
      "coinGeckoId": "celestia",
      "coinMinimalDenom": "utia",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/utia.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia",
    "validator_address": "celestiavaloper1lrzxwu4dmy8030waevcpft7rpxjjz26csrtqm4"
  };

export { celestia};