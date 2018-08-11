import typeCheck from '../utils/typeCheck';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISprite from '../interfaces/ISprite';

export interface IComponent extends IDiff {
  style?: ISprite;
}

class Component {
  static defaultProps: IComponent;
  ref: engine.Sprite;
  superView: engine.Sprite;
  props: IComponent;
  state: Object;
  _nextState: Object;
  _nextProps: Object;
  _updateList: Array<Component> = [];
  constructor(props: IComponent, type: any = engine.Sprite) {
    this.props = { ...Component.defaultProps, ...props };
    this.ref = new type();
    if (this.props.ref) this.props.ref(this.ref);
  }
  _lifeCycle() {
    if (!this._nextState && !this._nextProps) return;
    this._nextProps = this.componentWillReceiveProps(this._nextState);
    if (this.shouldComponentUpdate(this._nextState, this._nextProps) === false)
      this.state = { ...this.state, ...this._nextState };
    this.props = { ...this.props, ...this._nextProps } as IComponent;
    this.render();
    this.componentDidUpdate();
    this._nextState = undefined;
  }
  _checkFrameLoop() {
    if (this.frameLoop() !== false) {
      this.ref.frameLoop(2, this, this.frameLoop);
    }
  }
  frameLoop(): any {
    return false;
  }
  update() {
    this.ref.frameOnce(0, this, this._lifeCycle);
  }
  forceUpdate() {
    this.render();
  }
  setState(state: any, cb?: Function) {
    if (typeCheck.isFunction(state)) {
      this._nextState = {
        ...this.state,
        ...this._nextState,
        ...state(this.state),
      };
    } else {
      this._nextState = { ...this.state, ...this._nextState, ...state };
    }
    this.ref.frameOnce(0, this, this._lifeCycle);
    if (cb) cb();
  }
  componentWillMount() {}
  componentDidMount() {}
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
    console.log('life', this.props);
    if (style) {
      for (let k in style) {
        this.ref[k] = style[k];
      }
    }
    if (this._updateList.length > 0) {
      for (let i = 0; i < this._updateList.length; i++) {
        this._updateList[i].render();
      }
    }
    return this;
  }
}

export default Component;
