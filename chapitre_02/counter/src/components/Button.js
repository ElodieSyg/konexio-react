import React from "react";

class Button extends React.Component {

    render() {
        return (
        <div>
            <button onClick={this.props.onClick} className={this.props.text === '+' ? 'green' : 'red'}>
                {this.props.text}
            </button>
        </div>
        )
    }
}

export default Button;
