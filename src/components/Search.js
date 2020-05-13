import React, { useState } from 'react';

const Search = ({ getData }) => {
  const [search, setSearch] = useState('');

  const searchCities = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData(search.toUpperCase());
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search for your City'
          onChange={searchCities}
          value={search}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Search;
