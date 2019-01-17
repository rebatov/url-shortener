const base52 = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_';
const baseLen = base52.length;

/**
 * Using the snippet from shoturl module
 * https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js
 *
 * @param num
 * @returns returns shortened code that maps to the database
 */
const encoder = (num) => {
  let code = '';
  while (num > 0) {
    code = base52.charAt(num % baseLen) + code;
    num = Math.floor(num / baseLen);
  }
  return code;
};

/**
 * Using the snippet ffrom shorturl module
 * https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js
 *
 * @param code
 * @returns ID in database
 */
const decoder = (code) => {
  let num = 0;
  for (let i = 0; i < code.length; i++) {
    num = num * baseLen + base52.indexOf(code.charAt(i));
  }
  return num;
};

module.exports = {
  encoder,
  decoder,
}