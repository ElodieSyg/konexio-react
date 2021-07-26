import React from 'react';
import Card from './Card'

class Pay extends React.Component {
	render() {
		return (
			<div>
				<p>
					Total:{" "}
					{this.props.items.reduce(
						(accumulator, currentItem) =>
							(accumulator += currentItem.price),
						0
					)}
					€
				</p>

                <Card productName="croissant"/>
			</div>
		);
	}
}

export default Pay;