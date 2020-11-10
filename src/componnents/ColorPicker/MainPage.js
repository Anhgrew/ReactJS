import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import Result from './Result';
import TextSetting from './TextSetting';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            textSize: 12,
        }

    }


    onChose = (color) => {
        this.setState({
            color: color
        })
    }

    onTextChange = (size) => {
        this.setState({
            textSize: size
        })
    }

    resetAll = () => {
        this.setState({
            color: 'red',
            textSize: 12
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <ColorPicker color={this.state.color} textSize={this.state.textSize} onChose={this.onChose} />
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <TextSetting textSize={this.state.textSize} onTextChange={this.onTextChange} />
                            <button type="reset" className="btn btn-info m-2" onClick={this.resetAll}>Reset</button>
                        </div>
                    </div>
                    <div className="row">
                        <Result color={this.state.color} textSize={this.state.textSize} />

                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;
