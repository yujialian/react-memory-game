import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return _.keys(fieldsError).some(field => fieldsError[field]);
}

class GameInitial extends React.Component {
	propTypes: {
		onWordsEntered: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			word: 'hello',
            cardsInfo : [],
            selectedCards: [],
            comparing: false
		}
	}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
		  var shaffledWord = [...values.word.concat(values.word)]
          shaffledWord = _.shuffle(_.map(shaffledWord, function(word) {
              return {
                  character: word,
                  guessed: false
              }
          }));
      }
    });
  }

    cardSelection = e => {
        if(this.state.comparing || this.state.selectedCards.indexOf(e) > -1 || card.guessed) {
            return;
        }
        const selectedCards = [...this.state.seletedCards, e];
        this.setState({
            selectedCards
        });
        if(this.state.selectedCards.length == 1) {
        }
    }
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
          {getFieldDecorator("word", {
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

export default Form.create()(GameInitial);

