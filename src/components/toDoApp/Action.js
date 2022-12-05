import React, { Component } from "react";

class Action extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const item = e.target.elements.txtItem.value.trim();

    const error = this.props.addItem(item);
    this.setState(() => {
      return {
        error: error,
      };
    });

    e.target.elements.txtItem.value = "";

    setTimeout(() => {
      this.setState(() => {
        return {
          error: "",
        };
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="text-bg-secondary">{this.state.error}</p>
        )}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Add an item" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Action;
