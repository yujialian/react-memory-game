import React from 'react';
import { render } from 'react-dom';
import { List, Avatar } from 'antd';

export default class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
    }
	render() {
    const {usersList} = this.props;
	return (
  		<List
    		itemLayout="horizontal"
            dataSource={usersList}
    		renderItem={item => (
      		<List.Item>
        		<List.Item.Meta
          		avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          		title={<a href="#">{item.userName}</a>}
          		description={item.score}
        		/>
      		</List.Item>
    		)}
  		/>);
}
}
