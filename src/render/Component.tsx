import typeCheck from '../utils/typeCheck';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISprite from '../interfaces/ISprite';
import { renderTree } from './createTree';

export interface IComponent extends IDiff {
  node?: ISprite;
}

class Component {
  static defaultProps: IComponent;
  node: engine.Sprite;
  superView: engine.Sprite;
  props: IComponent;
  state: Object = {};
  isDestroy = false;
  _isFrameLooping: boolean = false;
  _isTimeLooping: boolean = false;
  constructor(props: IComponent, type: any = engine.Sprite) {
    this.props = { ...Component.defaultProps, ...props };
    this.node = new type();
    if (this.props.ref) this.props.ref(this);
  }
  frameOnce(loopFn) {
    engine.timer.frameOnce(2, null, loopFn);
  }
  startFrameLoop(frame = 2) {
    if (this._isFrameLooping === false) {
      this._isFrameLooping = true;
      engine.timer.frameLoop(frame, this, this.frameLoop);
    }
  }
  stopFrameLoop(cb?: Function) {
    if (this._isFrameLooping === true) {
      this._isFrameLooping = false;
      engine.timer.clear(this, this.frameLoop);
    }
  }
  frameLoop(): any {}
  startTimeLoop(frame = 2) {
    if (this._isTimeLooping === false) {
      this._isTimeLooping = true;
      engine.timer.loop(frame, this, this.timeLoop);
    }
  }
  stopTimeLoop(cb?: Function) {
    if (this._isTimeLooping === true) {
      this._isTimeLooping = false;
      engine.timer.clear(this, this.timeLoop);
    }
  }
  timeLoop(): any {}
  destroy() {
    if (this.isDestroy) return;
    if (this._isFrameLooping === true) {
      engine.timer.clear(this, this.frameLoop);
      this._isFrameLooping = false;
    }
    if (this._isTimeLooping === true) {
      engine.timer.clear(this, this.timeLoop);
      this._isTimeLooping = false;
    }
    this.componentWillUnmount();
    this.node.destroy();
    this.isDestroy = true;
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  addComponent(target: Component, name?: string) {
    renderTree(target, this.node, name);
  }
  render(): any {
    if (this.isDestroy) return;
    const { children, node } = this.props;
    if (node) {
      for (let k in node) {
        this.node[k] = node[k];
      }
    }
    return this;
  }
}

export default Component;
