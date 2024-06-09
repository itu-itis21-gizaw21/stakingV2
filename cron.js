/* const cron = require('node-cron');

const job = cron.schedule('* * * * *', () => {
  console.log('Cron job running every minute');
});

job.start(); */

const cron = require('node-cron');
const dotenv = require('dotenv');
dotenv.config();

/* const autoUpdateAllChains = require('./functions/autoUpdateAllChains');
const checkForMissedUpdates = require('./functions/checkForMissedUpdates');
const sendHourlyMessage = require('./functions/sendHourlyMessage');
const sendTelegramMessage = require('../utils/sendTelegramMessage');
 */

const Job = {
  start: callback => {
    const job_every_five_minute = cron.schedule(process.env.CRON_AUTO_UPDATE_INTERVAL || '*/5 * * * *', () => {
      console.log('Cron Job: ', new Date());

      
      checkForMissedUpdates(err => {
        if (err) {
          console.error(`Cron Job Error at checkForMissedUpdates (${new Date}): ${err}`)

          sendTelegramMessage('error', {
            error: `Cron Job Error at checkForMissedUpdates (${new Date}): ${err}`
          }, _ => {});
        };
  
        return;
      });
    });


    job_every_five_minute.start();
    callback();
  }
};

module.exports = Job;