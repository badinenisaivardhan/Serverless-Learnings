
const handler = async (event) => {
    console.log('Lambda Triggred')
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'OK' }),
    };
};

module.exports = {handler}