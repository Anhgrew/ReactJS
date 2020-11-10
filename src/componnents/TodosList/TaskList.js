import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: null,
            filterStatus: 0
        }
    }



    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filter' ? value : this.state.filter,
            name === 'filterStatus' ? value : this.state.filterStatus);
        this.setState({
            [name]: value
        });

    }

    sorting = (sort, tasks) => {

        if (sort.sortBy === 'name') {
            tasks.sort((a, b) => {
                console.log(b.name);
                if (a.name > b.name) return sort.sortValue;
                else if (a.name < b.name) return -sort.sortValue;
                else return 0;
            })
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.sortValue;
                else if (a.status < b.status) return sort.sortValue;
                else return 0;
            });
        }
    }
    render() {
        let { tasks, onEditTask, onDeleteTask, filter, keyword, sort } = this.props;
        let list = null;
        this.sorting(sort, tasks);
        if (filter.status === 0) {
            if (filter.name) {
                list = tasks.filter((task) => (task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1))
                    .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            } else {
                list = tasks.map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            }
        }
        else if (filter.status === -1) {
            if (filter.name) {
                list = tasks.filter((task) => (task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 && task.status === false))
                    .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            } else {
                list = tasks.filter((task) => (task.status === false))
                    .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            }
        }
        else {
            if (filter.name && filter.name !== '') {
                list = tasks.filter((task) => (task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 && task.status === true))
                    .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            } else {
                list = tasks.filter((task) => (task.status === true))
                    .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
            }
        }
        if (keyword) {
            list = tasks.filter((task) => (task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1))
                .map((task, index) => { return <Task onDeleteTask={onDeleteTask} onEditTask={onEditTask} key={task.id} index={index} task={task} /> });
        }



        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td>
                                <input type="text" className="form-control" name="filter" value={this.state.name} onChange={this.onHandleChange} />
                            </td>
                            <td>
                                <select className="form-control" name="filterStatus" value={this.state.filterStatus} onChange={this.onHandleChange}>
                                    <option value={0}>All</option>
                                    <option value={-1}>Hide</option>
                                    <option value={1}>Active</option>
                                </select>
                            </td>
                            <td />
                        </tr>
                        {list}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;