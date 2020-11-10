import React, { Component } from 'react';

class TextSetting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onTextChange } = this.props;
        return (
            <div className="card m-2 text-left">

                <div className="card-headerm bg-success p-3">
                    Size : {this.props.textSize}px
                    </div>
                <div>
                    <button type="button" className="btn btn-primary m-2" onClick={() => { onTextChange(this.props.textSize + 1) }}>+</button>
                    <button type="button" className="btn btn-danger m-2" onClick={() => { onTextChange(this.props.textSize - 1) }}>-</button>
                </div>
            </div>

        );
    }
}

export default TextSetting;
