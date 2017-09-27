import React, { Component } from 'react';
import firebase from "firebase"
import { firebaseApp } from "../../../../config/firbase-config";
import { Link } from "react-router-dom"

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
            success: ''       
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    success: "Successfully Register User!"
                })
            }
        })
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

        firebaseApp.auth().createUserWithEmailAndPassword( email, password )
            .catch( error => {
                this.setState({error})
            })
    }

    authWithFacebook(facebookProvider) {
        firebase.auth().signInWithPopup(facebookProvider).then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user, token);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            throw(error)
          })
    }


    render() {
        let facebookProvider = new firebase.auth.FacebookAuthProvider();
        let errMsg = this.state.error.message
        let successMsg = this.state.success

        return (
            <div>
                <div className="row">
                    <form onSubmit={this.onSubmit} className="col offset-s2 s8">
                        <h4>Register</h4>

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
                        { !successMsg ? (
                                <div className=''></div>
                            ) : (
                                <div className="card-panel green accent-3">
                                    <span className="white-text">
                                        {successMsg}
                                    </span>
                                </div>
                            )
                        }

                        { !errMsg ? (
                                <div className=''></div>
                            ) : (
                                <div className="card-panel red darken-2">
                                    <span className="white-text">
                                        {errMsg}
                                    </span>
                                </div>
                            )
                        }

                        {/* Link */}
                        <div className='custom-margin'>
                            <Link to={'/login'}>Already a user? Sign in instead</Link>
                        </div>

                        <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action">
                            Register
                        </button>

                    </form>
                    
                </div>

                <div className='row'>
                    {/* facebook/github/google */}
                    <div className='col s8 offset-s2 '>
                        <p>Or choose the following sign up/login methods</p>
                        {/* facebook */}
                        <div className=''>
                            <button 
                                type='submit' 
                                className='btn blue darken-4 waves-effect waves-light '
                                onClick={this.authWithFacebook.bind(this, facebookProvider)} >
                                <i className="fa fa-facebook-official"></i>facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;