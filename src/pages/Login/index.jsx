import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Checkbox
} from 'antd'

import './index.scss'

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }]
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="/resetPassword">Forgot password</a>
                    <Button className="login-form-button" type="primary" htmlType="submit" block>Log in</Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm)

class LoginPage extends Component {
    render() {
        return (
            <main>
                <div className="login-wrapper">
                    <WrappedLoginForm />
                </div>
            </main>
        )
    }
}

export default LoginPage