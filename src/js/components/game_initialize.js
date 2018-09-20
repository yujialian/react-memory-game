import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  state = { word: 'hello' };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
	const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
	const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 }
    }
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <FormItem
		{...formItemLayout}
		>
          {getFieldDecorator("Word", {
            rules: [
              { required: true },
              { min: 3, message: "The word length at least 3!" }
            ],
            initialValue: this.state.word
          })(<Input placeholder="Word you want to guess!" />)}
        </FormItem>
          <Button
			{...buttonItemLayout}
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
           Play!
          </Button>
      </Form>
    );
  }
}

export default Form.create()(HorizontalLoginForm);

