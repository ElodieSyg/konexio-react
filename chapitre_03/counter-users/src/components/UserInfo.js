import React from "react";

class UserInfo extends React.Component {
	render() {
		return (
            <div className="flex-box">
                <div className="user-container">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
		);
	}
}

export default UserInfo;