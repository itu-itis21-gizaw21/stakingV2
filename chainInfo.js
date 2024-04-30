import { cosmoshub} from "./chains/cosmoshub";
import { celestia} from "./chains/celestia";
import { agoric } from "./chains/agoric";
import { irisnet } from "./chains/irisnet";
import { cheqd } from "./chains/cheqd";
import { kyve } from "./chains/kyve";
import { ux } from "./chains/ux";
import { assetmantle } from "./chains/assetmantle";
import { desmos } from "./chains/desmos";
import { emoney } from "./chains/emoney";
import { crescent } from "./chains/crescent";
import { neutron } from "./chains/neutron";
import { stride } from "./chains/stride";
import { oraichain } from "./chains/oraichain";
import { fxcore } from "./chains/fxcore";
import { canto } from "./chains/canto";
import { shentu } from "./chains/shentu";
import { composable } from "./chains/composable";
import { bandchain } from "./chains/bandchain";
//import { ki_chain } from "./chains/ki_chain";

const chains = {
    "theta-testnet-001": {
        chainId: "theta-testnet-001",
        chainName: "Cosmos Hub Testnet",
        rpc: "https://rpc.sentry-01.theta-testnet.polypore.xyz",
        rest: "https://rest.sentry-01.theta-testnet.polypore.xyz",
        bip44: {
        coinType: 118,
        },
        bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "cosmosvalconspub",
        },
        currencies: [
        {
            coinDenom: "ATOM",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos"
        }
        ],
        feeCurrencies: [
        {
            coinDenom: "ATOM",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
            gasPriceStep: {
            low: 0.01,
            average: 0.02,
            high: 0.1,
            },
        }
        ],
        stakeCurrency: {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        },
        coinType: 118,
        
    },

    "cosmoshub": cosmoshub,
    "celestia" :  celestia,
    "agoric" : agoric,
    "irisnet" : irisnet,
    "cheqd" : cheqd,
    "kyve" : kyve,
    "ux" : ux,
    "assetmantle" : assetmantle,
    "desmos" : desmos,
    "emoney" : emoney,
    "crescent" : crescent,
    "neutron" : neutron,
    "stride" : stride,
    "oraichain" : oraichain,
    "fxcore" : fxcore,
    "canto" : canto,
    "shentu" : shentu,
    "composable" : composable,
    "bandchain" : bandchain,
    };
   
    export { chains };