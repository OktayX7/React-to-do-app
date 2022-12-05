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
      <li className="mb-3 bg-danger w-75 d-flex justify-content-between">
        {this.props.item}
        <div>
          {" "}
          <button onClick={this.deleteItem}>SİL</button>
          <button className="ms-3" onClick={this.editItem}>
            DÜZENLE
          </button>
          <button className="ms-3" onClick={this.completedItem}>
            TAMAMLANDI
          </button>
        </div>
      </li>
    );
  }
}
export default TodoItem;
