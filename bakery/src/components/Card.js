import React from 'react';

const source = "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/";

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            image: "./image/item.png",
        }
    }

    componentDidMount() {
    this.handleFetch("croissant")
    }

    handleFetch(productName) {
        fetch(`${source}${productName}.png`)
        .then(res => res.blob())
        .then(myBlob => {
            const objectURL = URL.createObjectURL(myBlob);
            console.log(objectURL)
            this.setState(prevState => {
                return {
                    ...prevState,
                    image: objectURL
                }
            })
        })
    }

    render() {
        return(
            <div>
                <button onClick={() => this.props.onClick(this.props.productName, this.props.price)}>
                    <img style={{width:"200px"}} src={this.state.image} alt="img"></img>
                </button>
            </div>
        );
    };
};

export default Card;