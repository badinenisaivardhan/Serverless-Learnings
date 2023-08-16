let aws = require("aws-sdk");
let ses = new aws.SES({ region: "ap-south-1" });

const handler = async(event) => {

    const {tomail,senderemail,subjectmessage,bodymessage} = JSON.parse(event.body)

    let params = {
    Destination: {
        ToAddresses: [tomail],
    },
    Message: {
        Body: {
        Text: { Data: bodymessage },
        },

        Subject: { Data: subjectmessage },
    },
    Source: senderemail ,
    };

    return ses.sendEmail(params).promise()
};

module.exports = {handler}