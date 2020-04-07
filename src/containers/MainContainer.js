import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks:[],
    myPortfolio: [],
    filter: "None",
    sort: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addPortfolio = (stock) => {
    this.setState({
      myPortfolio: [...this.state.myPortfolio, stock]
    })
  }

  removePortfolio = (clicked) => {
    this.setState({
      myPortfolio: this.state.myPortfolio.filter(stock => stock !== clicked)
    })
  }

  sortStocks = () => {
    if (this.state.sort === true) {
      return this.filteredStocks().sort((a, b) => a["name"] < b["name"] ? 1 : -1)
    } else {
      return this.filteredStocks().sort((a, b) => a["price"] < b["price"] ? 1 : -1)
    }
  }

  setFilterType = (type) => {
    this.setState({
      filter: type
    })
  }

  changeSort = () => {
    this.setState({
      sort: !this.state.sort
    })
  }

  filteredStocks = () => {
    if (this.state.filter === "None") {
      return this.state.stocks
    } else {
    return this.state.stocks.filter(s => s.type === this.state.filter)
    }
  }

  render() {
    return (
      <div>
        <SearchBar 
        filter={this.state.filter} 
        setFilterType={this.setFilterType}
        sort={this.state.sort}
        changeSort={this.changeSort}
        />

          <div className="row">
            <div className="col-8">
              <StockContainer 
              allStocks={ this.sortStocks() }
              addStock={this.addPortfolio}
              />
            </div>
            <div className="col-4">

              <PortfolioContainer
              myStocks={this.state.myPortfolio}
              removeStock={this.removePortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
