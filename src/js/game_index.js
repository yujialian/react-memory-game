import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import GameInitial from './components/game_initialize';
import GameStart from './components/game_start';
import { Layout, Menu, Breadcrumb, Row, Col, Slider, Button  } from 'antd';
const { Header, Content, Footer } = Layout;

export default class GameIndex extends React.Component {
    propTypes: {
             onWordsEntered: React.PropTypes.func.isRequired
    }
	constructor() {
		super();
        this.state = {
            cardsInfo : [],
            userName: undefined,
            selectedIndex: [],
            isComparing: false,
            word: undefined
        }
		this.setStatus = this.setStatus.bind(this);
        this.gameStartOrRestart = this.gameStartOrRestart.bind(this);
	}

	setStatus(word, userName) {
		this.setState({word: word, userName: userName}, ()=>{ this.gameStartOrRestart() })
	}

	gameStartOrRestart() {
		let word = this.state.word.concat(this.state.word);
		var shaffledWord = [...word]
		shaffledWord = _.shuffle(_.map(shaffledWord, function(word) {
			return {
				character: word,
				guessed: false
			}
		}));
		this.setState({
			cardsInfo: shaffledWord,
			selectedIndex: [],
			isComparing: false
		})
	}

    selectedCard(index) {
        if(this.state.isComparing || this.state.selectedIndex && this.state.selectedIndex.indexOf(index) > -1 || this.state.cardsInfo[index].guessed) return;
        const selectedIndex = [...this.state.selectedIndex, index];
        this.setState({ selectedIndex: selectedIndex }, () => {
            if(this.state.selectedIndex.length == 2) this.compareIndex(selectedIndex);
        });
    }
    compareIndex(selectedIndex) {
        this.setState({
            isComparing: true
        })

        setTimeout(() => {
            const [firstCard, secondCard] = selectedIndex;
            let cardsInfo = this.state.cardsInfo;
            if(this.state.cardsInfo[firstCard].character === this.state.cardsInfo[secondCard].character) {
                cardsInfo =_.map(this.state.cardsInfo, function(cardInfo, index) {
                    if(index != firstCard && index != secondCard) {
                        return cardInfo
                    }
                    return {...cardInfo, guessed: true}
                })
            }
            this.win(cardsInfo);
            this.setState({
                cardsInfo,
                selectedIndex: [],
                isComparing: false
            })
        }, 1000);
    }

	win(cardsInfo) {
		if(_.filter(cardsInfo, {guessed: false}).length == 0) alert("win!");
	}

render() {
    console.log("cardsInfo:", this.state.cardsInfo);
return (
    <Layout style={{height: "100vh"}}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%'  }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px'  }}
          >
            <Menu.Item key="0">Allumio Game Center</Menu.Item>
            <Menu.Item key="1">Gaming</Menu.Item>
            <Menu.Item key="2">Score board</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64  }}>
        {
           this.state.word ? <Button type="primary" style={{ margin: '10px' }} icon="poweroff" onClick={this.gameStartOrRestart}>
                Restart
            </Button> : null
        }
          <div style={{ background: '#fff', padding: 24, minHeight: 380  }}>
    {this.state.word ? <GameStart selectedCard={(card, index) => this.selectedCard(card, index)} cardsInfo={this.state.cardsInfo} selectedIndex={this.state.selectedIndex} /> : <GameInitial wordEntered={this.setStatus} />}
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    Ant Design   2018 Created by Ant UED
    </Footer>
    </Layout>);
};
}
ReactDOM.render(<GameIndex />, document.getElementById('mainContainer'));
