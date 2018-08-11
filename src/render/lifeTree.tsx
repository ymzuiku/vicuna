import Component from './Component';
import engine from '../engine';
import memoize from '../utils/memoize';

const strOf = Object.prototype.toString;

const lifeTree = memoize(function(comp: Component, father: engine.Sprite) {
  father.addChild(comp);
  if (comp && comp.renderJSX) {
    comp.componentWillMount();
    comp.props = comp.componentWillReceiveProps(comp.props);
    const compTree = comp.renderJSX();
    if (compTree) {
      comp.addChild(compTree);
    }
    if (strOf.call(comp.props.children) === '[object Array]') {
      const len = comp.props.children.length;
      if (len === 0) {
        lifeTree(compTree, comp);
      } else {
        for (let i = 0; i < len; i++) {
          lifeTree(comp.props.children[i], comp);
        }
      }
    }
    comp.componentDidMount();
  }
}) as Function;

export default lifeTree;
