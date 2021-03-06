import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { selectQueryApi } from "../../actions/index-action"
import $ from "jquery"

class SelectBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "HAHAH"
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

        $(document).ready(() => {
            
            $('select').material_select();
        
        })
    }

    onChange(e) {
        // console.log("onchange:", e.target.value);
        let selectId = e.target.value
        this.setState({
            value: e.target.value
        })
        this.props.selectQueryApi(selectId)
    }

    onSubmit(e) {
        // let val = this.state.value
        // console.log("onSubmit",val);
        // this.props.searchQueryApi(query)
        e.preventDefault();
    }

    render() {
   
        return ( 
            <div>
                <div className="input-field col s5">
                    <form onSubmit={this.onSubmit}>
                        <select
                            className="browser-default"
                            value={this.state.selectVal}
                            onChange={this.onChange}>
                            <option value="" >Select</option>
                            <option value="28">Action</option>
                            <option value="12">Adventure</option>
                            <option value="16">Animation</option>
                            <option value="35">Comedy</option>
                            <option value="80">Crime</option>
                            <option value="10751">Family</option>
                            <option value="27">Horror</option>
                            <option value="10749">Romance</option>
                            <option value="53">Thriller</option>
                            <option value="10752">War</option>
                        </select>
                        
                    </form>   
                </div>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectQueryApi}, dispatch)
}

export default connect(null, matchDispatchToProps)(SelectBar);

