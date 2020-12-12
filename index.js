'use strict';

//#region Utils 功能
const utils = require('./lib/soap.utils');

/**
 * 檢查是否存在資料夾並自動建立
 * @param filePath 輸入儲存位置
 */
exports.CheckDirectoryExist = utils.CheckDirectoryExist;

//#endregion

//#region Message 功能

const message = require('./lib/soap.message');

/**
 * 打包成 json 內容並回傳
 * @param message 傳遞訊息
 * @param dataContent json 內容
 * @returns {{data: string, message: *, status: *}}
 */
exports.Packet = message.packet;

//#endregion

//#region Log 功能
const log = require('./lib/soap.log');

/**
 * 印出內容並寫入至 project/log/...
 * @param content 內容
 */
exports.log = log.log;

//#endregion

//#region Date 功能
const date = require('./lib/soap.date');

/**
 * 取得對應時區的 Unix Time 不包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */
exports.unixTime = date.unixTime;
/**
 * 取得對應時區的 Unix Time 包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */
exports.unixTimeMillisecond = date.unixTimeMillisecond;
/**
 * 取得當地時間的 ISO
 * @param timezone 預設為 0 時區
 * @returns {Date}
 */
exports.toIsoStringTimeZone = date.toIsoStringTimeZone;
/**
 * 取得 yyyy-mm-dd 格式的日期
 * @param timezone 預設為 0 時區
 * @returns {string}
 */
exports.yyyymmdd = date.yyyymmdd;
/**
 * 取得 yyyy-mm-dd hh-mm-ss 格式的日期
 * @param timezone 預設為 0 時區
 * @returns {string}
 */
exports.yyyymmddhhmmss = date.yyyymmddhhmmss;
/**
 * 比對 yyyymmdd 格式是否為今天
 * @param otherDate
 * @returns {boolean}
 */
exports.yyyymmddIsToday = date.yyyymmddIsToday;
//#endregion

//#region crypt 功能
const crypt = require('./lib/soap.crypt');

/**
 * 產生公鑰、私鑰
 * @param name 完整檔案路徑，不包含副檔名
 * @param length 長度，預設 4096
 * @return publicKey、privateKey
 */
exports.RsaCreateKeyPair = crypt.RsaCreateKeyPair;

/**
 * @param publicKey 公鑰位置
 * @param content 明文
 * @return Buffer
 */
exports.RsaEncrypt = crypt.RsaEncrypt;

/**
 * @param privateKey 私鑰位置
 * @param content 加密內容
 * @return Buffer
 */
exports.RsaDecrypt = crypt.RsaDecrypt;

//#endregion