import React, { Component } from 'react';

class Baitap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.PUBLIC_URL + '/img/dark_car.jpg'

    }

  }
  changeColorCar = (url) => {
    this.setState({
      url: process.env.PUBLIC_URL + url
    });
    console.log(process.env.PUBLIC_URL)
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 bg-secondary">
            <img src={this.state.url} className="img-fluid m-5" alt="Something"></img>
          </div>
         
            <div className="d-flex justify-content-center col-sm-3 bg-primary">
              <div className="btn-group center" role="group" aria-label="Basic example">
                <button type="button" onClick={() => this.changeColorCar('/img/red_car.jpg')} className="m-2 btn btn-danger m-auto ">Red</button>
                <button type="button" onClick={() => this.changeColorCar('/img/dark_car.jpg')} className="btn btn-dark m-auto">Dark</button>
                <button type="button" onClick={() => this.changeColorCar('/img/yellow_car.jpg')} className="m-2 btn btn-light m-auto">Yellow</button>
              </div>
            </div>
          </div>
        </div>
    
    )
  }
}

export default Baitap;

