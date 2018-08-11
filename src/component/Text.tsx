import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IText extends IComponent {
  def?: (node: engine.Text) => void;
}

class Text extends Component {
  static defaultProps: IText;
  node: engine.Text;
  props: IText;
  constructor(props: IText) {
    super(props, engine.Text);
    if (this.props.children[0] !== undefined) {
      this.node.text = this.props.children[0];
    }
  }
}

export default Text;
