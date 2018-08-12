import engine from '../engine';
import IComponent from '../interfaces/IComponent';

interface IProps extends IComponent {
  def?: (node: engine.Text) => void;
  urlOfJson: string;
  interval?: number;
  index?: number;
}

export default class extends engine.Animation {
  props: IProps;
  constructor(props?: IProps) {
    super();
    this.props = props;
    engine.loader.load(
      this.props.urlOfJson,
      engine.Handler.create(this, this.onJsonLoad),
      undefined,
      undefined,
      1,
      true,
    );
    const { interval = 30, index = 1 } = this.props;
    this.loadAtlas(this.props.urlOfJson); // 加载图集动画
    this.interval = interval; // 设置播放间隔（单位：毫秒）
    this.index = index; // 当前播放索引
  }
  onJsonLoad() {}
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {
    return nextProps;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  renderJSX(): any {}
}
