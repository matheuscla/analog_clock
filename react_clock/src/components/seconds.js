import React, { Component } from 'react';

class Seconds extends Component {
  render(){

    setTimeout(() => {
      const s = this.props.seconds * 6;
      const rots = "rotate("+s+"deg)";
      let el = document.getElementById('seconds');
      el.style.transform = rots;
    }, 1000)
    return(
      <div id="seconds"></div>
    )
  }
}

export default Seconds;
