import React, { Component } from "react";
import { ThemeConsumer } from "../context";
/* 
export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h2>consumerPage</h2>
        消费着组建 也就是 子辈分组建 ThemeConsumer
        <ThemeConsumer>
          {(context) => {
            console.log("context", context);
            // className={context.themeColor}
            return <p className="red">注意观察我的背景颜色</p>;
          }}
        </ThemeConsumer>
      </div>
    );
  }
}
 */

export default function ConsumerPage(props) {
  console.log("props", props);
  return (
    <div>
      <h2>consumerPage</h2>
      消费着组建 也就是 子辈分组建 ThemeConsumer
      <ThemeConsumer>
        {(context) => {
          console.log("context", context);
          // className={context.themeColor}
          return <p className="red">注意观察我的背景颜色</p>;
        }}
      </ThemeConsumer>
    </div>
  );
}
