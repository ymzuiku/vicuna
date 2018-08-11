import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IView extends IComponent {
  def?: (node: engine.Sprite, target: View) => void;
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
