import React, { useRef } from "react";
class FormStore {
  constructor(props) {
    this.state = {};
    this.fieldEntities = [];
  }

  registerField = (field) => {
    this.fieldEntities.push(field);
  };

  getFieldValue = (name) => {
    console.log(name, this.state, "--this.state[name]", this.state[name]);
    return this.state[name];
  };

  getFieldsValue = () => {
    return this.state;
  };

  setFieldsValue = (newStore) => {
    console.log(this.state, "new->", newStore);

    this.state = {
      ...this.state,
      ...newStore,
    };

    this.fieldEntities.forEach((enetity) => {
      console.log("enetity", enetity, newStore);
      const { name } = enetity.props;
      Object.keys(newStore).forEach((key) => {
        console.log("key", key);

        if (key === name) {
          enetity.onStoreChange();
        }
      });
    });

    console.log("setFieldsValue---最后--this.store", this.store);
  };

  /* 	validateFields= callback => {
		const errs = []
		for(let field of this.options) {
			// 判断如果是undefined 增加错误信息
			if (!this.state[field]) {
				errs.push({[field]: '错误信息'})
			}
		}
		
		if (errs.length === 0) {
			callback(null, this.state);
		} else {
			callback(errs, this.state)
		}

	} */

  getForm = () => {
    return {
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
    };
  };
}
export default function useForm() {
  const formRef = useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
}
