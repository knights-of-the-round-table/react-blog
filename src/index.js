import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import './index.scss'
import routes from '@/routes'
import RouterView from '@/components/router-view'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<BrowserRouter>
    <Switch>
        {routes.map((route, i) => (
            <RouterView key={i} {...route} />
        ))}
    </Switch>
</BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
