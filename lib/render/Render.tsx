import * as PIXI from 'pixi.js';
import layout from '../layout';

class Render {
  app: PIXI.Application;
  constructor(
    id?: string,
    backgroundColor?: number,
    width?: number,
    height?: number,
  ) {
    const theWidth = width || window.innerWidth;
    const theHeight = height || window.innerHeight;
    this.app = new PIXI.Application({
      width: theWidth,
      height: theHeight,
      backgroundColor: backgroundColor || 0xf3f3f3,
      antialias: true,
    });
    if (id) {
      document.getElementById(id).appendChild(this.app.view);
    } else {
      document.body.appendChild(this.app.view);
    }
    this.app.renderer.view.style.position = 'absolute';
    this.app.renderer.view.style.display = 'block';
    this.windowOnresize();
    window.onresize = this.windowOnresize;
  }
  private windowOnresize = () => {
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    layout.reset();
  };
}

export default Render;
