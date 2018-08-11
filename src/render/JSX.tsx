// fix jsx
import lifeTree from './lifeTree';

function JSX(fn, ...args) {
  const props = args[0] || {};
  props._index = 0;
  const len = args.length - 1;
  const childArray = Array(len);
  for (let i = 0; i < len; i++) {
    childArray[i] = args[i + 1];
  }
  props.children = childArray;
  const node = new fn(props)
  if(node.renderJSX){
    const subNode = node.renderJSX();
    lifeTree(subNode, node);
  }
  return node;
}

try {
  window['JSX'] = JSX;
} catch (error) {}

export default JSX;

// if (Object.freeze) Object.freeze(childArray);
