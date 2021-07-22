import React from 'react';
// CSS //
import '../components/Card.modules.css';

class Card extends React.Component {

    render() {
        return (
            <div className="flex">
                <div className="border m-4">
                    <img src={this.props.info.flag} alt="img flag" className="img-width"/>
                    <h4 className="m-3 text-center">Country : {this.props.info.name}</h4>
                    <h5 className="m-3 text-center">Capital : {this.props.info.capital}</h5>
                    <p className="bi bi-pin-fill text-center"> Region : {this.props.info.region}</p>
                    <p className="bi bi-people-fill text-center"> Population : {this.props.info.population}</p>
                </div>
            </div>
        )
    }
}

export default Card;