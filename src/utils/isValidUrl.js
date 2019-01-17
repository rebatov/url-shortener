var protocolRegex = /^(?:\w+:)?\/\/(\S+)$/;

var localhostRegex = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
var nonLocalhostRegex = /^[^\s\.]+\.\S{2,}$/;

/* 
 * Validating a string url
 * @param {String}
 * @return {Boolean}
 */
const isValidUrl = url => {
  if (typeof url !== 'string') {
    return false;
  }
  const checkProto = url.match(protocolRegex);
  if (!checkProto) { // Does not match the provisional check
    return false;
  }
  const noProtocol = checkProto[1];
  const checkLocal = noProtocol.match(localhostRegex);
  const checkNonLocal = noProtocol.match(nonLocalhostRegex);
  if (checkLocal || checkNonLocal) {
    return true;
  }
  return false;
}


module.exports = isValidUrl;