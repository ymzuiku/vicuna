import engine from '../engine';
import IComponent from '../interfaces/IComponent';

export default class extends engine.Sprite {
  props: IComponent;
  _isLifeTree: boolean;
  constructor(props?: IComponent) {
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
