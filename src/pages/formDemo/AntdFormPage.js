import React from "react";
import { Form, Button, Input } from "antd";

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function AntdFormPage(props) {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  return (
    <div>
      <h2>AntdFormPage</h2>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem name="username" label="姓名" rules={[nameRules]}>
          <Input placeholder="username placeholder" />
        </FormItem>
        <FormItem name="password" label="密码" rules={[passworRules]}>
          <Input placeholder="password placeholder" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="text-align"
          >
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
