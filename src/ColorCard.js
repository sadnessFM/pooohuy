import React from "react";
import { GetRandColor, GetRGBAColor } from "./Constants";

export default class ColorCard extends React.Component {
    state = {
        bgColor: GetRandColor()
    };

    componentDidMount() {
        this._getRandomColor();
    }

    _getRandomColor() {
        const item = this.state.bgColor[
            Math.floor(Math.random() * this.state.bgColor.length)
            ];
        this.setState({
            selectedColor: item
        });
    }

    render() {
        return (
            <div
                className=".color-card"
                style={{
                    //backgroundColor: GetRandColor()
                    backgroundColor: GetRGBAColor()
                }}
            >
                ИГОРЬ АВРААЛОВИЧ ГОФМАН
            </div>
        );
    }
}
