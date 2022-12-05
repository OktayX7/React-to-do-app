import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <TodoItem
              deleteItem={this.props.deleteItem}
              editItem={this.props.editItem}
              completedItem={this.props.completedItem}
              key={index}
              item={item}
            />
          ))}
        </ul>

        <button className="mb-3" onClick={this.props.clearItems}>
          Clear Items
        </button>
      </div>
    );
  }
}

export default TodoList;
