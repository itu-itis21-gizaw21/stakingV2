/* import { DirectSecp256k1HdWallet, SigningStargateClient, assertIsBroadcastTxSuccess } from "@cosmjs/stargate";
import { coins } from "@cosmjs/proto-signing";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

async function autostakeRewards() {
  const mnemonic = "your mnemonic here"; // Mnemonic of the account
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
  const [account] = await wallet.getAccounts();

  const client = await SigningStargateClient.connectWithSigner("rpc-endpoint", wallet);

  const delegatorAddress = account.address;
  const validatorAddress = "validator-address";

  // Step 1: Create the withdraw rewards message
  const withdrawMsg = MsgWithdrawDelegatorReward.fromPartial({
    delegatorAddress,
    validatorAddress,
  });

  // Step 2: Get the balance of the delegator to determine the amount to redelegate
  const balance = await client.getBalance(delegatorAddress, "stake");

  // Step 3: Create the delegate message
  const delegateMsg = MsgDelegate.fromPartial({
    delegatorAddress,
    validatorAddress,
    amount: balance,
  });

  // Step 4: Combine both messages into a single transaction
  const fee = {
    amount: coins(2000, "stake"),
    gas: "300000", // Adjust gas limit accordingly
  };

  const result = await client.signAndBroadcast(delegatorAddress, [withdrawMsg, delegateMsg], fee);
  assertIsBroadcastTxSuccess(result);

  console.log("Rewards withdrawn and delegated successfully");
}

autostakeRewards().catch(console.error);
 */

import cron from 'node-cron';
import { DirectSecp256k1HdWallet, SigningStargateClient, assertIsBroadcastTxSuccess } from "@cosmjs/stargate";
import { coins } from "@cosmjs/proto-signing";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

async function autostakeRewards() {
  const mnemonic = "your mnemonic here"; // Mnemonic of the account
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
  const [account] = await wallet.getAccounts();

  const client = await SigningStargateClient.connectWithSigner("rpc-endpoint", wallet);

  const delegatorAddress = account.address;
  const validatorAddress = "validator-address";

  // Step 1: Create the withdraw rewards message
  const withdrawMsg = MsgWithdrawDelegatorReward.fromPartial({
    delegatorAddress,
    validatorAddress,
  });

  // Step 2: Get the balance of the delegator to determine the amount to redelegate
  const balance = await client.getBalance(delegatorAddress, "stake");

  // Step 3: Create the delegate message
  const delegateMsg = MsgDelegate.fromPartial({
    delegatorAddress,
    validatorAddress,
    amount: balance,
  });

  // Step 4: Combine both messages into a single transaction
  const fee = {
    amount: coins(2000, "stake"),
    gas: "300000", // Adjust gas limit accordingly
  };

  const result = await client.signAndBroadcast(delegatorAddress, [withdrawMsg, delegateMsg], fee);
  assertIsBroadcastTxSuccess(result);

  console.log("Rewards withdrawn and delegated successfully");
}

// Schedule the autostaking function to run every 24 hours
cron.schedule('0 0 * * *', () => {
  console.log('Running autostakeRewards...');
  autostakeRewards().catch(console.error);
});

console.log('Cron job scheduled. Autostaking will run every 24 hours.');
