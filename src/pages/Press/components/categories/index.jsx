import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

class Sidebar extends Component {
    state = {
        categories: [
            {
                icon: 'dashboard',
                name: 'Dashboard'
            },
            {
                icon: 'experiment',
                name: 'Experiment'
            }
        ]
    }

    render() {
        return (
            <ul className="categories">
                {
                    this.state.categories.map((category, index) =>
                        <li className="category" key={index}>
                            <Icon className="category-icon" type={category.icon} />
                            <span className="category-name">{category.name}</span>
                        </li>
                    )}

            </ul>
        )
    }
}

export default Sidebar