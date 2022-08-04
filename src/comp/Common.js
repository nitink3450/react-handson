// import React from "react";

// const Common = () => {
//   return (
//     <div>
//       <h1 className="text1">Styling using Functional and Class Component</h1>
//       <button className="button1">
//         To see styling in functional component
//       </button>
//       <button className="button2">To see styling in class component</button>
//     </div>
//   );
// };

// export default Common;

import React, { Component } from "react";
import Function from "./Function";
import Class from "./Class";

export class Common extends Component {
  state = {
    showFun: false,
    showFun1: false,
  };
  render() {
    return (
      <div>
        <h1 className="text1">Styling using Functional and Class Component</h1>

        <button
          onClick={() => this.setState({ showFun: !this.state.showFun })}
          className="button1"
        >
          To see styling in functional component
        </button>
        <button
          onClick={() => this.setState({ showFun1: !this.state.showFun1 })}
          className="button2"
        >
          To see styling in class component
        </button>
        {this.state.showFun && <Function />}
        {this.state.showFun1 && <Class />}
      </div>
    );
  }
}

export default Common;
