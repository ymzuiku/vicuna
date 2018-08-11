import Component from './Component';
import engine from '../engine';
import memoize from '../utils/memoize';
import initProps from './initProps';

const strOf = Object.prototype.toString;

const lifeTree = memoize(function(comp: Component, father: engine.Sprite) {
  if (strOf.call(comp) === '[object Object]' && !comp._isLifeTree) {
    comp._isLifeTree = true;
    father.addChild(comp);
    initProps(comp);
    if (comp.componentWillMount) comp.componentWillMount();
    if (comp.componentWillReceiveProps) {
      comp.props = comp.componentWillReceiveProps(comp.props);
    }
    if (comp.renderJSX) {
      const compTree = comp.renderJSX();
      if (compTree) {
        comp.addChild(compTree);
        const len = comp.props && comp.props.children.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            lifeTree(comp.props.children[i], compTree);
          }
        }
      } else {
        const len = comp.props && comp.props.children.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            lifeTree(comp.props.children[i], comp);
          }
        }
      }
    } else {
      const len = comp.props && comp.props.children.length;
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          lifeTree(comp.props.children[i], comp);
        }
      }
    }
    if (comp.componentDidMount) comp.componentDidMount();
  }
}) as Function;

export default lifeTree;
