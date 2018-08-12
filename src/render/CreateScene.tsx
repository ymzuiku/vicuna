import engine from '../engine';
import JSX from './JSX';

interface IScreenOfCreator {
  RootComponent?: any;
  isShowStat?: boolean;
  isShowDebugPanel?: boolean;
  isShowDebugTool?: boolean;
  showDebugTool?: boolean;
  statPosition?: Array<number>;
  versionFile?: string;
  isAntialias?: boolean;
  width?: number;
  height?: number;
  scaleMode?: string;
  screenMode?: string;
  frameRate?: string;
  bgColor?: string;
  initend?: Function;
  type?: string;
}

function CreateScene(props: IScreenOfCreator) {
  const {
    RootComponent,
    isShowStat,
    statPosition,
    versionFile,
    isAntialias,
    width,
    height,
    bgColor,
    scaleMode,
    screenMode,
    frameRate,
    initend,
    type,
  } = props;
  function createCallback() {
    if (RootComponent) {
      engine.stage.addChild(<RootComponent />);
    }
    if (initend) {
      initend();
    }
  }
  Config.isAntialias = isAntialias === undefined ? true : isAntialias;

  if (type === 'vertical' || type === 'v') {
    engine.init(width || 750, height || 1334, engine.WebGL);
    engine.stage.scaleMode = scaleMode || engine.Stage.SCALE_FIXED_WIDTH;
    engine.stage.screenMode = screenMode || engine.Stage.SCREEN_VERTICAL;
    engine.stage.frameRate = frameRate || engine.Stage.FRAME_FAST;
  } else if (type === 'horizontal' || type === 'h') {
    engine.init(width || 1334, height || 750, engine.WebGL);
    engine.stage.scaleMode = scaleMode || engine.Stage.SCALE_FIXED_HEIGHT;
    engine.stage.screenMode = screenMode || engine.Stage.SCREEN_HORIZONTAL;
    engine.stage.frameRate = frameRate || engine.Stage.FRAME_FAST;
  } else if (type === 'desktop' || type === 'd') {
    engine.init(
      width || window.innerWidth,
      height || window.innerHeight,
      engine.WebGL,
    );
    engine.stage.scaleMode = scaleMode || engine.Stage.SCALE_FULL;
    engine.stage.screenMode = screenMode || engine.Stage.SCREEN_NONE;
    engine.stage.frameRate = frameRate || engine.Stage.FRAME_MOUSE;
  } else {
    if (scaleMode) {
      engine.stage.scaleMode = scaleMode;
    }
    if (screenMode) {
      engine.stage.screenMode = screenMode;
    }
    if (screenMode) {
      engine.stage.frameRate = frameRate;
    }
  }
  engine.stage.bgColor = bgColor || '#f3f3f4';
  engine.stage.destroyChildren();
  if (isShowStat) {
    engine.Stat.show(30, 30);
  }
  if (statPosition) {
    engine.Stat.show(statPosition[0], statPosition[1]);
  }

  if (versionFile) {
    const file = typeof versionFile === 'string' ? versionFile : 'version.json';
    engine.ResourceVersion.enable(
      file,
      engine.Handler.create(null, createCallback),
      engine.ResourceVersion.FILENAME_VERSION,
    );
  } else {
    createCallback();
  }
}

export default CreateScene;
