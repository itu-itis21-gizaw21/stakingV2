const bandchain = {
    "chainId": "laozi-mainnet",
    "chainName": "BandChain",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/laozi-mainnet/chain.png",
    "rpc": "https://rpc.laozi3.bandchain.org:443",
    "rest": "https://laozi3.bandchain.org/api",
    "nodeProvider": {
      "name": "Band Protocol",
      "email": "dev@bandprotocol.com",
      "website": "https://bandprotocol.com/"
    },
    "bip44": {
      "coinType": 494
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "band",
      "bech32PrefixAccPub": "bandpub",
      "bech32PrefixValAddr": "bandvaloper",
      "bech32PrefixValPub": "bandvaloperpub",
      "bech32PrefixConsAddr": "bandvalcons",
      "bech32PrefixConsPub": "bandvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "BAND",
        "coinMinimalDenom": "uband",
        "coinDecimals": 6,
        "coinGeckoId": "band-protocol",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/laozi-mainnet/chain.png",
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "BAND",
        "coinMinimalDenom": "uband",
        "coinDecimals": 6,
        "coinGeckoId": "band-protocol",
        "gasPriceStep": {
          "low": 0.0025,
          "average": 0.003,
          "high": 0.005
        }
      }
    ],
    "stakeCurrency": {
      "coinDenom": "BAND",
      "coinMinimalDenom": "uband",
      "coinDecimals": 6,
      "coinGeckoId": "band-protocol"
    },
    "features": [],
    "validator_address": "band1l8zzhhe3ltlkk7sd38rcw7u6g9d609t24auf82"
  };

export { bandchain };