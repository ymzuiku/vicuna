import lifeTree from './lifeTree';
import initProps from './initProps';

function JSX(fn, ...args) {
  const props = args[0] || {};
  const len = args.length - 1;
  const childArray = Array(len);
  for (let i = 0; i < len; i++) {
    childArray[i] = args[i + 1];
  }
  props.children = childArray;
  const node = new fn(props);
  initProps(node);
  if (node.componentWillMount) node.componentWillMount();
  if (node.componentWillReceiveProps) {
    node.props = node.componentWillReceiveProps(node.props);
  }
  if (node.renderJSX) {
    const subNode = node.renderJSX();
    lifeTree(subNode, node);
  }
  if (node.componentDidMount) node.componentDidMount();
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      lifeTree(props.children[i], node);
    }
  }
  return node;
}

try {
  window['JSX'] = JSX;
} catch (error) {}

export default JSX;

// if (Object.freeze) Object.freeze(childArray);
