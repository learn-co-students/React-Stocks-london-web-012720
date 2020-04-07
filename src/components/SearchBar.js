import React from 'react';

const SearchBar = ({filter, setFilterType, changeSort, sort}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="name" name ="sort" checked={sort} onChange={changeSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" checked={!sort} onChange={changeSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterType(e.target.value)} value={filter}>
          <option value="None"> - None - </option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
