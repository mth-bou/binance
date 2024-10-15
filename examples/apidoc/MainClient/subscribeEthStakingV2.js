const { MainClient } = require('binance');

  // ENDPOINT: sapi/v2/eth-staking/eth/stake
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L2173

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.subscribeEthStakingV2(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });