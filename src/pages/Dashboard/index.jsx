import React, { Component } from 'react'
import { Row, Col, Tooltip, Icon } from 'antd'
import { ChartCard, MiniArea, MiniBar } from 'ant-design-pro/lib/Charts'
import Trend from 'ant-design-pro/lib/Trend'
import moment from 'moment'
import numeral from 'numeral'

import './index.scss'

class DashboardPage extends Component {
    render() {
        const visitData = []
        const beginDay = new Date().getTime()

        for (let i = 0; i < 20; i++) {
            visitData.push({
                x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10
            })
        }

        return (
            <div className="page-dashboard">
                <Row gutter={24}>
                    <Col span={8}>
                        <ChartCard
                            bordered={false}
                            title='周访问量'
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(8846).format('0,0')}
                            footer={
                                <div>
                                    <span>
                                        月同比
                                    <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>12%</Trend>
                                    </span>
                                    <span style={{ marginLeft: 16 }}>
                                        周同比
                                    <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>11%</Trend>
                                    </span>
                                </div>
                            }
                        >
                            <MiniBar
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col span={8}>
                        <ChartCard
                            bordered={false}
                            title="UV"
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(8846).format('0,0')}
                            footer={
                                <div>
                                    <span>
                                        周同比
                                    <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>12%</Trend>
                                    </span>
                                    <span style={{ marginLeft: 16 }}>
                                        日同比
                                    <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>11%</Trend>
                                    </span>
                                </div>
                            }
                        >
                            <MiniArea
                                line
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col span={8}>
                        <ChartCard
                            bordered={false}
                            title='PV'
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(1234).format('0,0')}
                            footer={
                                <div>
                                    <span>
                                        周同比
                                        <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>12%</Trend>
                                    </span>
                                    <span style={{ marginLeft: 16 }}>
                                        日同比
                                        <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, .85)' }}>11%</Trend>
                                    </span>
                                </div>
                            }
                        >
                            <MiniArea
                                line
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DashboardPage