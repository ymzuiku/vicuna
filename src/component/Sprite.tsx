import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.Sprite) => void;
}

export default class extends engine.Sprite {
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
