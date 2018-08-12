import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.Box) => void;
  bottom?:number;
  top?:number;
  left?:number;
  right?:number;
}

export default class extends engine.Box {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
    this.bottom = this.props.bottom || 0;
    this.top = this.props.top || 0;
    this.left = this.props.left || 0;
    this.right = this.props.right || 0;
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {}
}210

