import React, { Component } from 'react';

class Hours extends Component {
  render(){

    setTimeout(() => {
      const h = this.props.hours * 30;
      const roth = "rotate("+h+"deg)";
      let el = document.getElementById('hours');
      el.style.transform = roth;
    }, 1000)

    return(
      <div id="hours"></div>
    )
  }
}

export default Hours;
