import {SigningStargateClient} from "@cosmjs/stargate";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

import {chains} from "./chainInfo.js";

window.addEventListener('load', async () => {
  
  const inputAmount = document.getElementById('amount');
  const cosmosAdd = document.getElementById('cosmosAdd');
  const cosmosBal = document.getElementById('cosmosBal');
  const chainId  = "cosmoshub-4";
  const rpcUrl = chains[chainId].rpc;
  const memo = "Use your power wisely";

  function setTextContent(elementId, text) {
    elementId.textContent = text;
  }
  const keplr = window.keplr;

  document.addEventListener("click", async event => {
    if(event.target.id === "connect") {
    if (!keplr) {
      console.log("Keplr extension not installed");
      return;
    }

    try {
      await keplr.experimentalSuggestChain(chains[chainId]);
      await keplr.enable(chainId);
  
      
      const offlineSigner = keplr.getOfflineSigner(chainId);
      const accounts = (await offlineSigner.getAccounts())[0];
      const address = accounts.address;
      const signingClient = await SigningStargateClient.connectWithSigner(
        rpcUrl,
        offlineSigner
        ); 
  
        const myBalance = (
        await signingClient.getBalance(address, "uatom")
        ).amount;
    
            
      setTextContent(cosmosAdd, "Cosmos Hub" +": "+ address.slice(0, 5) + "..." + (accounts.address).slice(-5));
      setTextContent(cosmosBal,"Balance: " +  myBalance/1000000 + "ATOM");
  
  
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }

  if (event.target.id === "stake") {
    console.log("Hello delegate!")
    const value = inputAmount.value;
  const offlineSigner = keplr.getOfflineSigner(chainId);
  const accounts = (await offlineSigner.getAccounts())[0];
  const address = accounts.address;

  console.log("Hello delegate!")
 
   const msg = MsgDelegate.fromPartial({
    delegatorAddress: "cosmos1nhzfugalfm29htfep7tx3y5fhm8jhks5cy48sl", //01node
    validatorAddress: "cosmosvaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cpzvumd",
    amount: { denom: "uatom", amount: value },
  }); 
  console.log("msg",msg)

   const signingClient = await SigningStargateClient.connectWithSigner(
  rpcUrl,
  offlineSigner
); 

   const msgAny = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: msg,
  }; 
   const fee = {
    amount: [
      {
        denom: "uatom",
        amount: value,
      },
    ],
    gas: "980000", // 180k
  };
  console.log(msgAny)
  const gasUsed = await signingClient.signAndBroadcast(
      "cosmos1nhzfugalfm29htfep7tx3y5fhm8jhks5cy48sl",
      [msgAny],
    fee,
    memo
  ); 
  console.log("Gas used: ", gasUsed);
  console.log("codee", gasUsed.code) 
  if (gasUsed.code === 0) {
    alert("Transaction successful");
  } else {
    alert("Transaction failed");
  }
  }
  }
  );
});




