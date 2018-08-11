import engine from '../engine';
import JSX from './JSX';

function sceneOfCreator(
  RootComponent,
  isShowStat,
  versionFile,
  isAntialias,
  iw,
  ih,
  scaleMode,
  screenMode,
  frameRate,
  callback,
) {
  function createCallback() {
    if (RootComponent) {
      engine.stage.addChild(<RootComponent />)
    }
    if (callback) {
      callback();
    }
  }
  Config.isAntialias = isAntialias === undefined ? true : isAntialias;
  engine.init(iw, ih, engine.WebGL);
  engine.stage.scaleMode = scaleMode;
  engine.stage.screenMode = screenMode;
  engine.stage.bgColor = '#f4f4f5';
  engine.stage.frameRate = frameRate;
  engine.stage.destroyChildren();
  if (isShowStat) {
    engine.Stat.show(30, 30);
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

function sceneOfVertical(
  RootComponent,
  isShowStat?,
  versionFile?,
  isAntialias?,
  callback?,
) {
  sceneOfCreator(
    RootComponent,
    isShowStat,
    versionFile,
    isAntialias,
    750,
    1334,
    engine.Stage.SCALE_FIXED_WIDTH,
    engine.Stage.SCREEN_VERTICAL,
    engine.Stage.FRAME_FAST,
    callback,
  );
}

function sceneOfHorizontal(
  RootComponent,
  isShowStat?,
  versionFile?,
  isAntialias?,
  callback?,
) {
  sceneOfCreator(
    RootComponent,
    isShowStat,
    versionFile,
    isAntialias,
    1334,
    750,
    engine.Stage.SCALE_FIXED_HEIGHT,
    engine.Stage.SCREEN_HORIZONTAL,
    engine.Stage.FRAME_FAST,
    callback,
  );
}

function sceneOfDesktop(
  RootComponent,
  isShowStat?,
  versionFile?,
  isAntialias?,
  callback?,
) {
  sceneOfCreator(
    RootComponent,
    isShowStat,
    versionFile,
    isAntialias,
    window.innerWidth,
    window.innerHeight,
    engine.Stage.SCALE_NOSCALE,
    engine.Stage.SCREEN_NONE,
    engine.Stage.FRAME_MOUSE,
    callback,
  );
}

export default {
  sceneOfCreator,
  sceneOfVertical,
  sceneOfHorizontal,
  sceneOfDesktop,
};
