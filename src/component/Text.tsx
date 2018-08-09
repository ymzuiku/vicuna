import Component from '../render/Component';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ITextGL from '../interfaces/IText';

interface IText extends IDiff {
  bgColor?: string;
  node?: ITextGL;
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
