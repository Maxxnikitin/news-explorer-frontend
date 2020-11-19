import React from "react";
import "./SavedNews.css";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews(props) {
  return (
    <main className="saved-news">
      <Header
        activeClass="nav__link_active"
        onClick={props.onClick}
        isLogged={props.isLogged}
        menuIsOpen={props.menuIsOpen}
        mobileMenuClick={props.mobileMenuClick}
        signOut={props.signOut}
      />
      <SavedNewsHeader />
      <NewsCardList
        tooltip="Убрать из сохранённых"
        savedArticles={props.savedArticles}
        setSavedArticles={props.setSavedArticles}
      />
    </main>
  );
}

export default SavedNews;
