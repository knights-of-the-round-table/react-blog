import React, { Component } from 'react'
import { Icon } from 'antd'
import { withRouter } from 'react-router-dom';

import './index.scss'

class Sidebar extends Component {
    state = {
        navigates: [
            {
                icon: 'home'
            },
            {
                path: '/press',
                icon: 'read'
            },
            {
                icon: 'team'
            },
            {
                icon: 'setting'
            },
            {
                icon: 'bell'
            }
        ]
    }

    render() {
        return (
            <section className="sidebar">
                <header>
                    <Icon className="icon" type='search' style={{ color: '#fff' }} />
                </header>
                <ul className="navigator">
                    {this.state.navigates.map((navigate, index) =>
                        <nav className={this.props.location.pathname === navigate.path ? 'active' : ''} key={index}>
                            <Icon className="icon" type={navigate.icon} />
                        </nav>
                    )}
                </ul>
                <footer>
                    <Icon className="icon" type='github' style={{ color: '#fff' }} theme="filled" />
                </footer>
            </section>
        )
    }
}

export default withRouter(Sidebar)