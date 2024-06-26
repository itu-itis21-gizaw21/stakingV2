const desmos = {
    "chainId": "desmos-mainnet",
    "chainName": "Desmos",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/desmos-mainnet/chain.png",
    "rpc": "https://rpc.mainnet.desmos.network",
    "rest": "https://api.mainnet.desmos.network",
    "nodeProvider": {
        "name": "Forbole",
        "email": "info@forbole.com",
        "website": "https://www.forbole.com"
    },
    "bip44": {
        "coinType": 852
    },
    "bech32Config": {
        "bech32PrefixAccAddr": "desmos",
        "bech32PrefixAccPub": "desmospub",
        "bech32PrefixValAddr": "desmosvaloper",
        "bech32PrefixValPub": "desmosvaloperpub",
        "bech32PrefixConsAddr": "desmosvalcons",
        "bech32PrefixConsPub": "desmosvalconspub"
    },
    "currencies": [
        {
            "coinDenom": "DSM",
            "coinMinimalDenom": "udsm",
            "coinDecimals": 6,
            "coinGeckoId": "desmos",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/desmos-mainnet/chain.png",
        }
    ],
    "feeCurrencies": [
        {
            "coinDenom": "DSM",
            "coinMinimalDenom": "udsm",
            "coinDecimals": 6,
            "coinGeckoId": "desmos",
            "gasPriceStep": {
                "low": 0.01,
                "average": 0.03,
                "high": 0.05
            }
        }
    ],
    "stakeCurrency": {
        "coinDenom": "DSM",
        "coinMinimalDenom": "udsm",
        "coinDecimals": 6,
        "coinGeckoId": "desmos"
    },
    "features": [],
    "validator_address": "desmosvaloper1y6j0ych2elrxsqmxg5z39svtdlnkcxql4wvclc"
};

export { desmos };