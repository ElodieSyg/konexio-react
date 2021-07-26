import React from 'react';
// Components
import Card from './Card';
// Keys library
import { v4 as uuid } from "uuid";

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
        let newTotal = price + this.state.total;
        let newTotalEcoTax = (this.state.basket.length + 1) * 0.03;
        let newTotalTVA = (newTotal * 20) / 100;

        this.setState((prevState) => ({
            basket: [
              ...prevState.basket,
              {
                name: name,
                price: price,
              },
            ],
            total: newTotal,
            totalEcoTax: newTotalEcoTax,
            totalTVA: newTotalTVA,
            totalTTC: newTotal + newTotalEcoTax + newTotalTVA,
          }))
    }


	render() {
		return (
			<div>
                <h1>Pay</h1>

                <div className="text-end">
                        <p>SubTotal: {this.state.total}€</p>
                        <p>Total TVA : {this.state.totalTVA}€</p>
                        <p>Total Eco Tax : {this.state.totalEcoTax}€</p>
                        <p>Total TTC : {this.state.totalTTC}€</p>
                </div>

                <div>
                    {this.props.items.map((item) => {
                        return (
                        <li className="list-group-item border-0" key={uuid()}>
                            <Card onClick={() => {this.handleSelect(item.name, item.price);}} productName={item.name}/>
                        </li>
                        );
                    })}
                </div>
			</div>
		);
	}
}

export default Pay;