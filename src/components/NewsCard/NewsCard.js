import React from "react";
import "./NewsCard.css";
import CardButton from "../ui/CardButton/CardButton";
import iconAdd from "../../images/news-card/add-not-active.svg";
import iconAddHover from "../../images/news-card/add-hover.svg";
import iconAddMarked from "../../images/news-card/add-marked.svg";
import iconDel from "../../images/news-card/del-not-active.svg";
import iconDelHover from "../../images/news-card/del-hover.svg";
import { api } from "../../utils/MainApi";

function NewsCard({
  id,
  title,
  text,
  source,
  image,
  date,
  link,
  savedArticles,
  setSavedArticles,
  page,
  src,
  tooltip,
  keyword,
  loggedIn,
  openReg,
}) {
  const [cardButtonMouseEnter, setCardButtonMouseEmter] = React.useState(false);
  const [cardButtonImg, setCardButtonImg] = React.useState(
    page === "main" ? iconAdd : iconDel
  );
  const [isSave, setIsSave] = React.useState(false);

  const tooltipClassList = `${
    cardButtonMouseEnter
      ? "card__tooltip card__tooltip_active"
      : "card__tooltip "
  }`;

  function handleCardButtonMouseEnter() {
    setCardButtonMouseEmter(true);
    page !== "main"
      ? setCardButtonImg(iconDelHover)
      : cardButtonImg === iconAddMarked
      ? setCardButtonImg(iconAddMarked)
      : setCardButtonImg(iconAddHover);
  }

  function handleCardButtonMouseLeave() {
    setCardButtonMouseEmter(false);
    page !== "main"
      ? setCardButtonImg(iconDel)
      : isSave
      ? setCardButtonImg(iconAddMarked)
      : setCardButtonImg(iconAdd);
  }

  function handleDelete() {
    setCardButtonImg(iconDelHover);
    //console.log(savedArticles);
    api
      .deleteArticle(id)
      .then(() => {
        const newCards = savedArticles.filter((c) => c._id !== id);
        setSavedArticles(newCards);
      })
      .catch((err) => console.error(err));
  }

  function handleSave() {
    setCardButtonImg(iconAddMarked);
    const token = localStorage.getItem("token");
    api
      .saveArticle(token, { keyword, title, text, date, source, link, image })
      .then((newCard) => {
        //console.log(newCard.data);
        setSavedArticles([...savedArticles, newCard.data]);
        console.log("4 " + savedArticles);
        setIsSave(!isSave);
      })
      .catch((err) => console.error(err));
  }

  function handleCardButtonClick() {
    page !== "main" ? handleDelete() : loggedIn ? handleSave() : openReg();
  }

  return (
    <article className="card">
      <a className="card__link" href={link} target="_blank" rel="noreferrer">
        <img
          className="card__img"
          src={src}
          alt="изображение новостной статьи."
        />
        <div className="card__container">
          <p className="card__date">{date}</p>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{text}</p>
          <p className="card__source">{source}</p>
        </div>
      </a>
      <CardButton
        src={cardButtonImg}
        alt="добавить в избранное."
        onMouseEnter={handleCardButtonMouseEnter}
        onMouseLeave={handleCardButtonMouseLeave}
        onClick={handleCardButtonClick}
        disabled={loggedIn ? false : true}
      />
      <div className={tooltipClassList}>{tooltip}</div>
      {page !== "main" ? <div className="card__teg-name">{keyword}</div> : ""}
    </article>
  );
}

export default NewsCard;
