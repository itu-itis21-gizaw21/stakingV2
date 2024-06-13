import { DirectSecp256k1HdWallet, SigningStargateClient, assertIsBroadcastTxSuccess } from "@cosmjs/stargate";
import { coins } from "@cosmjs/proto-signing";
import { 
  WithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

async function autostakeRewards() {
  const mnemonic = "your mnemonic here"; // Mnemonic of the account
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
  const [account] = await wallet.getAccounts();

  const client = await SigningStargateClient.connectWithSigner("rpc-endpoint", wallet);

  const delegatorAddress = account.address;
  const validatorAddress = "validator-address";

  // Step 1: Withdraw rewards
  const withdrawMsg = MsgWithdrawDelegatorReward.fromPartial({
    delegatorAddress,
    validatorAddress,
  });

  const withdrawFee = {
    amount: coins(2000, "stake"),
    gas: "200000",
  };

  let result = await client.signAndBroadcast(delegatorAddress, [withdrawMsg], withdrawFee);
  assertIsBroadcastTxSuccess(result);

  console.log("Rewards withdrawn successfully");

  // Step 2: Get the balance of the delegator to determine the amount to redelegate
  const balance = await client.getBalance(delegatorAddress, "stake");

  // Step 3: Delegate the collected rewards back to the validator
  const delegateMsg = MsgDelegate.fromPartial({
    delegatorAddress,
    validatorAddress,
    amount: balance,
  });

  const delegateFee = {
    amount: coins(2000, "stake"),
    gas: "200000",
  };

  result = await client.signAndBroadcast(delegatorAddress, [delegateMsg], delegateFee);
  assertIsBroadcastTxSuccess(result);

  console.log("Rewards delegated successfully");
}

autostakeRewards().catch(console.error);


import cron from 'node-cron';

// Schedule the autostaking function to run every 24 hours
cron.schedule('0 0 * * *', () => {
  console.log('Running autostakeRewards...');
  autostakeRewards().catch(console.error);
});

console.log('Cron job scheduled. Autostaking will run every 24 hours.');
