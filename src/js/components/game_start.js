import React from 'react';
import Grid from './grid';
import _ from 'lodash';
import './game_start.css'

export default class GameStart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cardsInfo, selectedCouple, selectedCard} = this.props;
        return (
            <div className='gameBoard'>
            {
                cardsInfo.map((cardInfo, index) => {
                    const comparing = selectedCouple.indexOf(cardInfo) > -1
                    return (
                        <Grid
                            word={cardInfo.character}
                            isComparing = {comparing}
                            key= {index}
                            selectedCard={()=>selectedCard(cardInfo)}
                            guessed={cardInfo.guessed}
                        />
                    )
                })
            }
            </div>
        );
    }
}
