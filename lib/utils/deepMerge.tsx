function deepMerge(a, b) {
  for (var k in b) {
    var t = a[k] && Object.prototype.toString.call(a[k]);
    a[k] =
      t === '[object Object]'
        ? deepMerge(a[k], b[k])
        : t === '[object Array]'
          ? deepMerge(a[k], b[k])
          : (a[k] = b[k]);
  }
  return a;
}

export default deepMerge;
