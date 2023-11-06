import React, { Component } from 'react'

export class ClassClock extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         date : new Date(),
      }
    }

    componentDidMount() {
      // console.log ('hellow')
     this.timerID = setInterval ( () =>{
        this.setState({
          date: new Date (),
        });
      }, 1000 );
    }
    componentWillUnmount(){
      clearInterval(this.timerID)
    }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}

export default ClassClock