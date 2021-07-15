import React from "react";

class UserInfo extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.email}</p>
			</div>
		);
	}
}

export default UserInfo;