import Component from '../render/Component';
import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IView extends IComponent {
  fix?: (node: engine.Sprite, target: View) => void;
}

class View extends Component {
  node: engine.Sprite;
  props: IView;
  static defaultProps: IView;
  constructor(props: IView) {
    super(props);
  }
}

export default View;
