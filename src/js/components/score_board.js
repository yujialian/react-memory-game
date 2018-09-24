import React from 'react';
import { render } from 'react-dom';
import { List, Avatar } from 'antd';

const data = [
  {
    userName: 'Ant Design Title 1',
	score: 10
  },
  {
    userName: 'Ant Design userName 2',
	score:20
  },
  {
    userName: 'Ant Design userName 3',
	score: 30
  },
  {
    userName: 'Ant Design userName 4',
	score: 40
  },
];

export default class ScoreBoard extends React.Component {
	render() {
	return (
  		<List
    		itemLayout="horizontal"
    		dataSource={data}
    		renderItem={item => (
      		<List.Item>
        		<List.Item.Meta
          		avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          		title={<a href="https://ant.design">{item.title}</a>}
          		description={`Ant Design, score: {item.score}`}
        		/>
      		</List.Item>
    		)}
  		/>);
};
}
