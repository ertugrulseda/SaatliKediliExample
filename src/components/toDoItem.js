import React, { Component } from "react";
import styled from "styled-components";

class ToDoItem extends Component {
  paragrafTiklandi = item => {
    this.props.paragrafTiklandi(item);
  };

  render() {
    console.log("to do consolo", this.props.item);
    return (
      <div>
        <Paragraf
          onClick={() => this.paragrafTiklandi(this.props.item)}
          tamamlandi={this.props.item.tamamlandi}
        >
          {this.props.sira + 1} - {this.props.item.baslik}
        </Paragraf>
      </div>
    );
  }
}

ToDoItem.defaultProps = {
  sira: 0,
  item: { baslik: "Baslik 1", tamamlandi: false }
};

const Paragraf = styled.p`
  text-decoration-line: ${props =>
    props.tamamlandi ? "underline" : "line-through"};
`;
export default ToDoItem;
