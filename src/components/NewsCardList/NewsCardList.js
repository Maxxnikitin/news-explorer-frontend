import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import CardListButton from "../ui/CardListButton/CardListButton";
import { toArticleDate } from "../../utils/Date";

function NewsCardList(props) {
  const [countArticle, setCountArticle] = React.useState(3);

  function handleAddArticles() {
    setCountArticle(countArticle + 3);
  }

  return (
    <section className="news-card-list">
      {props.page === "main" ? (
        <h2 className="news-card-list__title">Результаты поиска</h2>
      ) : (
        ""
      )}
      <div className="news-card-list__container">
        {props.page !== "main" ? (
          <>
            {props.savedArticles.map((item) => {
              return (
                <NewsCard
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  author={item.name}
                  image={item.image}
                  src={item.image}
                  link={item.url}
                  key={Math.random() * 10000000}
                  tooltip={props.tooltip}
                  id={item._id}
                  isSaved={true}
                  keyword={item.keyword}
                  page={props.page}
                  savedArticles={props.savedArticles}
                  setSavedArticles={props.setSavedArticles}
                />
              );
            })}
          </>
        ) : (
          <>
            {props.articles.slice(0, countArticle).map((item) => {
              return (
                <NewsCard
                  src={item.urlToImage}
                  link={item.url}
                  title={item.title}
                  text={item.description}
                  source={item.source.name}
                  key={Math.random() * 10000000}
                  date={toArticleDate}
                  page={props.page}
                  image={item.urlToImage}
                  keyword={props.keyword}
                  tooltip={props.tooltip}
                  loggedIn={props.loggedIn}
                  openReg={props.openReg}
                />
              );
            })}
          </>
        )}
      </div>
      {props.page === "main" && countArticle < props.articles.length ? (
        <CardListButton text="Показать ещё" onClick={handleAddArticles} />
      ) : (
        ""
      )}
    </section>
  );
}

export default NewsCardList;
