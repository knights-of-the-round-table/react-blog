import React, { Component } from 'react'
import Categories from './components/categories'
import Articles from './components/articles'
import Article from './components/article'
import './index.scss'

class SettingPage extends Component {
    render() {
        return (
            <section className="layout-press">
                <div className="layout-press-categories">
                    <Categories />
                </div>
                <div className="layout-press-articles">
                    <Articles />
                </div>
                <div className="layout-press-article">
                    <Article />
                </div>
            </section>
        )
    }
}

export default SettingPage