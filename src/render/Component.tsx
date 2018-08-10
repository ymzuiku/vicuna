import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import IComponent from '../interfaces/IComponent';
import { renderTree } from './createTree';
import * as nodeExtra from '../nodeExtra';

const events = {
  onClick: 'click',
  onTouchStart: 'touchstart',
  onTouchMove: 'touchmove',
  onTouchEnd: 'touchend',
  onTouchLeave: 'touchleave',
  onTouchCancel: 'touchcancel',
  onDragStart: 'ondragstart',
  onDragEnter: 'ondragenter',
  onDragOver: 'ondragover',
  onDragend: 'ondragend',
  onDrop: 'ondrop',
};
const eventOnces = {
  onClickOnce: 'click',
  onTouchStartOnce: 'touchstart',
  onTouchMoveOnce: 'touchmove',
  onTouchEndOnce: 'touchend',
  onTouchLeaveOnce: 'touchleave',
  onTouchCancelOnce: 'touchcancel',
  onDragStartOnce: 'ondragstart',
  onDragEnterOnce: 'ondragenter',
  onDragOverOnce: 'ondragover',
  onDragendOnce: 'ondragend',
  onDropOnce: 'ondrop',
};

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
    this.node.name = this.props.name;
    if (this.props.ref) this.props.ref(this);
    if (this.props.eventEnable) this._checkEvent();
  }
  _checkEvent() {
    for (const k in events) {
      if (this.props[k]) {
        this.node.on(events[k], this, this.props[k]);
      }
    }
    for (const k in eventOnces) {
      if (this.props[k]) {
        this.node.once(events[k], this, this.props[k]);
      }
    }
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
    if (this.props.fix) this.props.fix(this.node, this);
    return this;
  }
}

export default Component;
