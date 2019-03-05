import React, { Component } from 'react'
import { Table } from 'antd'

import './index.scss'

class UserPage extends Component {
    render() {
        const columns = [
            {
                title: '#',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: 'Name',
                key: 'name',
                dataIndex: 'name'
            }
        ]

        const data = [
            {
                id: 1,
                name: 'John Brown'
            },
            {
                id: 2,
                name: 'Jim Green'
            },
            {
                id: 3,
                name: 'Joe Black'
            }
        ]

        return (
            <div className="page-user-list">
                <div className="table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }
}

export default UserPage