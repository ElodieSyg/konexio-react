import React from 'react';
// CSS 
import './List.modules.css';
// Keys
import { v4 as uuid } from "uuid";

class List extends React.Component {
	render() {
		if (this.props.items.length === 0) {
			return <h2>No items available</h2>;
		} else {
			return (
				<div>
					{this.props.items.map((item) => (
						<div className="container d-flex flex-row bd-highlight mb-3 justify-content-between rounded border border-secondary" key={uuid()}>
							<p className="p-2 bd-highlight">{item.productName}</p>
							<p className="p-2 bd-highlight rounded-pill bg-primary white-text">{item.price}€</p>
						</div>
					))}
				</div>
			);
		}
	}
}
export default List;