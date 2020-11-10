import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'blue', 'black', 'green'],
        }
    }

    colorLoader = (color) => {
        return {
            backgroundColor: color
        };
    }
    render() {
        let { onChose } = this.props;
        let colorPicker = this.state.color.map((color, index) => (<span key={index}
            className={this.props.color === color ? "badge p-3 m-2 text-white active" : "badge p-3 m-2 text-white"} onClick={() => onChose(color)} style={this.colorLoader(color)}>{color}</span>));
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card m-2 text-left">
                    <div className="card-headerm bg-info p-2">
                        Color Picker
                    </div>
                    <div>
                        {colorPicker}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;