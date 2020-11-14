import React from 'react';
import './SearchInput.css';

function SearchInput() {
  return (
    <input
      className='search-input'
      id='search-input'
      type='text'
      name='keywords'
      placeholder='Введите тему новости'
      required
    />
  );
}

export default SearchInput;
