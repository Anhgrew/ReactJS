import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onSearchClick = () => {
        this.props.onSearch(this.state.keyword);
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        let { keyword } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-1">

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter keyword..."
                        value={this.state.keyword} onChange={this.onHandleChange} name="keyword" />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.onSearchClick}>
                            <span className="fa fa-search mr-2" />Search
                    </button>
                    </span>
                </div>

            </div>
        );
    }
}

export default Search;