const ux = {
    "rpc": "https://umee.rpc.kjnodes.com/",
    "rest": "https://lcd-umee.keplr.app",
    "chainId": "umee-1",
    "chainName": "UX",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
    "stakeCurrency": {
      "coinDenom": "UX",
      "coinMinimalDenom": "uumee",
      "coinDecimals": 6,
      "coinGeckoId": "umee",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png"
    },
    "walletUrl": "https://wallet.keplr.app/chains/umee",
    "walletUrlForStaking": "https://wallet.keplr.app/chains/umee",
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "umee",
      "bech32PrefixAccPub": "umeepub",
      "bech32PrefixValAddr": "umeevaloper",
      "bech32PrefixValPub": "umeevaloperpub",
      "bech32PrefixConsAddr": "umeevalcons",
      "bech32PrefixConsPub": "umeevalconspub"
    },
    "currencies": [
      {
        "coinDenom": "UX",
        "coinMinimalDenom": "uumee",
        "coinDecimals": 6,
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "UX",
        "coinMinimalDenom": "uumee",
        "coinDecimals": 6,
        "coinGeckoId": "umee",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        "gasPriceStep": {
          "low": 0.06,
          "average": 0.1,
          "high": 0.14
        }
      }
    ],
    "features": ["authz-msg-revoke-fixed"],
    "validator_address":"umeevaloper12h8fpmg5qs570rmlem27km5xu4l2gv0lapuels"
  };

export { ux };