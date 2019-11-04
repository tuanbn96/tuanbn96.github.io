import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar(props) {
  return (
    <Sider
      collapsible
      collapsed={props.collapsed}
      
    >
      <div className="logo">
        OFELIA
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item>
          <Icon type="user" />
          <span>Admin</span>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
