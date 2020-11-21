import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NotFoundCard from "../NotFoundCard/NotFoundCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import { newsApi } from "../../utils/NewsApi";

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    newsApi
      .getAllArticles(props.keyword)
      .then((data) => {
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("search", props.keyword);
        props.setArticles(data.articles);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="main">
      <Header
        theme="white"
        activeClass="nav__link_active-white"
        onClick={props.onClick}
        menuIsOpen={props.menuIsOpen}
        mobileMenuClick={props.mobileMenuClick}
        isLogged={props.isLogged}
        signOut={props.signOut}
      />
      <SearchForm handleSearch={handleSearch} setSearch={props.setKeyword} />
      {isLoading ? <Preloader /> : ""}
      {!Array.isArray(props.articles) || props.articles.length === 0 ? (
        ""
      ) : (
        <NewsCardList
          page="main"
          tooltip={
            props.loggedIn
              ? "Нажмите, чтобы сохранить статью"
              : "Войдите, чтобы сохранять статьи"
          }
          articles={props.articles}
          keyword={props.keyword}
          loggedIn={props.loggedIn}
          openReg={props.openReg}
          savedArticles={props.savedArticles}
          setSavedArticles={props.setSavedArticles}
        />
      )}
      {Array.isArray(props.articles) ? (
        props.articles.length === 0 ? (
          <NotFoundCard />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <About />
    </main>
  );
}

export default Main;
