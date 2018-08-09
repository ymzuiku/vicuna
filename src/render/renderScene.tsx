import engine from '../engine';
import { renderTree } from './createTree';
import Component from './Component';
import JSX from './JSX';

function initCreator(
  RootComponent,
  isShowStat,
  versionFile,
  iw,
  ih,
  scaleMode,
  screenMode,
  frameRate,
  callback,
) {
  function createCallback() {
    if (RootComponent) {
      console.time('renderAll');
      renderTree(<RootComponent />, engine.stage);
      console.timeEnd('renderAll');
    }
    // engine.stage.frameLoop(2, this, setStates);
    if (callback) {
      callback();
    }
  }
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

function initVerticalScene(
  RootComponent,
  isShowStat?,
  versionFile?,
  callback?,
) {
  initCreator(
    RootComponent,
    isShowStat,
    versionFile,
    750,
    1334,
    engine.Stage.SCALE_FIXED_WIDTH,
    engine.Stage.SCREEN_VERTICAL,
    engine.Stage.FRAME_FAST,
    callback,
  );
}

function initHorizontalScene(
  RootComponent,
  isShowStat?,
  versionFile?,
  callback?,
) {
  initCreator(
    RootComponent,
    isShowStat,
    versionFile,
    1334,
    750,
    engine.Stage.SCALE_FIXED_HEIGHT,
    engine.Stage.SCREEN_HORIZONTAL,
    engine.Stage.FRAME_FAST,
    callback,
  );
}

function initDesktopScene(RootComponent, isShowStat?, versionFile?, callback?) {
  let iw = 1080;
  let ih = 1920;
  if (window) {
    iw = window.innerWidth;
    ih = (iw / 1080) * 1920;
  }
  initCreator(
    RootComponent,
    isShowStat,
    versionFile,
    iw,
    ih,
    engine.Stage.SCALE_NOSCALE,
    engine.Stage.SCREEN_NONE,
    engine.Stage.FRAME_MOUSE,
    callback,
  );
}

export default {
  initCreator,
  initVerticalScene,
  initHorizontalScene,
  initDesktopScene,
};
