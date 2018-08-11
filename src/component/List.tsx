import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  def?: (node: engine.List) => void;
  item: any;
  data: Array<any>;
  repeatX?: number;
  repeatY?: number;
  vScrollBarSkin?: string;
  hScrollBarSkin?: string;
  onSelect?: (index: number) => void;
  onScroll?: (cell: engine.Box, index: number) => void;
}

class List extends engine.List {
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
    this.repeatX = this.props.repeatX !== undefined ? this.props.repeatX : 1;
    this.repeatY = this.props.repeatY !== undefined ? this.props.repeatY : 6;
    if (this.repeatX > 1) {
      this.hScrollBarSkin = this.props.hScrollBarSkin || '';
    } else {
      this.hScrollBarSkin = this.props.hScrollBarSkin;
    }
    if (this.repeatY > 1) {
      this.vScrollBarSkin = this.props.vScrollBarSkin || '';
    } else {
      this.vScrollBarSkin = this.props.vScrollBarSkin;
    }
    if (this.props.onSelect) {
      this.selectEnable = true;
      this.selectHandler = new engine.Handler(null, this.props.onSelect, [
        this,
      ]);
    }
    if (this.props.onScroll) {
      this.renderHandler = new engine.Handler(null, this.props.onScroll);
    }
    setTimeout(() => {
      this.itemRender = this.props.item;
    });
    this.array = this.props.data;
  }
}

export default List;
