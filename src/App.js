import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const { Header, Sider, Content } = Layout

class App extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
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
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="posts">
                <Link to="/posts">
                  <Icon type="experiment" />
                  <span>Posts</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="setting">
                <Link to="/setting">
                  <Icon type="setting" />
                  <span>setting</span>
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
    )
  }
}


export default App
