import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';
import initProps from '../render/initProps';

const strOf = Object.prototype.toString;

interface IProps extends IComponent {
  def?: (node: engine.List) => void;
  data: Array<any>;
  repeatX?: number;
  repeatY?: number;
  vScrollBarSkin?: string;
  hScrollBarSkin?: string;
  onSelect?: (index: number) => void;
  onScroll?: (cell: engine.Box, index: number) => void;
}

class List extends engine.List {
  static defaultProps: IProps;
  props: IProps;
  constructor(props: IProps) {
    super();
    initProps(this, props, List.defaultProps);
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {
    if (this.props.def) this.props.def(this);
    this.repeatX = this.props.repeatX || 1;
    this.repeatY = this.props.repeatY || 6;
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
    if (this.props.children[0]) {
      this.itemRender = this.props.children[0];
    }
    this.array = this.props.data;
  }
}

export default List;
