import React from 'react';
import { v4 as uuid } from "uuid";

class List extends React.Component {
	render() {
		if (this.props.items.length === 0) {
			return <h2>No items available</h2>;
		} else {
			return (
				<div>
					{this.props.items.map((item) => (
						<div key={uuid()}>
							<p>{item.productName}</p>
							<p>{item.price}</p>
						</div>
					))}
				</div>
			);
		}
	}
}
export default List;