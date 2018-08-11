import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface ITextInput extends IComponent {
  def?: (node: engine.TextInput) => void;
}

class TextInput extends Component {
  static defaultProps: ITextInput;
  node: engine.TextInput;
  props: ITextInput;
  constructor(props: ITextInput) {
    super(props, engine.TextInput);
    if (this.props.children[0] !== undefined) {
      this.node.prompt = this.props.children[0];
    }
  }
}

export default TextInput;
