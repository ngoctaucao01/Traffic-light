import React, { Component } from 'react';
import './TrafficLight.css';

import classNames from 'classnames';


const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class Trafficlight extends Component{

    render(){
        const { currentColor } = this.props;
        console.log('Rendering...', currentColor)
        return <div className="TrafficLight">
           <div className={classNames('buld', 'red', {
                active: currentColor === RED
            })} />
            <div className={classNames('buld', 'orange', {
                active: currentColor === ORANGE
            })} />
            <div className={classNames('buld', 'green', {
                active: currentColor === GREEN
            })} />
        </div>;
    }

}

export default Trafficlight;
