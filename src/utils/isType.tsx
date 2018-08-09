const strOf = Object.prototype.toString;

function isArray(v) {
  return strOf.call(v) === '[object Array]';
}

function isObject(v) {
  return strOf.call(v) === '[object Object]';
}

function isString(v) {
  return typeof v === 'string';
}

function isFunction(v) {
  return strOf.call(v) === '[object Function]';
}

function isUndefined(v) {
  return strOf.call(v) === '[object Undefined]';
}

function isNumber(v) {
  return typeof v === 'number';
}

function isNull(v) {
  return strOf.call(v) === '[object Null]';
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
