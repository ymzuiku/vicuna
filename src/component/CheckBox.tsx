import engine from '../engine';
import IComponent from '../interfaces/IComponent';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.CheckBox) => void;
  onChange?: (target: engine.CheckBox) => void;
}

export default class Text extends engine.CheckBox {
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
      this.on('change', this, this.props.onChange);
    }
  }
}

