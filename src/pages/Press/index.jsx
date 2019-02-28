import React, { Component } from 'react'
import Sidebar from './components/sidebar'
import Categories from './components/categories'
import Articles from './components/articles'
import Article from './components/article'
import './index.scss'

class SettingPage extends Component {
    render() {
        return (
            <div className="layout-press">
                <div className="layout-press-sidebar">
                    <Sidebar />
                </div>
                <div className="layout-press-categories">
                    <Categories />
                </div>
                <div className="layout-press-articles">
                    <Articles />
                </div>
                <div className="layout-press-article">
                    <Article />
                </div>
            </div>
        )
    }
}

export default SettingPage