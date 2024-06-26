const agoric = {
    "rpc": "https://agoric-rpc.polkachu.com:443",
    "rest": "https://lcd-agoric.keplr.app",
    "chainId": "agoric-3",
    "chainName": "Agoric",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
    "stakeCurrency": {
      "coinDenom": "BLD",
      "coinMinimalDenom": "ubld",
      "coinDecimals": 6,
      "coinGeckoId": "agoric",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
    },
    "walletUrl": "https://wallet.keplr.app/chains/agoric",
    "walletUrlForStaking": "https://wallet.keplr.app/chains/agoric",
    "bip44": {
      "coinType": 564
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "agoric",
      "bech32PrefixAccPub": "agoricpub",
      "bech32PrefixValAddr": "agoricvaloper",
      "bech32PrefixValPub": "agoricvaloperpub",
      "bech32PrefixConsAddr": "agoricvalcons",
      "bech32PrefixConsPub": "agoricvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "BLD",
        "coinMinimalDenom": "ubld",
        "coinDecimals": 6,
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
      },
      {
        "coinDenom": "IST",
        "coinMinimalDenom": "uist",
        "coinDecimals": 6,
        "coinGeckoId": "inter-stable-token",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png"    
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "BLD",
        "coinMinimalDenom": "ubld",
        "coinDecimals": 6,
        "coinGeckoId": "agoric",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        "gasPriceStep": {
          "low": 0.03,
          "average": 0.05,
          "high": 0.07
        }
      },
      {
        "coinDenom": "IST",
        "coinMinimalDenom": "uist",
        "coinDecimals": 6,
        "coinGeckoId": "inter-stable-token",
        "gasPriceStep": {
          "low": 0.0034,
          "average": 0.007,
          "high": 0.02
        }
      }
    ],
    "features": [],
    "alternativeBIP44s": [
      {
        "coinType": 118
      }
    ],
    "validator_address":"agoricvaloper1k334nqagmmxajt32hdtxrpnsavz0njwa3mtcqc"
  };

export { agoric };