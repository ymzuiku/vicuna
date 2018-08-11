import engine from '../engine';
import Component from '../render/Component';
import IComponent from '../interfaces/IComponent';

interface IImage extends IComponent {
  def?: (node: engine.Image) => void;
}

class Image extends Component {
  node: engine.Image;
  props: IImage;
  static defaultProps: IImage;
  constructor(props: IImage) {
    super(props);
  }
}

export default Image;
