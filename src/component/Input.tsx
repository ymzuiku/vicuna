import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IInput extends IComponent {
  def?: (node: engine.Input) => void;
}

class Input extends Component {
  static defaultProps: IInput;
  node: engine.Input;
  props: IInput;
  constructor(props: IInput) {
    super(props, engine.Input);
  }
}

export default Input;
