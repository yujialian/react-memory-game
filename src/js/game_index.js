import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import GameInitialzie from './components/game_initialize';
import { Layout, Menu, Breadcrumb, Row, Col, Slider  } from 'antd';
const { Header, Content, Footer  } = Layout;


export default class GameIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            text: undefined
        }
    }
render() {
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
            <GameInitialzie />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center'  }}>
          Ant Design   2018 Created by Ant UED
    </Footer>
  </Layout>);
};
}
ReactDOM.render(<GameIndex />, document.getElementById('mainContainer'));
