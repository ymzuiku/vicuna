import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.Component) => void;
}

export default class extends engine.Component {
  props: IProps;
  _isLifeTree: boolean;
  constructor(props?: IProps) {
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
  renderJSX(): any {}
}
