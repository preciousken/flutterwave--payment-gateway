const axios = require('axios');
const { configData } = require('./configuration');

const getTransferRate = (async (req,res) => {
    try {
       const response =  await axios.get(`${configData.FLUTTER_BASE_API_URL}/transfers/fee?currency=${configData.CURRENCIES[17]}&amount=${configData.TRANSACTION_AMOUNT}`,{
            headers:{
                "Authorization":`Bearer ${configData.FLUTTER_SECRET_KEY}`
            }
        });

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
})
getTransferRate()