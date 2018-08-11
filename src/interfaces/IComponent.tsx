import IDiff from './IDiff';
import engine from '../engine';
import { IEvent, eventTypes } from './IEvent';

interface IComponent extends IDiff {
  def?: (node: engine.Sprite) => void;
  on?: IEvent;
  once?: IEvent;
}

export default IComponent;
