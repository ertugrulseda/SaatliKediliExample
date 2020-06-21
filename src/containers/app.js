import React from "react";
import Avatar from "../components/avatar";
import Textbox from "../components/textbox";
import ToDoItem from "../components/toDoItem";
import Clock from "../components/clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAlandakideger: "",
      toDoIsler: []
    };
  }

  ResimTiklandi = () => {
    let tempTodolar = this.state.toDoIsler;
    tempTodolar.push({
      baslik: this.state.textAlandakideger,
      tamamlandi: false
    });
    this.setState({ toDoIsler: tempTodolar, textAlandakideger: "" });
    console.log(this.state.toDoIsler.tamamlandi);
  };

  degerDegisiyorHandle = deger => {
    this.setState({ textAlandakideger: deger });
  };

  paragrafTiklandi = item => {
    let tempTodolar = this.state.toDoIsler;
    for (let i = 0; i < tempTodolar.length; i++) {
      if (tempTodolar[i].textAlandakideger === item.textAlandakideger) {
        tempTodolar[i].tamamlandi = !item.tamamlandi;
      }
    }
    this.setState({ toDoIsler: tempTodolar });
  };
  /* Bu da olur degerDegisiyor={deger => {this.setState({ textAlandakideger: deger });* */
  render() {
    return (
      <div>
        <Clock />
        <Textbox
          ilkdeger="ilk değer"
          deger={this.state.textAlandakideger}
          degerDegisiyor={deger => this.degerDegisiyorHandle(deger)}
        />
        <Avatar ResimTiklandi={this.ResimTiklandi} />
        <div>
          {this.state.toDoIsler.map((eleman, index) => {
            /**index her zaman 2. parametre*/
            return (
              <ToDoItem
                paragrafTiklandi={this.paragrafTiklandi}
                key={index}
                sira={index}
                item={eleman}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
/*

Yana bir text alan eklencek oraya yazılan yazıyı resme tıklayında 
aşağıya to do list gibi ekleyecek
 */
