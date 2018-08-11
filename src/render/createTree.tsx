import Component from './Component';
import engine from '../engine';
import memoize from '../utils/memoize';


const createTree = memoize(function(
  jsx: any,
  father: engine.Sprite,
  name?: string,
) {
  const { fn, props } = jsx;
  if (fn && props) {
    const comp = new fn(props);
    if (comp.node) {
      comp.node.name = comp.node.name || name;
      father.addChildAt(comp.node, father.numChildren);
      comp.componentWillMount();
      lifeCycle(comp);
    } else {
      const subComp = comp.fn(comp.props);
      subComp.node.name = subComp.node.name || name;
      father.addChildAt(subComp.node, father.numChildren);
      lifeCycle(subComp);
    }
  }
}) as Function;

const lifeCycle = memoize(function(comp: Component) {
  if (comp.isDestroy === true) return;
  if (comp.render) {
    comp.props = comp.componentWillReceiveProps(comp.props);
    const compTree = comp.render();
    const len = comp.props.children.length;
    if (len === 0) {
      createTree(compTree, comp.node);
    } else {
      for (let i = 0; i < len; i++) {
        createTree(comp.props.children[i], comp.node);
      }
    }
    comp.componentDidMount();
  }
}) as Function;


export default createTree;
