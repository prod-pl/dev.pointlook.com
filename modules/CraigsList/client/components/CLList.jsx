import { Component, PropTypes } from 'react';
import CLItem from './CLItem';

export default class CLList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map(task => <CLItem key={task._id} task={task} />)}
      </ul>
    );
  }
}
