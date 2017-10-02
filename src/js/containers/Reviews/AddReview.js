import React, { Component } from 'react';
import { connect } from "react-redux"
import { reviewRef } from "../../../config/firbase-config"

class AddReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    addReview() {

    }

    onChange(e) {
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit(e) {
        e.preventDefault()
        console.log("onSubmit:",this.state);
        const { email } = this.props

        reviewRef.push({
            movie_id: this.props.movieId,
            email,
            review: this.state.reviews
        })
        
    }

    render() {

        // console.log("Mstp: ", this.props.email);

        return (
            <div className="container">
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <textarea 
                                    onChange={this.onChange}
                                    name="reviews"
                                    id="addReview" 
                                    className="materialize-textarea"
                                    >
                                </textarea>
                                <label htmlFor="addReview">Add Review</label>
                            </div>
                            <button type='submit' className=''>Add</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        email: state.users.email,
        login: state.users
    }
}

export default connect(mapStateToProps, null)(AddReview)