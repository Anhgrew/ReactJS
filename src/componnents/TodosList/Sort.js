import React, { Component } from 'react';

class Sort extends Component {
    render() {
        let { onSort } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-1">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle float-right" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => onSort('name', 1)}>
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc ml-3 my-2">
                                    Name
                                </span>
                            </a>
                        </li>
                        <li onClick={() => onSort('name', -1)} >
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc ml-3 my-2">
                                    Name
                                </span>
                            </a>
                        </li>
                        <div className="dropdown-divider" />
                        <li onClick={() => onSort('status', 1)}  ><a role="button" className="ml-3">Active</a></li>
                        <li onClick={() => onSort('status', -1)} > <a role="button" className="ml-3">Hide</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;