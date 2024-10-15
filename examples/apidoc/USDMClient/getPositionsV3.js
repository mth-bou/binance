const { USDMClient } = require('binance');

  // ENDPOINT: fapi/v3/positionRisk
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/usdm-client.ts#L456

const client = new USDMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getPositionsV3(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });