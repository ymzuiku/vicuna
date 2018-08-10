import IDiff from './IDiff';
import engine from '../engine';
import Component from '../render/Component';
import { IEvent, eventTypes } from './IEvent';

interface IComponent extends IDiff {
  def?: (node: engine.Sprite, target: Component) => void;
  on?: IEvent;
  once?: IEvent;
  // on?: [{ evnet: eventTypes; fn: (event: Event) => any }];
  // once?: [{ evnet: eventTypes; fn: (event: Event) => any }];
}

export default IComponent;
