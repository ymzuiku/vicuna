import Component from '../render/Component';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISpriteGL from '../interfaces/ISprite';

interface IView extends IDiff {
  style?: ISpriteGL;
}

class View extends Component {
  ref: engine.Sprite;
  props: IView;
  static defaultProps: IView;
  constructor(props:IView){
    super(props);
  }
  private isRenderBgColor: boolean = false;
  render() {
    super.render();
    if (this.props.style && this.props.style.bgColor && !this.isRenderBgColor) {
      this.ref.graphics.drawRect(
        0,
        0,
        this.props.style.width,
        this.props.style.height,
        this.props.style.bgColor,
      );
      this.isRenderBgColor;
    }
    return this;
  }
}

export default View;
