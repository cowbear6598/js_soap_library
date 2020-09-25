/**
 * 打包成 json 內容並回傳
 * @param status 網路狀態
 * @param message 傳遞訊息
 * @param dataContent json 內容
 * @returns {{data: string, message: *, status: *}}
 */
const packet = function(status,message,dataContent) {
    let messageJson = {
        status: status,
        message: message,
        data: JSON.stringify(dataContent)
    };

    console.log(messageJson);

    return messageJson;
};

module.exports.packet = packet;

/**
 *  資料庫操作結束，如不需要
 *  @param res Resetful 的 Response
 *  @param data 回傳的內容，預設留空
 */
module.exports.db_finish = function(res,data = undefined)
{
    return res.json(packet(200,"ok",data));
}

/**
 *  處理資料庫操作是否錯誤以及沒找到資料
 *  @param err 錯誤訊息
 *  @param res Resetful 的 Response
 *  @param doc 查找的資料結果
 *  @returs boolean
 */
module.exports.db_check = function (err,res,doc = null) {
    if(err)
    {
        res.json(packet(200,"error",err.message));
        return false;
    }
    else if(doc === undefined)
    {
        res.json(packet(200,"none"));
        return false;
    }

    return true;
};