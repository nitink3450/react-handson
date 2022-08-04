import React, { Component } from "react";

class Class extends Component {
  render() {
    return (
      <div className="class1">
        <h1>This is created using Class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}
export default Class;
