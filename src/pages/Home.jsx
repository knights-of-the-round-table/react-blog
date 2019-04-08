import React, { Component } from 'react'

import RouterView from '@/components/RouterView'
import Sidebar from '@/components/Sidebar'

import './Home.scss'

class HomePage extends Component {
    render() {
        const { routes = [] } = this.props

        return (
            <div className="page">
                <aside className="page__aside">
                    <Sidebar />
                </aside>
                <main className="page__main">
                    <RouterView routes={routes} />
                </main>
            </div>
        )
    }
}

export default HomePage