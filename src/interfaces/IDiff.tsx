import engine from '../engine';
import Component from '../render/Component';

export default interface IDiff {
  name?: string;
  children?: any;
  ref?: any;
  _index?: number;
}
