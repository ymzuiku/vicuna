import createTree from '../render/createTree';
import engine from '../engine';

class ItemRender extends engine.Box {
  constructor() {
    super();
    createTree(this.render(), this);
  }
  render(): any {}
}

export default ItemRender;
