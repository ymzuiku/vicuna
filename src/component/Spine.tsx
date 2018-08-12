import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  def?: (node: engine.Skeleton) => void;
  urlOfSk: string;
  onComplete?: Function;
  onError?: Function;
}


export default class extends engine.Sprite {
  props: IProps;
  templet: engine.Templet;
  skeleton: engine.Skeleton;
  constructor(props?: IProps) {
    super();
    this.props = props;
    this.templet = new engine.Templet();
    if (this.props.onComplete) {
      this.templet.on(engine.Event.COMPLETE, this, this.props.onComplete);
    }
    if (this.props.onError) {
      this.templet.on(engine.Event.ERROR, this, this.props.onError);
    }
    this.templet.loadAni(this.props.urlOfSk);
    this.skeleton = this.templet.buildArmature(1);
    this.addChild(this.skeleton);
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {}
}
