import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleOnClick = (event) => {
      console.log(event.target)
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleOnClick}>
      </div>
    )
  }

}
