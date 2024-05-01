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
import { testnetbabylon } from "./chains/testnetbabylon";
import { testnetentrypoint } from "./chains/testnetentrypoint";
//import { ki_chain } from "./chains/ki_chain";

const chains = {
    

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


    // testnets
    "testnetbabylon" : testnetbabylon,
    "testnetentrypoint" : testnetentrypoint,
    
    };
   
    export { chains };