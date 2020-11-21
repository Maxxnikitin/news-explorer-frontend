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
  setSaved,
  card,
}) {
  const [cardButtonMouseEnter, setCardButtonMouseEnter] = React.useState(false);
  const [cardButtonImg, setCardButtonImg] = React.useState(
    page === "main" ? iconAdd : iconDel
  );
  const [isSave, setIsSave] = React.useState(false);
  const [cardId, setCardId] = React.useState("");
  function addCardId(x) {
    setCardId(x);
  }

  const tooltipClassList = `${
    cardButtonMouseEnter
      ? "card__tooltip card__tooltip_active"
      : "card__tooltip "
  }`;

  function handleCardButtonMouseEnter() {
    setCardButtonMouseEnter(true);
    page !== "main"
      ? setCardButtonImg(iconDelHover)
      : cardButtonImg === iconAddMarked
      ? setCardButtonImg(iconAddMarked)
      : setCardButtonImg(iconAddHover);
  }

  function handleCardButtonMouseLeave() {
    setCardButtonMouseEnter(false);
    page !== "main"
      ? setCardButtonImg(iconDel)
      : cardButtonImg === iconAddMarked
      ? setCardButtonImg(iconAddMarked)
      : setCardButtonImg(iconAdd);
  }

  function handleDelete(article) {
    setCardButtonImg(iconDelHover);
    const token = localStorage.getItem("token");
    api
      .deleteArticle(token, article._id)
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
        addCardId(newCard.data._id);
        setSavedArticles([...savedArticles, newCard.data]);
        setSaved((myNews) => {
          localStorage.setItem(
            "saved",
            JSON.stringify([...myNews, newCard.data.title])
          );
          return [...myNews, newCard.data.title];
        });
        setIsSave(true);
      })
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    const saveArticle = JSON.parse(localStorage.getItem("saved"));

    if (!saveArticle) return;
    if (saveArticle.find((item) => item === title)) {
      page !== "main"
        ? setCardButtonImg(iconDel)
        : setCardButtonImg(iconAddMarked);
    }
  }, []);

  function handleCardButtonClick() {
    page !== "main"
      ? handleDelete(card)
      : loggedIn
      ? cardButtonImg === iconAddMarked
        ? handleDelete(card)
        : handleSave()
      : openReg();
  }

  return (
    <article className="card" id={cardId}>
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
