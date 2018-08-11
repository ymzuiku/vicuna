import renderTree from '../render/renderTree';
import engine from '../engine';

class ItemRender extends engine.Box {
  constructor() {
    super();
    renderTree(this.render(), this);
  }
  render(): any {}
}

export default ItemRender;
