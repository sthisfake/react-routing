import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    this.props.history.push("/")  // still the backbutton works
    // this.props.history.replace("/") //the backbutton wont work use places like login 
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
