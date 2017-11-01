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
        const { email } = this.props.users
        let userChip = null
        console.log( email );
        
        if(email) {
            userChip = (
                <div className='chip'>Hi, { email }</div>
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