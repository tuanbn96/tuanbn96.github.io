import React, { Component } from "react";
import fire from "./config/fire";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SideBar from "./components/sidebar";
import Pageheader from "./components/pageHeader";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        HELLO
        <br />
        <a onClick={this.logout.bind(this)}>Log Out</a>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Login" component={Login}>
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
        <div>
          <Layout>
            <SideBar
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            />
            <Layout>
              {/* <MainBoard/> */}
              <Pageheader />
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 700
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Home;
