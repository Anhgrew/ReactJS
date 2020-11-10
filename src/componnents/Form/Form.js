import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "admin",
            txtPassword: "admin",
            txtArea: "Some text",
            sltGender: 0,
            rdLanguage: 'vi',
            checkStatus: true
        };
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.type === 'select-one') {

            value = parseInt(target.value);

        }
        this.setState({
            [name]: value
        });
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="card">
                            <div className="card-header text-left bg-success">
                                Form
                            </div>
                            <div className="card-body text-left">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group ">
                                        <label className="font-weight-bold">Username</label>
                                        <input type="text" className="form-control" name="txtName" value={this.state.txtName} onChange={this.onHandleChange} placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group ">
                                        <label className="font-weight-bold">Password</label>
                                        <input type="password" className="form-control" name="txtPassword" value={this.state.txtPassword} onChange={this.onHandleChange} placeholder="Enter your password" />
                                    </div>
                                    <div className="form-group ">
                                        <label className="font-weight-bold">Description</label>
                                        <textarea name="txtArea" id="input" className="form-control" value={this.state.txtArea} onChange={this.onHandleChange} rows="3" ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-bold">Gender: </label>
                                        <select className="form-control" name="sltGender" value={this.state.sltGender} onChange={this.onHandleChange} >
                                            <option value={0}>Male</option>
                                            <option value={1}>Female</option>
                                        </select>
                                    </div>
                                    <br />
                                    <label>Language </label>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="rdLanguage" value="vi" checked={this.state.rdLanguage === "vi"} onChange={this.onHandleChange} />
                                        VietNam
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="rdLanguage" value="en" checked={this.state.rdLanguage === "en"} onChange={this.onHandleChange} />
                                        English
                                        </label>
                                    </div>
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-primary active">
                                            <input type="checkbox" name="checkStatus" value={true} checked={this.state.checkStatus === true} onChange={this.onHandleChange} autoComplete="off" />
                                            Status
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary form-control m-1">Submit</button>
                                        <button type="reset" className="form-control btn btn-primary form-control m-1">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;
