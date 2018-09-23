import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import GameInitial from './components/game_initialize';
import GameStart from './components/game_start';
import { Layout, Menu, Breadcrumb, Row, Col, Slider  } from 'antd';
const { Header, Content, Footer } = Layout;

export default class GameIndex extends React.Component {
    propTypes: {
             onWordsEntered: React.PropTypes.func.isRequired
    }
	constructor() {
		super();
        this.state = {
            cardsInfo : [],
            selectedIndex: [],
            isComparing: false,
            word: undefined
        }
		this.setWord = this.setWord.bind(this);
	}

	setWord(word) {
		this.setState({word: word}, ()=>{ this.gameStartOrRestart() })
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
            <Menu.Item key="1">Single Mode</Menu.Item>
            <Menu.Item key="2">Multiple Mode</Menu.Item>
            <Menu.Item key="3">Score board</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64  }}>
          <Breadcrumb style={{ margin: '16px 0'  }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380  }}>
    {this.state.word ? <GameStart selectedCard={(card, index) => this.selectedCard(card, index)} cardsInfo={this.state.cardsInfo} selectedIndex={this.state.selectedIndex} /> : <GameInitial wordEntered={this.setWord} />}
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    Ant Design   2018 Created by Ant UED
    </Footer>
    </Layout>);
};
}
ReactDOM.render(<GameIndex />, document.getElementById('mainContainer'));
