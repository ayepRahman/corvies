import React, { Component } from 'react';
import { Circle } from "react-progressbar.js"

class CircleLoading extends Component {
    render() {
        let options = {
            color: "#e91e63" ,
            duration: 1000,
            from: { color: "#e91e63", width: 1 },
            to: { color: "#26a69a", width: 4 }, 
            strokeWidth: 4,
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
            
                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                  circle.setText('');
                } else {
                  circle.setText(value);
                }
            
            } 

        };

        // For demo purposes so the container has some dimensions.
        // Otherwise progress bar won't be shown
        let containerStyle = {
            width: '200px',
            height: '200px'
        };

        return (
            <Circle
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

export default CircleLoading;