import Component from '../render/Component'

class PureComponent extends Component {
  shouldComponentUpdate(nextState, nextProps){
    return true;
  }
}

export default PureComponent
