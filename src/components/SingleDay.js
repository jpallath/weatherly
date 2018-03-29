import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../styles/singleday.css'

class SingleDay extends Component {
  render() {
    let {day} = this.props.match.params;
    const matchedDay = this.props.days.filter((matcher) => {
      return (matcher.day === day)
    })
    const {high, low, observations} = matchedDay[0]
    return(
      <div className="single-day">
        <div>{day}</div>
        <div>{observations}</div>
        <div>{high}° / {low}°</div>
      </div>

    )
  }
}

export default SingleDay;
