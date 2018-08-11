import engine from '../engine';
import IComponent from '../interfaces/IComponent';
import initProps from './initProps';

class Component extends engine.Sprite {
  static defaultProps: IComponent;
  props: IComponent;
  constructor(props: IComponent) {
    super();
    initProps(this, props, Component.defaultProps);
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {
    if (this.props.def) this.props.def(this);
  }
}

export default Component;
