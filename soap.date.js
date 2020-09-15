/**
 * 取得對應時區的 Unix Time 不包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */
Date.prototype.unixTime = function (timezone = 0) {
    return Math.floor((Date.now() + (timezone * 3600 * 1000)) / 1000)
};

/**
 * 取得當地時間的 ISO
 * @param timezone 預設為 0 時區
 * @returns {Date}
 */
Date.prototype.toIsoStringTimeZone = function(timezone = 0){

    return new Date(new Date().unixTime(timezone) * 1000);
}

/**
 * 取得 yyyy-mm-dd 格式的日期
 * @param timezone 預設為 0 時區
 * @returns {string}
 */
Date.prototype.yyyymmdd = function (timezone = 0) {

    const date = new Date(new Date().unixTime(timezone) * 1000);

    const yyyy = date.getUTCFullYear();
    const mm = date.getUTCMonth() + 1;
    const dd = date.getUTCDate();
    const hh = date.getUTCHours();
    const mi = date.getUTCMinutes();
    const ss = date.getUTCSeconds();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd + " " +
        ((hh < 10) ? "0" : "" ) + hh + ":" +
        ((mi < 10) ? "0" : "" ) + mi + ":" +
        ((ss < 10) ? "0" : "" ) + ss;
}
