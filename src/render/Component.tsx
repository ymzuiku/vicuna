import isType from '../utils/isType';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISprite from '../interfaces/ISprite';

export interface IComponent extends IDiff {
  style?: ISprite;
}

function updateTreeStyle(ref: engine.Sprite, tree) {
  console.log(tree)
}

let randomName = 0;
class Component {
  static defaultProps: IComponent;
  ref: engine.Sprite;
  name: string;
  superView: engine.Sprite;
  props: IComponent;
  state: Object;
  _nextState: Object;
  _nextProps: Object;
  constructor(props: IComponent, type: any = engine.Sprite) {
    this.props = { ...Component.defaultProps, ...props };
    this.name = this.props.name || String(randomName++);
    this.ref = new type();
    if (this.props.ref) this.props.ref(this.ref);
  }
  _lifeCycle() {
    console.log(this._nextState);
    if (!this._nextState && !this._nextProps) return;
    this._nextProps = this.componentWillReceiveProps(this._nextState);
    if (this.shouldComponentUpdate(this._nextState, this._nextProps) === false)
      return;
    this.state = { ...this.state, ...this._nextState };
    this.props = { ...this.props, ...this._nextProps } as IComponent;
    updateTreeStyle(this.ref, this.render());
    this.componentDidUpdate();
    this._nextState = undefined;
  }
  _checkFrameLoop() {
    if (this.frameLoop()) {
      this.ref.frameLoop(2, this, this.frameLoop);
    }
  }
  forceUpdate() {
    updateTreeStyle(this.ref, this.render());
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
