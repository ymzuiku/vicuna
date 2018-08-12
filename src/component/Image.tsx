import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  ref?: (node: engine.Image) => void;
  url: string;
  colorFilter?: Array<number>;
}

export default class extends engine.Image {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
    engine.loader.load(
      this.props.url,
      engine.Handler.create(this, this.onImageLoad),
      undefined,
      undefined,
      1,
      true,
    );
  }
  onImageLoad() {
    this.skin = this.prop.url;
    if (this.props.colorFilter) {
      var colorFilter = new engine.ColorFilter(this.props.colorFilter);
      this.filters = [colorFilter];
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

export default Image;
