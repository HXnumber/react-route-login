import React,{ Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './mycss.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderMenu extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="HeaderPosition">
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <SubMenu title={<span><Icon type="user" />{this.props.username}</span>}>
            <Menu.Item key="user:1"><Icon type="setting" />Personal Information Setting</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}
export default HeaderMenu;