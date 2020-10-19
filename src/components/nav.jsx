import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>
          HabitMaker <div className="ing">{this.props.totalCount}</div>
        </h1>
      </nav>
    );
  }
}

export default Nav;
