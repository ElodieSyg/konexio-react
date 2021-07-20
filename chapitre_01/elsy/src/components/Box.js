import React from "react";


class Box extends React.Component {


    render() {
        if(this.props.icon !== "local_drink") {
            return (
                <div className="box col-sm-3 col-6">
                    <span style={{color: this.props.color, fontSize: 100}} className="material-icons">
                    {this.props.icon}
                    </span> 
                    <p>{this.props.value} {this.props.unit}</p>
                    <input type="range" value={this.props.value} onChange={this.props.onChange} name={this.props.name} calculate={this.props.calculate} id="rangeBtn" name="rangeBtn" min={this.props.min} max={this.props.max}/>

                </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6">
                    <span style={{color: this.props.color, fontSize: 100}} className="material-icons">
                    {this.props.icon}
                    </span> 
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            )
        }


    }
}

export default Box