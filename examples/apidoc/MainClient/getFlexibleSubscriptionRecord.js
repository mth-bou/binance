const { MainClient } = require('binance');

  // ENDPOINT: sapi/v1/simple-earn/flexible/history/subscriptionRecord
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L2904

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getFlexibleSubscriptionRecord(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });