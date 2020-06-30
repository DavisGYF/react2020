import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
  static contextType = FieldContext;
  componentDidMount() {
    // console.log("field", this.context);
    this.cancelRegister = this.context.registerField(this);
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister();
    }
  }

  onStoreChange = () => {
    this.forceUpdate();
  };

  getControled = () => {
    const { getFieldsValue, getFieldValue, setFieldsValue } = this.context;
    const { name } = this.props;

    const val = getFieldValue(name);
    console.log("returnObj--qian", name, "---name,-setFieldsValue---", val);

    const returnObj = {
      value: val, //从store中取值
      onChange: (e) => {
        // 把新的参数值存到store中
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });
        console.log("newValue-------", newValue, getFieldsValue());
      },
    };

    console.log("returnObj--", returnObj, val);

    return returnObj;
  };

  render() {
    console.log("this.props--", this.props);
    const { children } = this.props;
    const returnChildren = React.cloneElement(children, this.getControled());
    return returnChildren;
  }
}
