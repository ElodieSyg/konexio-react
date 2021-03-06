import React from 'react';
// CSS //
import '../components/Add.modules.css'

class Add extends React.Component {
    constructor() {
        super();

        this.state = {
            productName: "",
            price: 1,
        };
    }

    updateProductName = (e) => {
        this.setState((prevState) => {
			return {
				...prevState,
				productName: e.target.value,
			};
		});
	};

    updatePrice = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				price: parseInt(e.target.value),
			};
		});
	};

    handleAddItem = () => {
		this.props.addItem(this.state.productName, this.state.price);
	};

    render() {
        return(
            <div className="container d-flex flex-column bd-highlight mb-3">
                <div className="input-group">
                        <input type="text" className="form-control" onChange={this.updateProductName}/>
                        <button
                        type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => this.props.addItem(this.state.productName, this.state.price)}>Add</button>
                </div>

                    <label for="price" className="p-2 bd-highligh">{this.state.price}€</label>
                    
                    <input
                    id="price"
                    className="p-2 bd-highligh"
                    type="range"
                    onChange={this.updatePrice}
                    value={this.state.price}
                    min="0"
                    max="10" />
            </div>
        )
    }
}

export default Add;