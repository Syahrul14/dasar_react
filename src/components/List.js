import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.book}</h3>
        <h4>{this.props.author}</h4>
      </div>
    );
  }
}
export default List;
