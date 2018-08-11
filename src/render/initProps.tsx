import { eventTypes } from '../interfaces/IEvent';

function initProps(target, props, defaultProps?) {
  target.props = { ...defaultProps, ...props };
  target.name = target.props.name;
  if (target.props.ref) target.props.ref(target);
  if (target.props.on) {
    for (const k in target.props.on) {
      target.on(eventTypes[k], null, target.props.on[k], [
        target,
        eventTypes[k],
      ]);
    }
  }
  if (target.props.once) {
    for (const k in target.props.once) {
      target.once(eventTypes[k], null, target.props.once[k], [
        target,
        eventTypes[k],
      ]);
    }
  }
}

export default initProps;