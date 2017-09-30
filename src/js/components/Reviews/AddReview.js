import React, { Component } from 'react';
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
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit(e) {
        e.preventDefault()
        console.log("onSubmit:",this.state);

        reviewRef.push({
            movie_id: this.props.movieId,
            email: "new@test.com",
            reviews: this.state.reviews
        })
        
    }

    render() {
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

export default AddReview;