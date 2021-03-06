import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  ref?: (node: engine.Button) => void;
}

export default class extends engine.Button {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {
  }
}
