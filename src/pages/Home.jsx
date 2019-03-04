import React, { Component } from 'react'
import { Layout } from 'antd'

import RouterView from '@/components/router-view'
import Sidebar from '@/components/sidebar'

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
        const { routes = [] } = this.props

        return (
            <Layout style={{ height: '100vh', flexDirection: 'row' }}>
                <Sidebar />
                <main>
                    {routes.map((route, i) => (
                        <RouterView key={i} {...route} />
                    ))}
                </main>
            </Layout>
        )
    }
}

export default HomePage