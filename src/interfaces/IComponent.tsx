import IDiff from '../interfaces/IDiff';
import engine from '../engine';
import Component from '../render/Component';


interface IComponent extends IDiff {
  fix?: (node: engine.Sprite, target: Component) => void;
  // style?: ISprite;
  eventEnable?:boolean;
  onClick?: (event:Event) => any;
  onTouchStart?: (event:Event) => any;
  onTouchMove?: (event:Event) => any;
  onTouchEnd?: (event:Event) => any;
  onTouchLeave?: (event:Event) => any;
  onTouchCancel?: (event:Event) => any;
  onDragStart?: (event:Event) => any;
  onDragEnd?: (event:Event) => any;

  onClickOnce?: (event:Event) => any;
  onTouchStartOnce?: (event:Event) => any;
  onTouchMoveOnce?: (event:Event) => any;
  onTouchEndOnce?: (event:Event) => any;
  onTouchLeaveOnce?: (event:Event) => any;
  onTouchCancelOnce?: (event:Event) => any;
  onDragStartOnce?: (event:Event) => any;
  onDragEndOnce?: (event:Event) => any;
}
}

export default IComponent;
