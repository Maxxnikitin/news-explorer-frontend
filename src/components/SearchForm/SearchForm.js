import React from 'react';
import './SearchForm.css';
import SearchInput from '../ui/SearchInput/SearchInput';
import SearchButton from '../ui/SearchButton/SearchButton';

function SearchForm() {
  return (
    <section className='search-form'>
      <h1 className='search-form__title'>Что творится в мире?</h1>
      <p className='search-form__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className='search-form__form' name='search-form'>
        <SearchInput />
        <SearchButton />
      </form>
    </section>
  );
}

export default SearchForm;
