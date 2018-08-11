import engine from '../engine';
import IComponent from '../interfaces/IComponent';
import initProps from '../render/initProps';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.Box) => void;
}

class Box extends engine.Box {
  static defaultProps: IProps;
  props: IProps;
  constructor(props: IProps) {
    super();
    initProps(this, props, Box.defaultProps);
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

export default Box;
