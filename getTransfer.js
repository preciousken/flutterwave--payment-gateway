const axios = require('axios');
const { configData } = require('./configuration');

const getTransfer = (async () => {
    try {
       const response =  await axios.get(`${configData.FLUTTER_BASE_API_URL}/transfers/${configData.TRANSACTION_ID}`,{
            headers:{
                "Authorization":`Bearer ${configData.FLUTTER_SECRET_KEY}`
            }
        });

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
})
getTransfer()