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
    this.handleFetch("item")
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
                <button>
                    <img src={this.state.image} alt="item"></img>
                </button>
            </div>
        );
    };
};

export default Card;