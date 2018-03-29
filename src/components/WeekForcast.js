import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Day from './Day'

class WeekForcast extends Component{
  render(){
    const days = this.props.days.map((day) => (
      <Day key={day.id} {...day} />
    ))
    return(
        <div className="week">{days}</div>
    )
  }
}

export default WeekForcast;
