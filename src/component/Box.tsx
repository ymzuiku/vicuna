import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IBox extends IComponent {
  def?: (node: engine.Box, target: Box) => void;
}

class Box extends Component {
  node: engine.Box;
  props: IBox;
  static defaultProps: IBox;
  constructor(props: IBox) {
    super(props);
  }
}

export default Box;
