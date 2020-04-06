import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.data.map((company, index) => (
          <Stock
            key={index}
            company={company}
            onClickHandle={this.props.handleClickBuyStock}
          />
        ))}
      </div>
    );
  }
}

export default StockContainer;
