import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import GameInitial from './components/game_initialize';
import GameStart from './components/game_start';
import ScoreBoard from './components/score_board';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Slider,
  Button,
  message,
  Modal
} from 'antd';
const {Header, Content, Footer} = Layout;

const getInitialState = () => {
  return {
    cardsInfo: [],
    userName: undefined,
    usersList: [],
    selectedIndex: [],
    isComparing: false,
    word: undefined,
    selectScoreBoard: false,
    score: 0
  }
}
export default class GameIndex extends React.Component {
  propTypes: {
    onWordsEntered: React.PropTypes.func.isRequired
  }
  constructor() {
    super();
    this.state = getInitialState();
  }

  setStatus = (word, userName) => {
    this.setState({
      word: word,
      userName: userName
    }, () => {
      this.gameRestart()
    })
  }

  backMainBoard = () => {
    this.gameRestart();
    this.setState({cardInfo: [], word: undefined, userName: undefined});
  }

  handleItemClick = (e) => {
    if (e.key === '0' && this.state.word) {
      this.setState({selectScoreBoard: false});
    } else if (e.key === '0') {
      this.setState(getInitialState());
    } else {
      this.setState({selectScoreBoard: true});
    }
  }

  gameRestart = () => {
    let word = this.state.word.concat(this.state.word);
    var shaffledWord = [...word]
    shaffledWord = _.shuffle(_.map(shaffledWord, function(word) {
      return {character: word, guessed: false}
    }));
    this.setState({cardsInfo: shaffledWord, selectedIndex: [], isComparing: false, selectScoreBoard: false, score: 0})
  }

  selectedCard = (index) => {
    if (this.state.isComparing || this.state.selectedIndex && this.state.selectedIndex.indexOf(index) > -1 || this.state.cardsInfo[index].guessed)
      return;
    const selectedIndex = [
      ...this.state.selectedIndex,
      index
    ];
    this.setState({
      selectedIndex: selectedIndex
    }, () => {
      if (this.state.selectedIndex.length == 2)
        this.compareIndex(selectedIndex);
      }
    );
  }
  compareIndex(selectedIndex) {
    this.setState({isComparing: true})

    setTimeout(() => {
      const [firstCard, secondCard] = selectedIndex;
      let cardsInfo = this.state.cardsInfo;
      if (this.state.cardsInfo[firstCard].character === this.state.cardsInfo[secondCard].character) {
        cardsInfo = _.map(this.state.cardsInfo, function(cardInfo, index) {
          if (index != firstCard && index != secondCard) {
            return cardInfo
          }
          return {
            ...cardInfo,
            guessed: true
          }
        })
        this.setState({
          score: this.state.score + 5
        })
      } else {
        this.setState({
          score: this.state.score - 1
        })
      }
      this.win(cardsInfo);
      this.setState({cardsInfo, selectedIndex: [], isComparing: false})
    }, 1000);
  }

  win(cardsInfo) {
    if (_.filter(cardsInfo, {guessed: false}).length == 0) {
      this.setState({
        usersList: [
          ...this.state.usersList, {}
        ]
      })
      let usersList = this.state.usersList
      let userName = this.state.userName;
      let found = false
      /* If user name already present in user list, update the score if current score is higher. */
      usersList = _.map(this.state.usersList, function(userInfo, index) {
        if (userInfo.userName === userName) {
          found = true
          return {
            ...userInfo,
            score: userInfo.score > this.state.score
              ? userInfo.score
              : this.state.score
          }
        } else {
          return userInfo
        }
      })
      if (found) {
        this.setState({usersList: usersList})
      } else {
        this.setState({
          usersList: [
            ...this.state.usersList, {
              userName: this.state.userName,
              score: this.state.score
            }
          ]
        })
      }
      this.gameRestart();
    }
  }

  render() {
    return (<Layout style={{
        height: "100vh"
      }}>
      <Header style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }}>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} onClick={this.handleItemClick} style={{
            lineHeight: '64px'
          }}>
          <Menu.Item key="0">Allumio Game Center</Menu.Item>
          <Menu.Item key="1">Score board</Menu.Item>
        </Menu>
      </Header>
      <Content style={{
          padding: '0 50px',
          marginTop: 64
        }}>
        {
          this.state.word && !this.state.selectScoreBoard
            ? (<div className="GameButton">
              <Button type="primary" style={{
                  float: 'left',
                  margin: '20px'
                }} icon="poweroff" onClick={this.gameRestart}>
                Restart
              </Button>
              <Button type="primary" style={{
                  float: 'left',
                  margin: '20px'
                }} onClick={() => this.backMainBoard()}>Back to main board</Button>
              <Button type="primary" style={{
                  float: 'left',
                  margin: '20px'
                }} onClick={() => message.info('Enjoy the game!')}>Welcome! {this.state.userName}</Button>
            </div>)
            : null
        }
        <div style={{
            background: '#fff',
            padding: 24,
            minHeight: 380
          }}>
          {
            this.state.selectScoreBoard
              ? <ScoreBoard usersList={this.state.usersList}/>
              : this.state.word
                ? <GameStart selectedCard={(card, index) => this.selectedCard(card, index)} cardsInfo={this.state.cardsInfo} selectedIndex={this.state.selectedIndex}/>
                : <GameInitial wordEntered={this.setStatus}/>
          }
        </div>
      </Content>
      <Footer style={{
          textAlign: 'center'
        }}>
        Ant Design 2018 Created by Ant UED
      </Footer>
    </Layout>);
  };
}
ReactDOM.render(<GameIndex/>, document.getElementById('mainContainer'));
