import engine from '../engine';
import IComponent from '../interfaces/IComponent';
import initProps from '../render/initProps';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.TextInput) => void;
}

class TextInput extends engine.TextInput {
  static defaultProps: IProps;
  props: IProps;
  constructor(props: IProps) {
    super();
    initProps(this, props, TextInput.defaultProps);
    if (strOf.call(this.props.children[0]) !== '[object Object]') {
      this.prompt = this.props.children[0];
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
