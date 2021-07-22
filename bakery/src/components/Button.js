import React from 'react';

class Add extends React.Component {
    render() {
        return(
            <div>
                <button
                type="button"
                class="btn btn-outline-primary"
                onClick={this.props.onClick}
                children={this.props.children}>
                </button>
            </div>
        )
    }
}

export default Add;