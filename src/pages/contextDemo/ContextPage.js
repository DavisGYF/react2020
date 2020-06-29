import React, { Component } from "react";
import ConsumerPage from "./ConsumerPage";
import { ThemeProvider } from "../context";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeObj: {
        themeColor: "red",
      },
      themeColor: "red",
    };
  }

  changeColor = () => {
    const { themeColor } = this.state.theme;
    console.log("this", this, this.state, themeColor);

    this.setState({
      themeObj: { themeColor: themeColor === "yellow" ? "red" : "yellow" },
    });
  };

  render() {
    const { themeObj } = this.state;
    console.log("this", this, this.state, themeObj);
    return (
      <div>
        <h2>ContextPage</h2>
        context 初体验 --ContextPage里面的
        <button onClick={this.changeColor}>点击改变颜色</button>
        <ThemeProvider value={themeObj}>
          <ConsumerPage></ConsumerPage>
        </ThemeProvider>
      </div>
    );
  }
}
