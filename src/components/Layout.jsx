import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <header>
                    <p>React Router v4 Browser Example</p>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li >
                        </ul>
                    </nav>
                </header>
                <main>
                    <Route path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                </main>
                <footer>
                    React Router v4 Browser Example (&copyright;) 2019
                </footer>
            </div >
        )
    }
}

export default Layout