import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.TextArea) => void;
}

export default class extends engine.TextArea {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
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
  renderJSX(): any {}
}
