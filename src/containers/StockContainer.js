import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const {allStocks, addStock} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {allStocks.map((stock, index) => {
          return <Stock stock={stock} key={index} addStock={addStock}/>
        })}
      </div>
    );
  }

}

export default StockContainer;
