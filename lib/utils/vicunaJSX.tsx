function vicunaJSX(fn, ...args) {
  var len = args.length - 1;
  var props = args[0] || {};
  if (len === 1) {
    props.children = args[1];
  } else if (len > 1) {
    var childArray = Array(len);
    for (let i = 0; i < len; i++) {
      childArray[i] = args[i + 1];
    }
    // if (Object.freeze) Object.freeze(childArray);
    props.children = childArray;
  }
  return fn(props);
}

try {
  window['vicunaJSX'] = vicunaJSX;
} catch (error) {
  console.warn('[ERROR]vicunaJSX: no-have-window');
}

export default vicunaJSX;
