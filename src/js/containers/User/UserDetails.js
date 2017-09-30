import React, { Component } from 'react';
import { connect } from "react-redux"
import $ from "jquery"


class UserDetails extends Component {
    constructor(props) {
        super(props);

        $(document).ready(() => {
            
            $('.chips').material_chip();
        })

        
    }


    render() {
        const { email, displayName } = this.props.users
        let userChip = null
        
        if(!displayName) {
            userChip = (
                <div className='chip'>Hi, { email }</div>
            )
        } else {
            userChip = (
                <div className='chip'>Hi, { displayName }</div>
            )
        }

        return (
            <div>
                {userChip}
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

export default connect(mapStateToProps, null)(UserDetails)