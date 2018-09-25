import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import _ from 'lodash';
import {Form, Icon, Input, Button} from "antd";
const FormItem = Form.Item;

const hasErrors = (fieldsError) => {
  return _.keys(fieldsError).some(field => fieldsError[field]);
}

class GameInitial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      word: 'hello'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.wordEntered(values.word, values.player_name);
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 14
      }
    }
    const buttonItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 4
      }
    }
    const {getFieldDecorator, getFieldsError} = this.props.form;
    return (<Form layout="horizontal" onSubmit={this.handleSubmit}>
      <FormItem {...formItemLayout}>
        {
          getFieldDecorator("player_name", {
            rules: [
              {
                required: true,
                message: "Player name is required!"
              }
            ]
          })(<Input placeholder="Your name"/>)
        }
      </FormItem>
      <FormItem {...formItemLayout}>
        {
          getFieldDecorator("word", {
            rules: [
              {
                required: true
              }, {
                min: 1,
                message: "The word length at least 3!"
              }
            ],
            initialValue: this.state.word
          })(<Input placeholder="Word you want to guess!"/>)
        }
      </FormItem>
      <Button {...buttonItemLayout} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
        Play!
      </Button>
    </Form>);
  }
}

export default Form.create()(GameInitial);
