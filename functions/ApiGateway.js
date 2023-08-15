
const handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "This Is An Example For API Gateway"}),
    };
};

module.exports = {handler}