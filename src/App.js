import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WeekForcast from './components/WeekForcast';
import Day from './components/Day';
import SingleDay from './components/SingleDay';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days : [
        {
          "id":0,
          "day": "Sunday",
          "high": "60",
          "low" : "50",
          "observations": "PartlySunny"
        },
        {
          "id":1,
          "day": "Monday",
          "high": "99",
          "low" : "0",
          "observations": "Sunny"
        },
        {
          "id":2,
          "day": "Tuesday",
          "high": "45",
          "low" : "40",
          "observations": "Cloudy"
        },
        {
          "id":3,
          "day": "Wednesday",
          "high": "60",
          "low" : "50",
          "observations": "Rainy"
        },
        {
          "id":4,
          "day": "Thursday",
          "high": "10",
          "low" : "8",
          "observations": "Snowy"
        }
      ]
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={(props) => <WeekForcast {...props} days={this.state.days}/>} />
          <Route path='/:day' exact component={(props) => <SingleDay {...props} days={this.state.days} />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
