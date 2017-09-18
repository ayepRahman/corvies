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
                <div className="input-field col s8">
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={this.state.searchQuery}
                            onChange={this.onChange} 
                            name="searchQuery"
                            id="searchField" 
                            type="text" 
                            className="validate" 
                        />
                        <label htmlFor="searchField">Search by Movies names</label>
                    </form> 
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log("mapStateToProps:", state.searchMovie);
    return {
        movies: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchQueryApi}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);