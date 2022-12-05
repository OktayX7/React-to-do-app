import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.completedItem = this.completedItem.bind(this);
  }

  deleteItem() {
    this.props.deleteItem(this.props.item);
  }
  editItem() {
    this.props.editItem(this.props.item);
  }
  completedItem() {
    this.props.completedItem(this.props.item);
  }
  render() {
    return (
      <li className="mb-3  text-bg-danger w-50 d-flex justify-content-between">
        <span className="ms-3">{this.props.item}</span>
        <div>
          {" "}
          <button onClick={this.deleteItem}>Delete</button>
          <button className="ms-3" onClick={this.editItem}>
            Edit
          </button>
          <button className="ms-3" onClick={this.completedItem}>
            Completed
          </button>
        </div>
      </li>
    );
  }
}
export default TodoItem;
