const { MainClient } = require('binance');

  // ENDPOINT: sapi/v1/capital/withdraw/apply
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L1262

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.withdraw(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });