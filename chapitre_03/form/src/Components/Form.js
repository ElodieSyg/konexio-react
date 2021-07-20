import React from  'react';

class form extends React.Component {
    render() {
        return(
            <form className="container" onSubmit={this.props.onSubmit}>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input
                    onChange={this.props.onChange}
                    className="form-control border"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email..."/>
                </div>

                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input 
                    onFocus={this.props.onFocus}
                    type="password" 
                    className="form-control border" 
                    id="inputPassword" 
                    placeholder="Enter password..."/>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe"/>
                    <label className="form-check-label" for="rememberMe">Remember me</label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default form;