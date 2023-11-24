const axios = require('axios');
const { configData } = require('./configuration');

const createSubAccount = async() => {

    const data = {
        "account_bank": "044",
        "account_number": "0690000034",
        "business_name": "Example Business",
        "business_email": "user@gmail.com",
        "business_contact": "Example User",
        "business_contact_mobile": "09080000000",
        "business_mobile": "08100000000",
        // "country": "NG",
        "split_type": "flat",
        "split_value": "1000"
    }
     
     try {
        const response = await axios.post(
            `${configData.FLUTTER_BASE_API_URL}/subaccounts`,
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
createSubAccount()