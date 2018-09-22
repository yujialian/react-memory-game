import React from 'react';
import Grid from './grid';
import _ from 'lodash';
import './game_start.css'

export default class GameStart extends React.Component {
constructor(props) {
    super(props)
}

    render() {
        const { words } = this.props;
        return (
            <div className='gameBoard'>
            {
                words.map((word, index) => {
                    return (
                        <Grid word={word} key= {index} flip = {false} />
                    )
                })
            }
            </div>
        );
    }
}
