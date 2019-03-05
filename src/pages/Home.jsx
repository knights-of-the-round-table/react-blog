import React, { Component } from 'react'

import RouterView from '@/components/RouterView'
import Sidebar from '@/components/Sidebar'

class HomePage extends Component {
    render() {
        const { routes = [] } = this.props

        return (
            <main style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
                <Sidebar />
                <div style={{ position: 'relative', flex: 'auto' }}>
                    <RouterView routes={routes} />
                </div>
            </main>
        )
    }
}

export default HomePage