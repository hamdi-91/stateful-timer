import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: false
    };
    setInterval(
      () =>
        this.state.start
          ? this.setState({
              time: this.state.time + 1000
            })
          : clearInterval(this.state.time),
      1000
    );
  }
  startCounting = () => {
    this.setState({
      start: !this.state.start
    });
  };
  render() {
    const hours = Math.floor((this.state.time / 3600000) % 24);
    const minutes = Math.floor((this.state.time / 60000) % 60);
    const seconds = Math.floor((this.state.time / 1000) % 60);
    return (
      <div className="App">
        <h1>
          {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </h1>
        <button onClick={this.startCounting}>
          {this.state.start ? "Pause" : "Start"}
        </button>
        <button onClick={() => this.setState({ time: 0, start: false })}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

