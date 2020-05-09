import React, { Component } from 'react';

class ColorSwitchComponent extends Component {
    render() {
        return (
            <div className="colorswitchholder">
            <div className="colorswitch">
                <input type="checkbox" name="colorswitch" className="colorswitch-checkbox" id="mycolorswitch" />
                <label className="colorswitch-label" htmlFor="mycolorswitch">
                    <span className="colorswitch-inner"></span>
                    <span className="colorswitch-switch"></span>
                </label>
            </div>   
            </div>       
        )
    }
}
export default ColorSwitchComponent;