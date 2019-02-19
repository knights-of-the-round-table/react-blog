import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Link, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <BrowserRouter>

        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="home">
                <Link to="/">
                  <Icon type="user" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/login">
                  <Icon type="video-camera" />
                  <span>Login</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/register">
                  <Icon type="upload" />
                  <span>Register</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}


export default App;
