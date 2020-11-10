import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: "true",
        };
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });

    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddNewTask(this.state);
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    componentWillMount() {
        if(this.props.editTask){
            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status
            });
        }    
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.editTask) {

            this.setState({
                id: nextProps.editTask.id,
                name: nextProps.editTask.name,
                status: nextProps.editTask.status
            });
        }
        else if (!nextProps.editTask) {
            this.setState({
                id: "",
                name: "",
                status: "true",
            });
        }
    }
    render() {
        let { id } = this.state;
        return (
            <div className="card card-warning">
                <div className="card-heading">
                    <h5 className="card-title text-left text-white bg-success p-3">{id === "" ? 'Add new task' : 'Edit task'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group text-left">
                            <label>Name :</label>
                            <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.onHandleChange} />
                        </div>
                        <div className="form-group text-left">
                            <label >Status :</label>
                            <select className="form-control" value={this.state.status} onChange={this.onHandleChange} name="status" required="required">
                                <option value={true}>Active</option>
                                <option value={false}>Hide</option>
                            </select>
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm}> Quit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
