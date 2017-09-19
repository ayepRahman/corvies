import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { searchQueryApi } from "../../actions/index-action"

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
    onSubmit(e) {
        e.preventDefault();
        let query = this.state.searchQuery
        console.log(query);
        this.props.searchQueryApi(query)
    }

    render() {
        return (
            <div>
                <div className="input-field col s7">
                    <form onSubmit={this.onSubmit}>
                        <i className="fa fa-film prefix" ></i>
                        <input
                            value={this.state.searchQuery}
                            onChange={this.onChange} 
                            name="searchQuery"
                            id="searchField" 
                            type="text" 
                            className="validate" 
                        />
                        <label htmlFor="searchField">Search by Movies</label>
                    </form> 
                </div>
            </div>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchQueryApi}, dispatch)
}

export default connect(null, matchDispatchToProps)(SearchBar);