function JSX(fn, ...args) {
  var props = args[0] || {};
  var len = args.length - 1;
  var childArray = Array(len);
  for (let i = 0; i < len; i++) {
    childArray[i] = args[i + 1];
  }
  // if (Object.freeze) Object.freeze(childArray);
  props.children = childArray;
  return { fn, props };
}

try {
  window['JSX'] = JSX;
} catch (error) {}

export default JSX;
