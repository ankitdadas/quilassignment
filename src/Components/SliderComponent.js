import React, { Component } from 'react';

class SliderComponent extends Component {
    componentDidMount() {

        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        }

    }
    render() {
        return (
            <div className="slidecontainer">
                <input id="typeinp" className="slider" type="range" min="0" max="100" defaultValue="3" step="1" id="myRange" />
                <p>Value: <span id="demo"></span></p>
            </div>
        )
    }
}
export default SliderComponent;