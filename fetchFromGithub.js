/* const Chain = require('../../models/chain/Chain');

const sendTelegramMessage = require('../../utils/sendTelegramMessage');
 */



/* const sendMessage = require('./getGithubUpdate');
 */
// Define your message type and data
const messageType = 'regular_update';
const messageData = {
  chains: ['chain1', 'chain2']
};

// Define your callback function
const callback = (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Message sent successfully!');
  }
};

// Call the sendMessage function
sendMessage(messageType, messageData, callback);
