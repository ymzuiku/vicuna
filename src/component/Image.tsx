import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.Image) => void;
}

class Image extends engine.Image {
  props: IProps;
  constructor(props: IProps) {
    super();
    this.props = props;
    if (strOf.call(this.props.children[0]) !== '[object Object]') {
      this.skin = this.props.children[0];
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

export default Image;
