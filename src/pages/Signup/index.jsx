import React, { Component } from 'react'

import SignupForm from './components/SignupForm'
import './index.scss'

class RegisterPage extends Component {
    render() {
        return (
            <div className="signup__page">
                <div className="l-left">
                    <SignupForm />
                </div>
                <div className="l-right"></div>
            </div>
        )
    }
}

export default RegisterPage