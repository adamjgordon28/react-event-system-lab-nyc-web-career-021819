// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {


  good = () => {
    console.log("Good!")
  }

  hey = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
      return(
      <button onFocus={this.good} onBlur={this.hey}>I am one button</button>
      )
    }
}







export default EyesOnMe
