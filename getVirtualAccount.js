const axios = require('axios');
const { configData } = require('./configuration');

const getVirtualCard = async() => {

     try {
        const response = await axios.get(
            `${configData.FLUTTER_BASE_API_URL}/virtual-account-numbers/${configData.ORDER_REF}`,
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
getVirtualCard() 