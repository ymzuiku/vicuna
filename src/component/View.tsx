import Component from '../render/Component';
import engine from '../engine';
import IDiff from '../interfaces/IDiff';
import ISpriteGL from '../interfaces/ISprite';

interface IView extends IDiff {
  node?: ISpriteGL;
}

class View extends Component {
  node: engine.Sprite;
  props: IView;
  static defaultProps: IView;
  constructor(props: IView) {
    super(props);
  }
  drawPath(w, h, r): any[] {
    return [
      ['moveTo', r, 0], //画笔的起始点，
      ['arcTo', w, 0, w, r, r], //p1（500,0）为夹角B，（500,30）为端点p2
      ['arcTo', w, h, w - r, h, r], //p1（500,300）为夹角C，（470,300）为端点p2
      ['arcTo', 0, h, 0, h - r, r], //p1(0,300)为夹角D，（0,270）为端点p2
      ['arcTo', 0, 0, r, 0, r], //p1(0,0)为夹角A，（30,0）为端点p2
    ];
  }
  render() {
    super.render();
    if (this.props.node && this.props.node.bgColor) {
      if (this.props.node.radius) {
        this.node.graphics.drawPath(
          0,
          0,
          this.drawPath(
            this.props.node.width,
            this.props.node.height,
            this.props.node.radius,
          ),
          { fillStyle: this.props.node.bgColor },
          this.props.node.lineWidth
            ? {
                strokeStyle: this.props.node.lineColor,
                lineWidth: this.props.node.lineWidth,
              }
            : undefined,
        );
      } else {
        this.node.graphics.drawRect(
          0,
          0,
          this.props.node.width,
          this.props.node.height,
          this.props.node.bgColor,
          this.props.node.lineColor,
          this.props.node.lineWidth,
        );
      }
    }
    return this;
  }
}

export default View;
