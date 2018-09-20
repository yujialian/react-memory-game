import React from 'react';
import _ from 'lodash';

export default class GameStart {
    propTypes: {
        word: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    },
        componentWillMount() {
            this.max = this.props.word.length / 2;
        },
        gameInitialization() {
            return {
                correct: 0,
                message: ""
            }
        }
}
