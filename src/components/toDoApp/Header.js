// import React from "react";

// function Header(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// export default Header;
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Header;
