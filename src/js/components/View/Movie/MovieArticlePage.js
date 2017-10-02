import React, { Component } from 'react';
import LineLoading from "../../ProgressBar/LineLoading"
import MovieArticleBanner from "./MovieArticleBanner"
import AddReview from "../../../containers/Reviews/AddReview"
import Reviews from "../../../containers/Reviews/Reviews"
import { connect } from "react-redux"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: {},
            loading: true,
            // users: null
        }
    }
    
    componentDidMount() {

        setTimeout(() => this.setState({
            loading: false
        }), 1000)
    }
     
    render() {
        // console.log("MOVIE ID:",this.props.match.params);
        const { id } = this.props.match.params
        const { loading } = this.state
        const { isLogin } = this.props
        // const isUser = this.state.users

        // display loading and rerender adter setinterval change to false
        if (loading) {
            return (
                <div className='custom-container_marginBottom'>
                    <div className='row'>
                        <div className='col s12 custom-container center-align'>
                            <LineLoading />
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <MovieArticleBanner 
                        loading={this.state.loading}
                        movieData={this.state.movieData}
                        id={id}
                    />

                    <Reviews movieId={ id }/>

                    {!isLogin ? (
                            <div className=''></div>
                        ) : (
                            <AddReview movieId={ id } />
                        )
                    }
                   

                </div>
            )
        }
        

        
       
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.users
    }
}

export default connect(mapStateToProps, null)(MovieArticle)