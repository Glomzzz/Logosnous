/**
 * 获取 URL 路径中的指定参数
 *
 * @param paramName 参数名
 * @returns 参数值
 */
export function getQueryParam(paramName: string) {
    const reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    let value = decodeURIComponent(window.location.search.substring(1)).match(reg);
    if (value != null) {
        return decodeURIComponent(value[2]);
    }
    return null;
}

/**
 * 跳转到指定链接
 *
 * @param url 链接
 * @param paramName 参数名
 * @param paramValue 参数值
 */
export function goToLink(url: string, paramName?: string, paramValue?: string) {
    if (paramName) {
        window.location.href = '/' + url + '?' + paramName + '=' + paramValue;
    } else {
        window.location.href = '/' + url;
    }
}

/**
 * 获取生肖图标
 *
 * @param year 年份
 */
export function getChineseZodiac(year: number) {
    if (year == 0) return 'question';
    const arr = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat'];
    return arr[year % 12];
}