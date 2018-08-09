import Component from './Component';
import engine from '../engine';
import memoize from '../utils/memoize';

export let frameLoopStateList = [];

export const renderTree = memoize(function(jsx: any, father: engine.Sprite) {
  const { fn, props } = jsx;
  if (fn && props) {
    let comp = new fn(props);
    if (comp.ref) {
      father.addChild(comp.ref);
      comp.componentWillMount();
      lifeCycle(comp, true);
    } else {
      // 如果是函数
      let subComp = comp.fn(comp.props);
      father.addChild(subComp.ref);
      lifeCycle(subComp, true);
    }
  }
}) as Function;

export const lifeCycle = memoize(function(
  comp: Component,
  isRenderTree: boolean,
) {
  if (comp.render) {
    comp.componentWillReceiveProps(comp.props);
    //渲染
    if (isRenderTree) {
      renderTree(comp.render(), comp.ref);
      let len = comp.props.children.length;
      for (let i = 0; i < len; i++) {
        renderTree(comp.props.children[i], comp.ref);
      }
      comp.componentDidMount();
      comp._checkFrameLoop();
    } else {
      comp.render();
    }
  }
}) as Function;

export function setStates() {
  if (frameLoopStateList.length === 0) return;
  for (let i = 0; i < frameLoopStateList.length; i++) {
    frameLoopStateList[i].state = { ...frameLoopStateList[i]._nextState };
    frameLoopStateList[i]._nextState = undefined;
    lifeCycle(frameLoopStateList[i], false);
  }
  frameLoopStateList = [];
}

export function updateChildren() {}
