import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../styles/day.css';

import Clo from '../images/Cloudy.png'
import Par from '../images/PartlySunny.png'
import Rai from '../images/Rainy.png'
import Sno from '../images/Snowy.png'
import Sun from '../images/Sunny.png'

class Day extends Component {
  render() {
    let weatherImage = Sun;
    const { day, observations, high, low } = (this.props);
    let linkedDay = "/"+day
    if (observations === "Cloudy"){
      weatherImage = Clo
    }
    else if (observations === "PartlySunny"){
      weatherImage = Par
    }
    else if (observations === "Rainy"){
      weatherImage = Rai
    }
    else if (observations === "Snowy"){
      weatherImage = Sno
    }
    return(
      <div className="day-container">
        <Link to={linkedDay}>
        <div>{day}</div>
        <div><img src={weatherImage} alt={weatherImage} /></div>
        <div>{high}° / {low}°</div>
        </Link>
      </div>

    )
  }
}

export default Day;
