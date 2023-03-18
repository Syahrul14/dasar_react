import React from "react";
import Button from "./Button";
import List from "./List";
import "../styles/App.css";

class App extends React.Component {
  state = {
    book: "Chicken soup for the soul",
    author: "Bill Willson",
    text: "",
  };
  change = () => {
    this.setState({
      book: this.state.text,
    });
    this.setState({
      text: "",
    });
  };
  ubah = (rul) => {
    this.setState({
      text: rul.target.value,
    });
  };
  render() {
    return (
      <div className="box">
        <h1 style={mystyle}>{this.state.book}</h1>
        <input type="text" value={this.state.text} onChange={this.ubah} />
        <List book={this.state.book} author={this.state.author} />
        <Button color="merah" />
        <button onClick={this.change}>Click</button>
      </div>
    );
  }
}
const mystyle = {
  color: "blue",
  fontSize: "50px",
};
export default App;
