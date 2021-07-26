import React from 'react';
import Card from './Card'

class Pay extends React.Component {
    constructor() {
        super();

        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,
        }
    }

    handleSelect = (name, price) => {
        console.log(name)
        console.log(price)
    }

	render() {
		return (
			<div>
                <h1>Pay</h1>

                <div>
                    <p>SubTotal: {this.state.total}</p>
                    <p>Total TVA : {this.state.totalTVA}</p>
                    <p>Total Eco Tax : {this.state.totalEcoTax}</p>
                    <p>Total TTC : {this.state.totalTTC}</p>

                </div>

				<p>
					Total:{" "}
					{this.props.items.reduce(
						(accumulator, currentItem) =>
							(accumulator += currentItem.price),
						0
					)}
					€
				</p>

                {this.props.items.map(item => {
                    return (
                        <Card productName={this.props.productName} price={this.props.price}/>
                    )
                })}
			</div>
		);
	}
}

export default Pay;