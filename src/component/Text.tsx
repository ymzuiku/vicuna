import Component from '../render/Component';
import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IText extends IComponent {
  fix?: (node: engine.Text, target: Text) => void;
}

class Text extends Component {
  static defaultProps: IText;
  node: engine.Text;
  props: IText;
  constructor(props: IText) {
    super(props, engine.Text);
  }
}

export default Text;
