const axios = require('axios');
const { configData } = require('./configuration');

const createVirtualCard = async() => {

    const data = {
        currency:"USD",
        amount:5,
        debit_currency:"NGN",
        billing_name:"Flutterwave Developers",
        billing_address:"333, Fremont Street",
        billing_city:"San Francisco",
        billing_state:"CA",
        billing_postal_code:"94105",
        billing_country:"US"
     }

     try {
        const response =  await axios.post(`${configData.FLUTTER_BASE_API_URL}/virtual-cards`,{
             headers:{
                Authorization:`Bearer ${configData.FLUTTER_SECRET_KEY}`,
                 body: data,
             }
         });
 
         console.log(response.data)
     } catch (error) {
         console.log(error)
     }

}
createVirtualCard()