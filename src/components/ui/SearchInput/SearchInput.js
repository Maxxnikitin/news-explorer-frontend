import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      className='search-input'
      id='search-input'
      type='text'
      name='keywords'
      placeholder='Введите тему новости'
      onChange={props.onChange}
      required
    />
  );
}

export default SearchInput;
