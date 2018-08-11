import engine from '../engine';
import IComponent from '../interfaces/IComponent';

class Component extends engine.Sprite {
  props: IComponent;
  constructor(props: IComponent) {
    super();
    this.props = props;
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  destroy() {
    this.componentWillUnmount();
    super.destroy();
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {
    if (this.props.def) this.props.def(this);
  }
}

export default Component;
