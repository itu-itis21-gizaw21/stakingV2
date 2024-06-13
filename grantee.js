import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

async function executeDelegation() {
  const granteeMnemonic = "grantee mnemonic here";
  const granteeWallet = await DirectSecp256k1HdWallet.fromMnemonic(granteeMnemonic, {
    prefix: "cosmos",
  });
  const [granteeAccount] = await granteeWallet.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    "rpc-endpoint",
    granteeWallet
  );

  const granter = "cosmos1..."; // Replace with granter address
  const validator = "validator-address";
  const amount = coins(100, "stake");

  const delegateMsg = MsgDelegate.fromPartial({
    delegatorAddress: granter,
    validatorAddress: validator,
    amount,
  });

  const execMsg = MsgExec.fromPartial({
    grantee: granteeAccount.address,
    msgs: [
      {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(delegateMsg).finish(),
      },
    ],
  });

  const fee = {
    amount: coins(2000, "stake"),
    gas: "200000",
  };

  const result = await client.signAndBroadcast(granteeAccount.address, [execMsg], fee);
  assertIsBroadcastTxSuccess(result);

  console.log("Delegation executed successfully");
}

executeDelegation().catch(console.error);
