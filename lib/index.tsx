import * as utils from './utils';
import * as PIXI from 'pixi.js';
PIXI.utils.sayHello = v => {
  if (utils.device.isDev) {
    console.log('RenderType: ' + v);
  }
};
utils.fullPage();

import Component from './component/Component';
import PureComponent from './component/PureComponent';
import Render from './render/Render';
import layout from './layout';

export { PIXI, Component, PureComponent, Render, utils, layout };
