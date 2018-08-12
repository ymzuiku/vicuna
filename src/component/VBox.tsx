import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  ref?: (node: engine.VBox) => void;
  bottom?:number;
  top?:number;
  left?:number;
  right?:number;
  space?:number;
  align?:string;
}

export default class extends engine.VBox {
  props: IProps;
  constructor(props?: IProps) {
    super()
    this.props = props;
    this.bottom = this.props.bottom || 0;
    this.top = this.props.top || 0;
    this.left = this.props.left || 0;
    this.right = this.props.right || 0;
    this.space = this.props.space || 0;
    this.align = this.props.align || 'none';
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {}
}
