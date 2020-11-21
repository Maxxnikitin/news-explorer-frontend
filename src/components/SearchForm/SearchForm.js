import React from 'react';
import './SearchForm.css';
import SearchInput from '../ui/SearchInput/SearchInput';
import SearchButton from '../ui/SearchButton/SearchButton';

function SearchForm(props) {
  function handleSearchInput(e) {
    props.setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch();
  };

  return (
    <section className='search-form'>
      <h1 className='search-form__title'>Что творится в мире?</h1>
      <p className='search-form__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className='search-form__form' name='search-form' noValidate>
        <SearchInput onChange={handleSearchInput} />
        <span className='form__input-error form__input-error_place_search' id='search-error'></span>
        <SearchButton onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SearchForm;
