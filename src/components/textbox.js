import React, { Component } from "react";

class Textbox extends Component {
  degerDegisiyor = e => {
    return this.props.degerDegisiyor(e.target.value);
  };

  /*e => this.props.degerDegisiyor(e.target.value)  onChange'te böyle de çağırılır*/

  render() {
    return (
      <div>
        <input
          placeholder={this.props.ilkdeger}
          value={this.props.deger}
          onChange={e => this.degerDegisiyor(e)}
        />
      </div>
    );
  }
}

export default Textbox;
