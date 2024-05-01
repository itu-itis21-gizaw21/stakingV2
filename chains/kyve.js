const kyve = {
    "rpc": "https://rpc-eu-1.kyve.network",
    "rest": "https://lcd-kyve.keplr.app",
    "chainId": "kyve-1",
    "chainName": "KYVE",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/chain.png",
    "stakeCurrency": {
      "coinDenom": "KYVE",
      "coinMinimalDenom": "ukyve",
      "coinDecimals": 6,
      "coinGeckoId": "kyve-network",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png"
    },
    "walletUrlForStaking": "https://wallet.keplr.app/chains/kyve",
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "kyve",
      "bech32PrefixAccPub": "kyvepub",
      "bech32PrefixValAddr": "kyvevaloper",
      "bech32PrefixValPub": "kyvevaloperpub",
      "bech32PrefixConsAddr": "kyvevalcons",
      "bech32PrefixConsPub": "kyvevalconspub"
    },
    "currencies": [
      {
        "coinDenom": "KYVE",
        "coinMinimalDenom": "ukyve",
        "coinDecimals": 6,
        "coinGeckoId": "kyve-network",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "KYVE",
        "coinMinimalDenom": "ukyve",
        "coinDecimals": 6,
        "coinGeckoId": "kyve-network",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png",
        "gasPriceStep": {
          "low": 0.02,
          "average": 0.03,
          "high": 0.06
        }
      }
    ],
    "features": [],
    "validator_address":"kyvevaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cpg4ljc"
  };

export { kyve };