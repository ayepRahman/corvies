import React, { Component } from 'react';
import { Line } from "react-progressbar.js"

class LineLoading extends Component {
    render() {

        let options = {
            strokeWidth: 4,
            easing: "easeInOut",
            duration: 500,
            color: "#08453c",
            trailColor: "#eee",
            from: {color: "#e91e63"},
            to: {color: "#26a69a"},
            svgStyle: {width: '100%', height: '100%', margin: "20px"},
            trailWidth: 1,
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
                bar.setText(Math.round(bar.value() * 100) + ' %')


            }
        }

        let containerStyle = {
            margin: "20px",
            width: "400px",
            height: "8"
        };

        return (
            <Line
                progress={true}
                text={'test'}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'} 
            />
        );
    }
}

export default LineLoading;