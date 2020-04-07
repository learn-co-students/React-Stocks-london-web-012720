import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {myStocks, removeStock} = this.props
    return (
      <div>
        <h2>My Portfolio</h2>
        {myStocks.map((stock, index) => {
          return <Stock stock={stock} key={index} removeStock={removeStock}/>
        })}
      </div>
    );
  }

}

export default PortfolioContainer;
