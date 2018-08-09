// fix jsx

var id = 0;
function JSX(fn, ...args) {
  const props = args[0] || {};
  props._index = 0;
  const len = args.length - 1;
  const childArray = Array(len);
  for (let i = 0; i < len; i++) {
    childArray[i] = args[i + 1];
    childArray[i]._index = i;
    if (childArray[i].id === undefined) {
      id++
      childArray[i].id = id + '';
    }
  }
  props.children = childArray;
  return { fn, props };
}

try {
  window['JSX'] = JSX;
} catch (error) {}

export default JSX;

// if (Object.freeze) Object.freeze(childArray);