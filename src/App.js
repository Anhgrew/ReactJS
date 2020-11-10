import './App.css';
// import HomeLayout from './componnents/FirstPage/HomeLayout';
import React, { Component } from 'react';
import HomePage from './componnents/TodosList/HomePage';
 //import MainPage from './componnents/ColorPicker/MainPage';
// import Form from './componnents/Form/Form';
// import TodoPage from './componnents/TodosList/TodoPage';

class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <Baitapvonglap /> */}
        {/* <HomeLayout /> */}
        {/* <Test /> */}
        {/* <MainPage /> */}
        {/* <Form /> */}
       <HomePage/>
      </div>
    );
  }
}

export default App;
