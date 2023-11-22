var request = require('request');
const { configData } = require('./configuration');

const getBankBranch = async() => {
  var options = {
    'method': 'GET',
    'url': `${configData.FLUTTER_BASE_API_URL}/banks/${configData.BANKID}/branches`,
    'headers': {
      'Authorization': `Bearer ${configData.FLUTTER_SECRET_KEY}`
    }
  };
  await request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}
getBankBranch()