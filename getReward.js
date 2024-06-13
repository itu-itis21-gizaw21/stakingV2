/* 
const fetch = require('node-fetch');

const vAdd = "cosmosvaloper1gpx52r9h3zeul45amvcy2pysgvcwddxrgx6cnv"
async function FetchReward() {
  try {
    const response = await fetch('https://rest.cosmos.directory/cosmoshub/cosmos/distribution/v1beta1/delegators/cosmos1nhzfugalfm29htfep7tx3y5fhm8jhks5cy48sl/rewards');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const result = await response.json();
    const rewards = result.rewards.reduce(
      (a, v) => ({ ...a, [v.validator_address]: v }),
      {}
    );
    const total = Object.values(rewards).reduce((sum, item) => {
      const reward = item.reward.find(el => el.denom === "uatom")
      if (reward && item.validator_address === vAdd) {
        return sum + parseInt(reward.amount)
      }
      return sum
    }, 0)

    return total
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


FetchReward()
  .then(rewards => {
    console.log('Fetched rewards:', rewards);
  })
  .catch(error => {
    console.error('Error fetching rewards:', error);
  }); */

const delegatorAddress = "cosmos1nhzfugalfm29htfep7tx3y5fhm8jhks5cy48sl";
const validatorAddress = "cosmosvaloper1gpx52r9h3zeul45amvcy2pysgvcwddxrgx6cnv";
const rpcEndpoint = 'https://rpc.cosmos.directory/cosmoshub';
const { setupDistributionExtension, QueryClient } = require('@cosmjs/stargate');
const { Tendermint34Client } = require('@cosmjs/tendermint-rpc');

async function queryDelegationRewards() {

  const tendermintClient = await Tendermint34Client.connect(rpcEndpoint);
  
  const queryClient = QueryClient.withExtensions(tendermintClient, setupDistributionExtension);

  const rewardsResponse = await queryClient.distribution.delegationRewards(delegatorAddress, validatorAddress);

  const rewards = rewardsResponse.rewards;
  
  
  // Convert and print rewards
  const uatomRewards = rewards.filter(reward => reward.denom === "uatom");
  uatomRewards.forEach(reward => {
    const amount = parseFloat(reward.amount) / 10e17;
    console.log(`Denom: ${reward.denom}, Amount: ${amount}`);
  });

}


queryDelegationRewards()
  .then(() => {
    console.log('Rewards fetched successfully.');
  })
  .catch((error) => {
    console.error('Error fetching rewards:', error);
  });
