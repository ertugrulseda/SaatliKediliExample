import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zaman: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick");
    this.setState({
      zaman: new Date()
    });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>It is {this.state.zaman.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*ReactDOM.render(<Clock />, document.getElementById("root"));*/

export default Clock;
