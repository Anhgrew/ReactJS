import React, { Component } from 'react';
import Controller from './Controller';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            editTask: null,
            filter: {
                name: '',
                status: 0
            },
            keyword: '',
            sort: {
                sortBy: 'name',
                sortValue: 1
            }
        }
    }

    onSort = async (sortBy, sortValue) => {
        await this.setState({
            sort: {
                sortBy: sortBy,
                sortValue: sortValue
            }
        });

    }



    sorting = () => {
        console.log(this.state.sort)
    }
    onSearch = (keyword) => {
        this.setState({ keyword: keyword });
    }

    onFilter = (filter, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filter,
                status: filterStatus
            }
        })
    }

    onGenerateData = () => {
        let randomString = require("randomstring");
        let tasks = [
            {
                id: randomString.generate(20),
                name: 'Learn coding',
                status: true
            },
            {
                id: randomString.generate(20),
                name: 'Do homework',
                status: false
            },
            {
                id: randomString.generate(20),
                name: 'Play sports',
                status: false
            },
            {
                id: randomString.generate(20),
                name: 'Learn Ielts',
                status: true
            }
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onEditTask = (editTask) => {
        this.setState({
            editTask: editTask
        });
        this.onOpenForm();
    }

    onDeleteTask = (task) => {
        let indexOfTask = this.state.tasks.indexOf(task);
        let listTasks = [...this.state.tasks.slice(0, indexOfTask), ...this.state.tasks.slice(indexOfTask + 1)];
        this.setState({
            tasks: listTasks
        });
        localStorage.setItem('tasks', JSON.stringify(listTasks));
    }

    onAddTask = () => {
        if (this.state.isDisplayForm && this.state.editTask !== null) {
            this.setState({
                isDisplayForm: true,
                editTask: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                editTask: null
            });
        }
    }



    onCloseForm = () => {
        this.setState({
            isDisplayForm: false,
            editTask: null
        });
    }

    onOpenForm = (task) => {
        this.setState({
            isDisplayForm: true,
        });
    }

    findObjectById = (id) => {
        return this.state.tasks.findIndex((item) => (item.id === id));
    }


    onAddNewTask = (task) => {
        let randomString = require("randomstring");
        if (task.id === '') {
            this.setState(
                {
                    tasks: [...this.state.tasks, { ...task, id: randomString.generate(20), status: task.status === 'true' ? true : false }]
                }
            );
        }
        else {
            let { tasks } = this.state;
            let indexOfTask = this.findObjectById(task.id);
            if (indexOfTask !== -1) {
                tasks[indexOfTask] = { ...task, status: task.status === 'true' ? true : false };
            }
            this.setState(
                {
                    tasks: tasks,
                    editTask: null
                }
            );
        }
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
    render() {
        let { tasks, isDisplayForm, editTask, filter, keyword, sort } = this.state;
        let elementTaskForm = isDisplayForm ? <TaskForm onAddNewTask={this.onAddNewTask} editTask={editTask} onCloseForm={this.onCloseForm} /> : '';
        return (
            <div className="container-fluid bg-transparent ">
                <div className="text-center mt-5">
                    <h1 className="text-dark text">todos</h1>
                    <hr />
                </div>
                <div className="row mt-1">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-4" : ""}>
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-2" : "col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2"}>
                        <div className="float-left">
                            <button type="button" className="btn btn-primary" onClick={this.onAddTask}>
                                <span className="fa fa-plus mr-2" />New Task
                        </button>
                            <button type="button" className="btn btn-success ml-2" onClick={this.onGenerateData}>
                                <span className="fa fa-plus mr-2" />Generate Data
                        </button>
                        </div>
                        <div className="mt-5">
                            {/* Search - Sort */}
                            <Controller onSearch={this.onSearch} onSort={this.onSort} />
                        </div>
                        {/* List */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList keyword={keyword} sort={sort} onFilter={this.onFilter} filter={filter} onEditTask={this.onEditTask} onDeleteTask={this.onDeleteTask} tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
