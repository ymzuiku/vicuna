import Component from './Component';
import engine from '../engine';
import memoize from '../utils/memoize';

export let frameLoopStateList = [];

export const renderTree = memoize(function(jsx: any, father: engine.Sprite) {
  const { fn, props } = jsx;
  if (fn && props) {
    let comp = new fn(props);
    if (comp.ref) {
      comp.ref.name = comp.props.id;
      father.addChildAt(comp.ref, father.numChildren);
      comp.componentWillMount();
      lifeCycle(comp);
    } else {
      // 如果是函数
      let subComp = comp.fn(comp.props);
      console.log(subComp.props._index);
      subComp.ref.name = subComp.props.id;
      father.addChildAt(subComp.ref, father.numChildren);
      lifeCycle(subComp);
    }
  }
}) as Function;

export const lifeCycle = memoize(function(comp: Component) {
  if (comp.render) {
    comp.componentWillReceiveProps(comp.props);
    //渲染
    const compTree = comp.render();
    let len = comp.props.children.length;
    if (len === 0) {
      renderTree(compTree, comp.ref);
    } else {
      for (let i = 0; i < len; i++) {
        renderTree(comp.props.children[i], comp.ref);
      }
    }
    comp.componentDidMount();
    comp._checkFrameLoop();
  }
}) as Function;

export function updateChildren() {}
