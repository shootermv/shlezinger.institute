import * as React from "react";
import Layout from "../components/layout";
import { Form, Input, InputNumber, Button } from "antd";

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const ContactPage = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout pageTitle="Send us a message">
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "message"]} label="Message" rules={[
          {
            required: true,
          }
        ]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
// Step 3: Export your component
export default ContactPage;
