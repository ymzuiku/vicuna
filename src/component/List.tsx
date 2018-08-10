import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IList extends IComponent {
  fix?: (node: engine.List, target: List) => void;
  item: any;
  repeatX?: number;
  repeatY?: number;
  vScrollBarSkin?: string;
  hScrollBarSkin?: string;
  data: Array<any>;
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
    this.node.array = this.props.data;
    this.node.repeatX = this.props.repeatX || 1;
    this.node.repeatY = this.props.repeatY || 6;
    this.node.vScrollBarSkin = this.props.vScrollBarSkin;
    this.node.hScrollBarSkin = this.props.hScrollBarSkin;
    if (this.props.onSelect) {
      this.node.selectEnable = true;
      this.node.selectHandler = new engine.Handler(null, this.props.onSelect, [
        this.node,
        this,
      ]);
    }
    if (this.props.onScroll) {
      this.node.renderHandler = new engine.Handler(null, this.props.onScroll);
    }
    this.node.itemRender = this.item;
  }
}
export default List;
