import React, { Component } from 'react';
import { firebaseApp } from "../../../../config/firbase-config";
import { Link } from "react-router-dom"

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                message: ''
            }       
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state    

        firebaseApp.auth().signInWithEmailAndPassword( email, password )
            .catch( error => {
                this.setState({error})
            })
    }


    render() {
        

        return (
            <div>
                <div className="row">
                    <form onSubmit={this.onSubmit} className="col offset-s2 s8">
                        <h4>Login</h4>

                        {/* email */}
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="fa fa-envelope-o prefix"></i>
                                <input
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    name="email"  
                                    id="email" 
                                    type="email" 
                                    className="validate" 
                                    maxLength="20"
                                    required
                                />
                                <label 
                                    htmlFor="email"
                                    data-error="enter valid email" 
                                    data-success="success"
                                    >Email</label>
                            </div>
                        </div>

                        {/* password */}
                        <div className='row'>
                            <div className="input-field col s12">
                                <i className="fa fa-key prefix"></i>
                                <input
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    name="password"  
                                    id="password" 
                                    type="password"
                                    className="validate" 
                                    maxLength="20"
                                    required
                                />
                                <label 
                                    htmlFor="password"
                                    data-error="please type a password" 
                                    data-success="success"
                                    >Password</label>
                            </div>
                        </div>

                        {/* flash message */}
                        <div className="container flash-msg">
                            <h5>{this.state.error.message}</h5> 
                        </div>

                        {/* Link */}
                        <div className='custom-margin'>
                            <Link to={'/signup'}>Not a user? Register to Login</Link>
                         </div>

                        <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action">
                            Login
                        </button>

                    </form>
                    
                </div>
            </div>
        );
    }
}

export default LoginForm;