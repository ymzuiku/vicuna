import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.Dialog) => void;
}

export default class extends engine.Dialog {
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
  renderJSX(): any {}
}
