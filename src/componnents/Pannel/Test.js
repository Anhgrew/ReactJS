import React, { Component } from 'react';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { active: true }
    }

    onActive = () => {
        this.setState({ active: !this.state.active })
    }
    addProduct = () => {
        console.log(this.name.value);
    }
    render() {
        let res = "";
        if (this.state.active === true) {
            res =
                <div className="container">
                    <div className="card m-2 text-left">

                        <div className="card-headerm bg-info p-3">
                            Thêm Sản Phẩm
                         </div>
                        <div className="m-3">
                            <form role="form">
                                <div className="form-group">
                                    <label className="text-danger">Nhập sản phẩm</label>
                                    <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" ref={(name) => { this.name = name }} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.addProduct}>Lưu</button>
                            </form>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.onActive}>Lưu</button>
                    </div>
                </div>

        }
        else {
            res =
                <div className="container">
                    <div className="card m-2 text-left">
                        <button type="button" className="btn btn-primary" onClick={this.onActive}>Lưu</button>
                    </div>
                </div>

        }
        return res;
    }
}

export default Test;