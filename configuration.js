require('dotenv').config();

const configData = {
    FLUTTER_BASE_API_URL: process.env.FLUTTER_BASE_API_URL,
    FLUTTER_SECRET_KEY:process.env.FLUTTER_SECRET_KEY,
    CURRENCIES:[
        "NG","GH","KE","UG","ZA","TZ","US","UK"
    ]
}

module.exports = {configData}