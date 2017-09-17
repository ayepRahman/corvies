import React, { Component } from 'react';
import { connect } from "react-redux"

class MovieListContainer extends Component {
    render() {
        const { email, displayName } = this.props.users
        return (
            <div>
                <p>Welcome: {displayName} </p>
                <p><em>{email}</em></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state;
    // console.log("state:", state.users);
    return {
        users
    }
}

export default connect(mapStateToProps, null)(MovieListContainer)