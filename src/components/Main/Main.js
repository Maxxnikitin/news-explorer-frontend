import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import { newsApi } from '../../utils/NewsApi';

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  const handleSearch = () => {
    setIsLoading(true);
    newsApi.getAllArticles(props.search)
      .then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('search', props.search);
        setArticles(data.articles);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('articles')));
  }, []);

  return (
    <main className='main'>
      <Header theme='white' activeClass='nav__link_active-white' onClick={props.onClick} menuIsOpen={props.menuIsOpen} mobileMenuClick={props.mobileMenuClick} isLogged={props.isLogged} signOut={props.signOut} loggedName={props.loggedName} />
      <SearchForm handleSearch={handleSearch} setSearch={props.setKeyword} />
      {isLoading ? <Preloader /> : ''}
      {(!Array.isArray(articles)) || articles.length === 0 ? '' :
        <NewsCardList
          page='main'
          tooltip={props.loggedIn ? 'Нажмите, чтобы сохранить статью' : 'Войдите, чтобы сохранять статьи'}
          articles={articles}
          setArticles={setArticles}
          keyword={props.keyword}
          loggedIn={props.loggedIn}
        />
      }
      {Array.isArray(articles) ? articles.length === 0 ? <NotFoundCard /> : '' : ''}
      <About />
    </main>
  );
}

export default Main;
