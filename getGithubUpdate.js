const fetch = require('node-fetch');
const fs = require('fs');

const TYPE_LIST = ['error', 'missed_update', 'notify_alive', 'regular_update'];

const secondsToHoursAndMinutes = seconds => {
  return Math.floor(seconds / 3600) + " hours " + Math.floor((seconds % 3600) / 60) + " minutes";
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sendMessage = (message, callback) => {
  fetch(`https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/cosmoshub.json`)
    .then(res => res.json())
    .then(res => {
      if (!res.ok)
        return callback('bad_request');

      // Save response to a JSON file
      fs.writeFile('response.json', JSON.stringify(res, null, 2), (err) => {
        if (err) {
          console.error('Error writing response to file:', err);
          return callback('file_error');
        }
        console.log('Response saved to response.json');
        return callback(null);
      });
    })
    .catch(_ => {
      return callback('network_error');
    });
};

/* module.exports = (type, data, callback) => {
  if (!type || !TYPE_LIST.includes(type))
    return callback('bad_request');

  if (!data || typeof data != 'object')
    return callback('bad_request');

  if ((type == 'regular_update' || type == 'missed_update') && (!data.chains || !Array.isArray(data.chains) || !data.chains.length))
    return callback('bad_request');

  let message = '';

  sendMessage(message, err => {
    if (err)
      return callback(err);

    return callback(null);
  });
}; */