import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
  static contextType = FieldContext;
  componentDidMount() {
    this.context.registerField(this);
  }
  onStoreChange = () => {
    this.forceUpdate();
  };

  getControled = () => {
    const { getFieldValue, setFieldsValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue,
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });
        console.log("e", e, newValue);
      },
    };
  };

  render() {
    console.log("this.props", this.props);
    const { children } = this.props;
    const returnChildren = React.cloneElement(children, this.getControled());
    return returnChildren;
  }
}
