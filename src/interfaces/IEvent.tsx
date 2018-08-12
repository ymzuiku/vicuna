import engine from '../engine';
import Component from '../component/Component';

export interface IEvent {
  mouseDown?: (node: engine.Sprite, target: Component, type: string) => any;
  mouseUp?: (node: engine.Sprite, target: Component, type: string) => any;
  click?: (node: engine.Sprite, target: Component, type: string) => any;
  rightMouseDown?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  rightMouseUp?: (node: engine.Sprite, target: Component, type: string) => any;
  rightClick?: (node: engine.Sprite, target: Component, type: string) => any;
  mouseMove?: (node: engine.Sprite, target: Component, type: string) => any;
  mouseOver?: (node: engine.Sprite, target: Component, type: string) => any;
  mouseOut?: (node: engine.Sprite, target: Component, type: string) => any;
  mouseWheel?: (node: engine.Sprite, target: Component, type: string) => any;
  rollOver?: (node: engine.Sprite, target: Component, type: string) => any;
  rollOut?: (node: engine.Sprite, target: Component, type: string) => any;
  doubleClick?: (node: engine.Sprite, target: Component, type: string) => any;
  change?: (node: engine.Sprite, target: Component, type: string) => any;
  changed?: (node: engine.Sprite, target: Component, type: string) => any;
  resize?: (node: engine.Sprite, target: Component, type: string) => any;
  added?: (node: engine.Sprite, target: Component, type: string) => any;
  removed?: (node: engine.Sprite, target: Component, type: string) => any;
  display?: (node: engine.Sprite, target: Component, type: string) => any;
  undisplay?: (node: engine.Sprite, target: Component, type: string) => any;
  error?: (node: engine.Sprite, target: Component, type: string) => any;
  complete?: (node: engine.Sprite, target: Component, type: string) => any;
  loaded?: (node: engine.Sprite, target: Component, type: string) => any;
  progress?: (node: engine.Sprite, target: Component, type: string) => any;
  input?: (node: engine.Sprite, target: Component, type: string) => any;
  render?: (node: engine.Sprite, target: Component, type: string) => any;
  open?: (node: engine.Sprite, target: Component, type: string) => any;
  message?: (node: engine.Sprite, target: Component, type: string) => any;
  close?: (node: engine.Sprite, target: Component, type: string) => any;
  keyDown?: (node: engine.Sprite, target: Component, type: string) => any;
  keyPress?: (node: engine.Sprite, target: Component, type: string) => any;
  keyUp?: (node: engine.Sprite, target: Component, type: string) => any;
  frame?: (node: engine.Sprite, target: Component, type: string) => any;
  dragStart?: (node: engine.Sprite, target: Component, type: string) => any;
  dragMove?: (node: engine.Sprite, target: Component, type: string) => any;
  dragEnd?: (node: engine.Sprite, target: Component, type: string) => any;
  enter?: (node: engine.Sprite, target: Component, type: string) => any;
  select?: (node: engine.Sprite, target: Component, type: string) => any;
  blur?: (node: engine.Sprite, target: Component, type: string) => any;
  focus?: (node: engine.Sprite, target: Component, type: string) => any;
  visibilityChange?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  focusChange?: (node: engine.Sprite, target: Component, type: string) => any;
  played?: (node: engine.Sprite, target: Component, type: string) => any;
  paused?: (node: engine.Sprite, target: Component, type: string) => any;
  stopped?: (node: engine.Sprite, target: Component, type: string) => any;
  start?: (node: engine.Sprite, target: Component, type: string) => any;
  end?: (node: engine.Sprite, target: Component, type: string) => any;
  enableChanged?: (node: engine.Sprite, target: Component, type: string) => any;
  activeInHierarchyChanged?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  componentAdded?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  componentRemoved?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  layerChanged?: (node: engine.Sprite, target: Component, type: string) => any;
  hierarchyLoaded?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  recovered?: (node: engine.Sprite, target: Component, type: string) => any;
  released?: (node: engine.Sprite, target: Component, type: string) => any;
  link?: (node: engine.Sprite, target: Component, type: string) => any;
  label?: (node: engine.Sprite, target: Component, type: string) => any;
  fullScreenChange?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  deviceLost?: (node: engine.Sprite, target: Component, type: string) => any;
  meshChanged?: (node: engine.Sprite, target: Component, type: string) => any;
  materialChanged?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  worldmatrixNeedchange?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  animationChanged?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  triggerEnter?: (node: engine.Sprite, target: Component, type: string) => any;
  triggerStay?: (node: engine.Sprite, target: Component, type: string) => any;
  triggerExit?: (node: engine.Sprite, target: Component, type: string) => any;
  trailFilterChange?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
  dominoFilterChange?: (
    node: engine.Sprite,
    target: Component,
    type: string,
  ) => any;
}

export const eventTypes = {
  mouseDown: 'mousedown',
  mouseUp: 'mouseup',
  click: 'click',
  rightMouseDown: 'rightmousedown',
  rightMouseUp: 'rightmouseup',
  rightClick: 'rightclick',
  mouseMove: 'mousemove',
  mouseOver: 'mouseover',
  mouseOut: 'mouseout',
  mouseWheel: 'mousewheel',
  rollOver: 'mouseover',
  rollOut: 'mouseout',
  doubleClick: 'doubleclick',
  change: 'change',
  changed: 'changed',
  resize: 'resize',
  added: 'added',
  removed: 'removed',
  display: 'display',
  undisplay: 'undisplay',
  error: 'error',
  complete: 'complete',
  loaded: 'loaded',
  progress: 'progress',
  input: 'input',
  render: 'render',
  open: 'open',
  message: 'message',
  close: 'close',
  keyDown: 'keydown',
  keyPress: 'keypress',
  keyUp: 'keyup',
  frame: 'enterframe',
  dragStart: 'dragstart',
  dragMove: 'dragmove',
  dragEnd: 'dragend',
  enter: 'enter',
  select: 'select',
  blur: 'blur',
  focus: 'focus',
  visibilityChange: 'visibilitychange',
  focusChange: 'focuschange',
  played: 'played',
  paused: 'paused',
  stopped: 'stopped',
  start: 'start',
  end: 'end',
  enableChanged: 'enablechanged',
  activeInHierarchyChanged: 'activeinhierarchychanged',
  componentAdded: 'componentadded',
  componentRemoved: 'componentremoved',
  layerChanged: 'layerchanged',
  hierarchyLoaded: 'hierarchyloaded',
  recovered: 'recovered',
  released: 'released',
  link: 'link',
  label: 'label',
  fullScreenChange: 'fullscreenchange',
  deviceLost: 'devicelost',
  meshChanged: 'meshchanged',
  materialChanged: 'materialchanged',
  worldmatrixNeedchange: 'worldmatrixneedchanged',
  animationChanged: 'animationchanged',
  triggerEnter: 'triggerenter',
  triggerStay: 'triggerstay',
  triggerExit: 'triggerexit',
  trailFilterChange: 'trailfilterchange',
  dominoFilterChange: 'dominofilterchange',
};
