import engine from '../engine';
import IComponent from '../interfaces/IComponent';
import initProps from '../render/initProps';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.Text) => void;
}

class Text extends engine.Text {
  static defaultProps: IProps;
  props: IProps;
  constructor(props: IProps) {
    super();
    initProps(this, props, Text.defaultProps);
    if (strOf.call(this.props.children[0]) !== '[object Object]') {
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
