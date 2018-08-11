import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IList extends IComponent {
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

class List extends Component {
  static defaultProps: IList;
  node: engine.List;
  item: engine.Box;
  props: IList;
  constructor(props: IList) {
    super(props, engine.List);
  }
  render() {
    super.render();
    this.node.repeatX = this.props.repeatX || 1;
    this.node.repeatY = this.props.repeatY || 6;
    if (this.node.repeatX > 1) {
      this.node.hScrollBarSkin = this.props.hScrollBarSkin || '';
    } else {
      this.node.hScrollBarSkin = this.props.hScrollBarSkin;
    }
    if (this.node.repeatY > 1) {
      this.node.vScrollBarSkin = this.props.vScrollBarSkin || '';
    } else {
      this.node.vScrollBarSkin = this.props.vScrollBarSkin;
    }
    if (this.props.onSelect) {
      this.node.selectEnable = true;
      this.node.selectHandler = new engine.Handler(null, this.props.onSelect, [
        this.node,
      ]);
    }
    if (this.props.onScroll) {
      this.node.renderHandler = new engine.Handler(null, this.props.onScroll);
    }
    this.node.itemRender = this.props.item;
    this.node.array = this.props.data;
    return this;
  }
}
export default List;
