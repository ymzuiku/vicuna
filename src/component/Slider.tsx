import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.Slider) => void;
  onChange?: (value: number) => void;
}

export default class extends engine.Slider {
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
    if (this.props.onChange) {
      this.changeHandler = new engine.Handler(this, this.props.onChange);
    }
  }
}

