import React, { Component } from 'react';

class Minutes extends Component {
  render(){

    setTimeout(() => {
      const m = this.props.minutes * 6;
      const rotm = "rotate("+m+"deg)";
      let el = document.getElementById('minutes');
      el.style.transform = rotm;
    }, 1000)

    return(
      <div id="minutes"></div>
    )
  }
}

export default Minutes;
