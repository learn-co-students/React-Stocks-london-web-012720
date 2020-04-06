import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.data.map((company, index) => (
          <Stock
            key={index}
            company={company}
            onClickHandle={this.props.handleClickSellStock}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
