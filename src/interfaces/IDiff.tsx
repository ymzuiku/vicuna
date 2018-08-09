import engine from '../engine';
import Component from '../render/Component';

export default interface IDiff {
  id?: string;
  name?: string;
  updater?: Component;
  children?: any;
  ref?: any;
  _index?: number;
}
