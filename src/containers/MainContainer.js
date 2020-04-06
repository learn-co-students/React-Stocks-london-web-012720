import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    portfolio: [],
    data: [],
    sort: true,
    filter: "All",
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <SearchBar
          toggleSort={this.toggleSort}
          sort={this.state.sort}
          changeFilter={this.changeFilter}
        />

        <div className="row">
          <div className="col-8">
            {this.state.data ? (
              <StockContainer
                data={this.sortStocks(this.filter())}
                handleClickBuyStock={this.handleClickBuyStock}
              />
            ) : null}
          </div>
          <div className="col-4">
            {this.state.portfolio ? (
              <PortfolioContainer
                data={this.state.portfolio}
                handleClickSellStock={this.handleClickSellStock}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  fetchData = () => {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };
  handleClickBuyStock = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.state.portfolio.push(stock);
      this.setState({ portfolio: this.state.portfolio });
    }
  };
  handleClickSellStock = (stock) => {
    console.log(stock);
    const index = this.state.portfolio.findIndex(
      (port) => port.id === stock.id
    );
    this.state.portfolio.splice(index, 1);
    this.setState({ portfolio: this.state.portfolio });
  };
  toggleSort = () => {
    this.setState({ sort: !this.state.sort });
  };
  sortStocks = (sortArr) => {
    const sortBy = this.state.sort ? "name" : "price";
    return sortArr.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  filter = () => {
    return this.state.filter === "All"
      ? this.state.data
      : this.state.data.filter((stock) => stock["type"] === this.state.filter);
  };
}

export default MainContainer;
