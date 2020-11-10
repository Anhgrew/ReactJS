import React, { Component } from 'react';

class Task extends Component {
    onEditTask = () => {
        this.props.onEditTask(this.props.task);
    }
    
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task);
    }

    render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "badge badge-success" : " badge badge-danger"}>
                        {task.status === true ? 'Active' : 'Hide'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning my-1" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-1" />Edit
                                                </button>
                                            &nbsp;
                                            <button type="button" onClick={this.onDeleteTask} className="btn btn-danger my-1">
                        <span className="fa fa-trash mr-1" />Delete
                                            </button>
                </td>
            </tr>
        );
    }
}

export default Task;
