import React from "react";

const Stock = ({ company, onClickHandle }) => (
  <div>
    <div className="card" onClick={(e) => onClickHandle(company)}>
      <div className="card-body">
        <h5 className="card-title">{company.name}</h5>
        <p className="card-text">
          {company.ticker}: {company.price}
        </p>
      </div>
    </div>
  </div>
);

export default Stock;
