import React, { Component } from 'react';
import { connect } from "react-redux"

class MovieListContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state:", state);
    return {}
}

export default connect(mapStateToProps, null)(MovieListContainer)