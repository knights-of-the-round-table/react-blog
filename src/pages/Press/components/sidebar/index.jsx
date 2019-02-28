import React, { Component } from 'react'
import { Icon } from 'antd'

import './index.scss'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Icon type="up" style={{ color: '#fff' }} />
            </div>
        )
    }
}

export default Sidebar