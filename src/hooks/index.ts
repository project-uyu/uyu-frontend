/**
 * 길이가 주어진 길이인 무작위 알파벳 배열을 생성합니다.
 *
 * @param {number} length 생성할 무작위 알파벳 배열의 길이
 * @returns {string} 생성된 무작위 알파벳 배열
 */
const generateRandomString = (length: number): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
};

/**
 * Date 객체를 주어진 format 문자열에 맞게 변환합니다.
 *
 * @param {Date} date 변환할 Date 객체
 * @param {string} format 반환할 문자열의 형식을 지정하는 format 문자열
 * @returns {string} 주어진 format 문자열에 따라 변환된 날짜 문자열
 */
const formatDate = (date: Date, format: string): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return format
        .replace('YYYY', year.toString())
        .replace('MM', month.toString().padStart(2, '0'))
        .replace('DD', day.toString().padStart(2, '0'))
        .replace('HH', hours.toString().padStart(2, '0'))
        .replace('mm', minutes.toString().padStart(2, '0'))
        .replace('ss', seconds.toString().padStart(2, '0'));
};

export { generateRandomString, formatDate };
