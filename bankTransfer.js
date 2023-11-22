const { configData } = require('./configuration');

const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(configData.FLUTTER_PUBLIC_KEY, configData.FLUTTER_SECRET_KEY);

const bankTransfer = async() => {
    
const details = {
    account_bank: "044",
    account_number: "0690000040",
    amount: 200,
    narration: "Payment for things",
    currency: "NGN",
    // reference: generateTransactionReference(),
    callback_url: "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
    debit_currency: "NGN"
};
await flw.Transfer.initiate(details)
    .then(console.log)
    .catch(console.log);
}
bankTransfer()