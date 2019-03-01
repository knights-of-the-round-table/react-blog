import React, { Component } from 'react'
import { Button, Input } from 'antd'
import './index.scss'

const { Search } = Input

class Articles extends Component {
    state = {
        articles: [
            {
                id: 1,
                title: '匆匆',
                creteTime: '2012-03-12 08:41:55'
            },
            {
                id: 2,
                title: '海角天涯，招之即来',
                creteTime: '2012-03-12 08:41:55'
            },
            {
                id: 3,
                title: '盗墓笔记',
                creteTime: '2012-03-12 08:41:55'
            },
            {
                id: 4,
                title: '沙海',
                creteTime: '2012-03-12 08:41:55'
            },
            {
                id: 5,
                title: '鬼吹灯',
                creteTime: '2012-03-12 08:41:55'
            }
        ]
    }

    render() {
        return (
            <section className="articles-box">
                <header>
                    <div className="handler-bar">
                        <h3 className="title">Articles</h3>
                        <div className="button-group">
                            <Button className="button" icon="cloud" />
                            <Button className="button" icon="plus" />
                        </div>
                    </div>
                    <div className="search-bar">
                        <Search className="search-input" type="text" />
                    </div>
                </header>
                <ul className="articles">
                    {
                        this.state.articles.map((article, index) =>
                            <li className={`article ${article.id === 2 ? 'active' : ''}`} key={index}>
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-summary">我外婆说，我舅舅小时候性子很揪。跟我外公吵完架，就把眼镜布塞眼镜盒里，拿几本书塞进书包，气哼哼的出门，在门口还会吼一声：我这就去美国！再也不回来了！</p>
                                <div>
                                    <time className="article-create-time">{article.creteTime}</time>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
        )
    }
}

export default Articles