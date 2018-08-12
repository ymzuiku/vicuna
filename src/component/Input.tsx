import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.Input) => void;
}

export default class extends engine.Input {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
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
  renderJSX(): any {}
}
