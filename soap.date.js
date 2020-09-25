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

    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd + " " +
        ((hh < 10) ? "0" : "" ) + hh + ":" +
        ((mi < 10) ? "0" : "" ) + mi + ":" +
        ((ss < 10) ? "0" : "" ) + ss;
}


/**
 * 比對 yyyymmdd 格式是否為今天
 * @param otherDate
 * @returns {boolean}
 */
module.exports.yyyymmddIsToday = function (otherDate) {
    const todayDate = new Date(new Date().yyyymmdd());
    const compareDate = new Date(otherDate);

    return todayDate.getFullYear() == compareDate.getFullYear() && todayDate.getMonth() == compareDate.getMonth() && todayDate.getDate() == compareDate.getDate();
}