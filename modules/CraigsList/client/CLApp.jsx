import { Component, PropTypes } from 'react';

export default class CLApp extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    require('./css/CLApp.import.css');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
