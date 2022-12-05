import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// ---------ToDoApp---------
import Header from "./components/toDoApp/Header";
import TodoList from "./components/toDoApp/TodoList";
import Action from "./components/toDoApp/Action";
// ----------Counter----------
// import Counter from "./components/examples/Counter";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.completedItem = this.completedItem.bind(this);
    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  }
  addItem(item) {
    if (!item) {
      console.log("error : eklemek istediğiniz elemanı giriniz ");
      return "eklemek istediğiniz elemanı giriniz";
    } else if (this.state.items.indexOf(item) > -1) {
      console.log("error : bu eleman zaten mevcut");
      return "bu eleman zaten mevcut";
    }
    this.setState((prevState) => {
      console.log(item + " eklendi");
      return {
        items: prevState.items.concat(item),
      };
    });
  }

  deleteItem(item) {
    console.log(item + " silindi");
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((i) => i !== item),
      };
    });
  }
  editItem(item) {
    console.log(item + " düzenlendi");
    this.setState((prevState) => {
      return {
        items: prevState.items.map((i) => {
          if (i === item) {
            return prompt("Yeni değeri giriniz");
          } else {
            return i;
          }
        }),
      };
    });
  }
  completedItem(item) {
    console.log(item + " tamamlandı");
    this.setState((prevState) => {
      return {
        items: prevState.items.map((i) => {
          if (i === item) {
            return i + " (Tamamlandı)";
          } else {
            return i;
          }
        }),
      };
    });
    setInterval(() => {
      this.setState((prevState) => {
        return {
          items: prevState.items.map((i) => {
            if (i === item + " (Tamamlandı)") {
              return i.replace(" (Tamamlandı)", "");
            } else if (i === item) {
              return i + " (Tamamlandı)";
            } else {
              return i;
            }
          }),
        };
      });
    }, 500);
  }
  clearItems() {
    console.log("Liste temizlendi");
    this.setState(() => {
      return {
        items: [],
      };
    });
  }

  render() {
    const app = {
      title: "Todo App",
      description: "This is a simple todo app",
    };
    return (
      <div>
        <Header title={app.title} description={app.description} />
        <TodoList
          items={this.state.items}
          clearItems={this.clearItems}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          completedItem={this.completedItem}
        />
        <Action addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
