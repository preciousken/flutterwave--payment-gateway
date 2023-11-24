const axios = require('axios');
const { configData } = require('./configuration');

const createVirtualCard = async() => {

    const data = {
        "email":"user@gmail.com",
        "is_permanent":true,
        "bvn":"12345678901",
        "tx_ref":"Sample_tx_ref",
        "phonenumber":"08100000000",
        "firstname":"Flutterwave",
        "lastname":"Developers",
        "narration":"Add_the_name_of_account_here"
     }
     
     try {
        const response = await axios.post(
            `${configData.FLUTTER_BASE_API_URL}/virtual-account-numbers`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${configData.FLUTTER_SECRET_KEY}`,
                },
            }
        );

        console.log(response.data);
    } catch (error) {
        console.log(error);
    }

}
createVirtualCard()