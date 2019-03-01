import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

class Sidebar extends Component {
    state = {
        categories: [
            {
                id: 0,
                icon: 'dashboard',
                name: 'Dashboard'
            },
            {
                id: 1,
                icon: 'experiment',
                name: 'Experiment'
            },
            {
                id: 2,
                icon: 'android',
                name: 'Android'
            },
            {
                id: 3,
                icon: 'apple',
                name: 'Apple'
            },
            {
                id: 4,
                icon: 'windows',
                name: 'Windows'
            },
            {
                id: 5,
                icon: 'chrome',
                name: 'Chrome'
            }
        ]
    }

    render() {
        return (
            <section>
                <ul className="categories">
                    {
                        this.state.categories.map((category, index) =>
                            <li className={`category ${category.id === 1 ? 'active' : ''}`} key={index}>
                                <Icon className="category-icon" type={category.icon} />
                                <span className="category-name">{category.name}</span>
                            </li>
                        )}

                </ul>
            </section>
        )
    }
}

export default Sidebar