import React, { Component } from "react";

class Avatar extends Component {
  ResimTiklandi = () => {
    this.props.ResimTiklandi();
  };
  render() {
    return (
      <div>
        <img
          src="https://placekitten.com/200/300"
          onClick={() => this.ResimTiklandi()}
        />
      </div>
    );
  }
}

export default Avatar;
