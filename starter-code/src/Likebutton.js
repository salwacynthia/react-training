import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    count: 0
    // str: "Likes"
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
      //   str: this.state.count === 0 ? "Like" : "Likes"
    });
    console.log(this.state);
  };

  render() {
    // return ( <button onClick={this.handleClick}> {this.state.count} {this.state.str} </button> );

    if (this.state.count === 1) {
      return (
        <button onClick={this.handleClick}>{this.state.count} Like</button>
      );
    } else {
      return (
        <button onClick={this.handleClick}>{this.state.count} Likes</button>
      );
    }
  }
}

export default LikeButton;
