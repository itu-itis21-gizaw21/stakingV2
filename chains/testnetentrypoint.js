const testnetentrypoint = {
    "chainId": "entrypoint-pubtest-2",
    "chainName": "EntryPoint Testnet",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/chain.png",
    "rpc": "https://testnet-rpc.entrypoint.zone",
    "rest": "https://testnet-rest.entrypoint.zone",
    "nodeProvider": {
      "name": "Simply Staking",
      "email": "staking@simplystaking.com",
      "website":"https://simplystaking.com/"
    },
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "entrypoint",
      "bech32PrefixAccPub": "entrypointpub",
      "bech32PrefixValAddr": "entrypointvaloper",
      "bech32PrefixValPub": "entrypointvaloperpub",
      "bech32PrefixConsAddr": "entrypointvalcons",
      "bech32PrefixConsPub": "entrypointvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "ENTRY",
        "coinMinimalDenom": "uentry",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/uentry.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "ATOM",
        "coinMinimalDenom": "ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5",
        "coinDecimals": 6,
        "gasPriceStep": {
          "low": 0.01,
          "average": 0.01,
          "high": 0.02
        }
      }
    ],
    "stakeCurrency": {
      "coinDenom": "ENTRY",
      "coinMinimalDenom": "uentry",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/uentry.png"
    },
    "features": [],
    "validator_address" : "entrypointvaloper1eq2ecjfaayr2lnrsrytax5cg32c7hk6njgg3q9",
  };

export{ testnetentrypoint}