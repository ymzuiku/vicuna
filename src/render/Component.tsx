import isType from '../utils/isType';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISprite from '../interfaces/ISprite';

export interface IComponent extends IDiff {
  style?: ISprite;
}

// function updateTreeStyle(ref: engine.Sprite, treeData: any) {
//   console.log(treeData);
//   const root = ref.getChildAt(0);
//   for (let i = 0; i < root.numChildren; i++) {
//     if (
//       treeData.props.children[i].props &&
//       treeData.props.children[i].props.style
//     ) {
//       const node = root.getChildByName(treeData.props.id);
//       for (let k in treeData.props.children[i].props.style) {
//         node[k] = treeData.props.children[i].props.style[k];
//       }
//     }
//   }
// }


function useIndexFindeRef(index, tree, target){
  for (let i = 0; i < tree.props.length; i++) {
   
  }
}

class Component {
  static defaultProps: IComponent;
  ref: engine.Sprite;
  superView: engine.Sprite;
  props: IComponent;
  state: Object;
  _nextState: Object;
  _nextProps: Object;
  _updateMaps: Object = {};
  constructor(props: IComponent, type: any = engine.Sprite) {
    this.props = { ...Component.defaultProps, ...props };
    this.ref = new type();
    if (this.props.ref) this.props.ref(this.ref);
    if (this.props.updater !== undefined) {
      this.props.updater._updateMaps[this.props.id] = this.ref;
    }
  }
  _lifeCycle() {
    if (!this._nextState && !this._nextProps) return;
    this._nextProps = this.componentWillReceiveProps(this._nextState);
    if (this.shouldComponentUpdate(this._nextState, this._nextProps) === false)
      return;
    this.state = { ...this.state, ...this._nextState };
    this.props = { ...this.props, ...this._nextProps } as IComponent;
    // updateTreeStyle(this.ref, this.render());
    this._reRender();
    this.componentDidUpdate();
    this._nextState = undefined;
  }
  _reRender() {
    const tree = this.render();
    for (let k in this._updateMaps) {
      const ref = this._updateMaps[k].ref;
      const index = this._updateMaps[k].index
    }
  }
  _checkFrameLoop() {
    if (this.frameLoop()) {
      this.ref.frameLoop(2, this, this.frameLoop);
    }
  }
  update() {
    this.ref.frameOnce(0, this, this._lifeCycle);
  }
  forceUpdate() {
    // updateTreeStyle(this.ref, this.render());
  }
  setState(state: any) {
    if (isType.isFunction(state)) {
      this._nextState = {
        ...this.state,
        ...this._nextState,
        ...state(this.state),
      };
    } else {
      this._nextState = { ...this.state, ...this._nextState, ...state };
    }
    this.ref.frameOnce(0, this, this._lifeCycle);
  }
  componentWillMount() {}
  componentDidMount() {}
  frameLoop() {
    return false;
  }
  shouldComponentUpdate(nextState, nextProps) {
    return true;
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.ref.destroy();
  }
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  render(): any {
    const { children, style } = this.props;
    if (style) {
      for (let k in style) {
        this.ref[k] = style[k];
      }
    }
    return this;
  }
}

export default Component;
