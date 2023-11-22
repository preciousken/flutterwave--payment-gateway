// List of currencies
let currencies = [
    AED, ARS, AUD, CAD, CHF, CZK, ETB, EUR, GBP, GHS, ILS, INR, JPY, KES, MAD, MUR, MYR, NGN, NOK, NZD, PEN, PLN, RUB, RWF, SAR, SEK, SGD, SLL, TZS, UGX, USD, XAF, XOF, ZAR, ZMK, ZMW
  ]
  
  // Remove duplicates while preserving the order
  let uniqueCurrencies = [...new Set(currencies)];
  
  // Output unique currencies
  console.log(uniqueCurrencies);
  