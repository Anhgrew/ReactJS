import React, { Component } from 'react';
class Result extends Component {

    colorLoader = (color, size) => {
        return {
            color: color,
            borderColor: color,
            fontSize: size
        }

    }

    render() {
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>

                    <p className="text-left" style={this.colorLoader(this.props.color)}> Color: {this.props.color} - Size: {this.props.textSize}px</p>
                    <form>
                        <div id='content' className="text-left p-2 form-group" style={this.colorLoader(this.props.color, this.props.textSize)}>
                            <input type="text" className="form-control" style={this.colorLoader(this.props.color, this.props.textSize)}></input>
                            <button type="reset" className="btn btn-info m-2">Refresh</button>
                            <button type="submit" className="btn btn-danger m-2">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Result;
