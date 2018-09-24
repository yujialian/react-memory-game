import React from 'react';
import {render} from 'react-dom';
import {List, Avatar} from 'antd';
import _ from 'lodash';

export default class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {usersList} = this.props;
    let sortedUsersList = _.reverse(_.sortBy(usersList, 'score'));
    return (<List itemLayout="horizontal" dataSource={sortedUsersList} renderItem={item => (<List.Item>
        {
          item.score
            ? <List.Item.Meta avatar={<Avatar src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN8SURBVFhH7VffS1NhGF4XXRR115/RTUQQFHUh5Nzm3GgZXQihEN0F2UWWtd1Egdgqg3KbZ3NSCEWE4o+dbU6LlMStHxCVpBmTinCmbtOYutP3nN7ZfsnMneNm+MAL3773eZ734Tuc76hiU0N7qUvIVUMlJVkrGze9aMz6AZOGnpmVwu90IMyC2ZxS2EtHNi8as35sBcwXWwHzxaYIaHr8VfKA8JQoYHe17nJP9Lzj47JUAeEFT3jTmPygruvcq7/SO15jHp7PNyA84AVPspcGGmPHTn29qx1DJr7P0cg/WEtAaKCFB7zIVnro6ru5E8ZewT0SpNG5A4ILDbRkIy80dV26SlPvYkP7K+FXbGnVgOiBAy40JN8YsMe0p9Lk+oLHhjDZCj1wwCVZYeDl1KGfozcFYbpNLKy9nGaK2oUHb1OpEZK3KgUUwrmtKiW1iwd9Du0win4WF1w21ZGBNn0EhTVtFw/67OUvJwOmOApr2i4OuJuVh/vbdJH4VKuA6m/VRbBH7cLD69AOTQaM8cRbHGSniD1qFxYua9khnBhOLhFQPEV2ougRbWPhu3t0l9um3MdbSiu9dvXboP/v6SUq6L8aRw8ccKEhuXQQBMU23laq5q3Havu4cqfPURHw2DXTfEvZ4rMHx2cCHdWzowO1S8mnlyjsoQcOuNBACw94wRPemEHj1geXpfQ0u3zj733nhNCHBmFh8j4L4MwIlLucohYe8IInvGlMfmBfiip2AUfDE01ZBrMKOYXYpyZh/s0NsWJjjMf2snHhAS94kr00cFvLTsJ4bvxOxlAEigaupZQYMo0HrddeHoUX2UoLj0VpwIDZsdspg3Fq6QGxl8yBBlp4kJ08cFtUFV4HQt5ac0BwoYGWbOSFy6LUs4ELiQC5HjG40JBcfrDP2IHnDw2ziQDiS8IC4dRQYriklwRcaEguP3A9vO46E14JmKPAlexKWQu8nMo8Pngx4+uxWoELDcnlh69V++LHu+spIaZHG4WhR6fCKKyTe+BCQ3L54bVrpuaD98TheEOHn1SFPZzmGy5fFNbYS1xH4EJDcnnx1Kbd7W5RxcKfmwR/R3WE/f8R4m1lZ0ea928nigJr7KHn76yJgAsNtESRD7xFeZANX/Zw6jmeU10YbDTsoFYG0ANH5DINtNSSD+w+M7DHaPyXP5/AhQZa2vqfoFD8BmGeA9EWVBL4AAAAAElFTkSuQmCC" />} title={<a href = "#" > {
                  item.userName
                }
                </a>} description={`Score: ${item.score}`}/>
            : null
        }
      </List.Item>)}/>);
  }
}
