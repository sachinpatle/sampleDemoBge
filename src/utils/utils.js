export const arrangeDate = (inStr) => {
    if ((typeof inStr == 'undefined') || (inStr == null) ||
        (inStr.length <= 0)) {
        return '';
    }
    var year = inStr.substring(0, 4);
    var month = inStr.substring(5, 7);
    var day = inStr.substring(8, 10);
    return year + '-' + month + '-' + day;
}