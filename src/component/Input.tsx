import engine from '../engine';
import IComponent from '../interfaces/IComponent';
import initProps from '../render/initProps';

interface IProps extends IComponent {
  def?: (node: engine.Input) => void;
}

class Input extends engine.Input {
  static defaultProps: IProps;
  props: IProps;
  constructor(props: IProps) {
    super();
    initProps(this, props, Input.defaultProps);
    if (this.props.children[0] !== undefined) {
      this.text = this.props.children[0];
    }
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

export default Text;
