const soapLog = require('./soap.log');

module.exports.packet = function(message,dataContent) {
    let messageJson = {
        status: 200,
        message: message,
        data: JSON.stringify(dataContent)
    };

    soapLog.Log(messageJson);

    return messageJson;
};