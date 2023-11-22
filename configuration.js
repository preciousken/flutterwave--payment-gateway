require('dotenv').config();


const configData = {
    FLUTTER_BASE_API_URL: process.env.FLUTTER_BASE_API_URL,
    FLUTTER_SECRET_KEY:process.env.FLUTTER_SECRET_KEY,
    FLUTTER_PUBLIC_KEY:process.env.FLUTTER_PUBLIC_KEY,
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
    COUNTRIES:["NG","GH","KE","UG","ZA","TZ"],
    BANKID:"280",

    CURRENCY_MATCH:{
      // SENDER => RECEIVER
      // ////////// Sender to receiver is the currency that can send to receiver currency

      "AED":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "ARS":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "AUD":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "CAD":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "CHF":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "EUR":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "GHS":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "ILS":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "INR":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "KES":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "MAD":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "MUR":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "MYR":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "NGN":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "NOK":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "NZD":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "PEN":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "PLN":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "RUB":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "RWF":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "SAR":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "SEK":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "SGD":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "SLL":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "UGX":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "XOF":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "ZMK":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "JPY":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],
      "ZMW":[
        'AED', 'ARS', 'AUD', 'CAD', 'CHF',
        'CZK', 'ETB', 'EUR', 'GBP', 'GHS',
        'ILS', 'INR', 'JPY', 'KES', 'MAD',
        'MUR', 'MYR', 'NGN', 'NOK', 'NZD',
        'PEN', 'PLN', 'RUB', 'RWF', 'SAR',
        'SEK', 'SGD', 'SLL', 'TZS', 'UGX',
        'USD', 'XAF', 'XOF', 'ZAR', 'ZMK',
        'ZMW', 'MWK'
      ],

      "BRL":[
        'BRL', 'AED', 'ARS', 'AUD', 'CAD',
        'CHF', 'CZK', 'ETB', 'EUR', 'GBP',
        'GHS', 'ILS', 'INR', 'JPY', 'KES',
        'MAD', 'MUR', 'MYR', 'NGN', 'NOK',
        'NZD', 'PEN', 'PLN', 'RUB', 'RWF',
        'SAR', 'SEK', 'SGD', 'SLL', 'TZS',
        'UGX', 'USD', 'XAF', 'XOF', 'ZAR',
        'ZMK', 'ZMW', 'MWK'
      ],
      "USD":[
        'BRL', 'AED', 'ARS', 'AUD', 'CAD',
        'CHF', 'CZK', 'ETB', 'EUR', 'GBP',
        'GHS', 'ILS', 'INR', 'JPY', 'KES',
        'MAD', 'MUR', 'MYR', 'NGN', 'NOK',
        'NZD', 'PEN', 'PLN', 'RUB', 'RWF',
        'SAR', 'SEK', 'SGD', 'SLL', 'TZS',
        'UGX', 'USD', 'XAF', 'XOF', 'ZAR',
        'ZMK', 'ZMW', 'MWK'
      ],

      /////////////////
      "ZMW":[
        'BRL', 'AED', 'ARS', 'AUD', 'CAD',
        'CHF', 'CZK', 'ETB', 'EUR', 'GBP',
        'GHS', 'ILS', 'INR', 'JPY', 'KES',
        'MAD', 'MUR', 'MYR', 'NGN', 'NOK',
        'NZD', 'PEN', 'PLN', 'RUB', 'RWF',
        'SAR', 'SEK', 'SGD', 'SLL', 'TZS',
        'UGX', 'USD', 'XAF', 'XOF', 'ZAR',
        'ZMK', 'ZMW', 'MWK'
      ],
    }
}

module.exports = {configData}