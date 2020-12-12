const soapLog = require('./soap.log');

/**
 * 打包成 json 內容並回傳
 * @param status 網路狀態
 * @param message 傳遞訊息
 * @param dataContent json 內容
 * @returns {{data: string, message: *, status: *}}
 */
const packet = function(message,dataContent) {
    let messageJson = {
        status: 200,
        message: message,
        data: JSON.stringify(dataContent)
    };

    soapLog.Log(messageJson);

    return messageJson;
};

module.exports.packet = packet;