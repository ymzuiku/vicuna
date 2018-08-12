import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  ref?: (node: engine.TextArea) => void;
}

export default class extends engine.TextArea {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
    const childrenZeroType = strOf.call(this.props.children[0])
    if (childrenZeroType === '[object String]' || childrenZeroType === '[object Number]') {
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
