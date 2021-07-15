import React from "react";
import Button from "./Button";

class Counter extends React.Component {

    render() {
        return (
            <div className="display-counter">
                <Button text="+" onClick={this.props.clickMore} />
                <h2 className="padding">{this.props.count}</h2>
                <Button text="-" onClick={this.props.clickLess} />
            </div>
        )
    }
}

export default Counter;