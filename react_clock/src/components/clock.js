import React, { Component } from 'react';
import Hours from './hours';
import Minutes from './minutes';
import Seconds from './seconds';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { clock: new Date(), hours: '', minutes: '', seconds: '' }
  }




  render() {
    setTimeout(() => {
      this.setState({ clock: new Date(),
                      hours: this.state.clock.getHours(),
                      minutes: this.state.clock.getMinutes(),
                      seconds: this.state.clock.getSeconds()});
    }, 1000)

    return (
      <div className="clock" id="clock">
        <Hours hours={this.state.hours}/>
        <Minutes minutes={this.state.minutes} />
        <Seconds seconds={this.state.seconds} />
        <div id="centro"></div>

      </div>
    )
  }



}
export default Clock;
