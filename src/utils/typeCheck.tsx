const str = Object.prototype.toString;

function isArray(v) {
  return str.call(v) === '[object Array]';
}

function isObject(v) {
  return str.call(v) === '[object Object]';
}

function isString(v) {
  return typeof v === 'string';
}

function isFunction(v) {
  return str.call(v) === '[object Function]';
}

function isUndefined(v) {
  return str.call(v) === '[object Undefined]';
}

function isNumber(v) {
  return typeof v === 'number';
}

function isNull(v) {
  return str.call(v) === '[object Null]';
}

export default {
  isArray,
  isObject,
  isString,
  isFunction,
  isUndefined,
  isNumber,
  isNull,
};
