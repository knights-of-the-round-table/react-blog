import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import Article from '@/pages/Article'
import Setting from '@/pages/Setting'

const { Header, Sider, Content } = Layout



class HomePage extends Component {
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
                        <Menu.Item key="article">
                            <Link to="/article">
                                <Icon type="experiment" />
                                <span>Article</span>
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
                        <Route path="/article" component={Article} />
                        <Route path="/setting" component={Setting} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default HomePage