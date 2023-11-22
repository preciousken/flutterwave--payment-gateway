require('dotenv').config();

const configData = {
    FLUTTER_BASE_API_URL: process.env.FLUTTER_BASE_API_URL,
    FLUTTER_SECRET_KEY:process.env.FLUTTER_SECRET_KEY,
    CURRENCIES:[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK', 'BRL'
      ],
    COUNTRIES:["NG","GH","KE","UG","ZA","TZ"]
}

module.exports = {configData}