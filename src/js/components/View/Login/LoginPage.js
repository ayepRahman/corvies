import React, { Component } from 'react';
import LoginForm from "../Login/LoginForm";


class LoginPage extends Component {
    render() {
        return (
            <div className="custom-container">
                <div className='row'>
                    <LoginForm />
                </div>                
            </div>
        );
    }
}

export default LoginPage;