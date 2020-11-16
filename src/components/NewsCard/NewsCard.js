import React from 'react';
import './NewsCard.css';
import CardButton from '../ui/CardButton/CardButton';
import iconAdd from '../../images/news-card/add-not-active.svg'
import iconAddHover from '../../images/news-card/add-hover.svg'
import iconAddMarked from '../../images/news-card/add-marked.svg'
import iconDel from '../../images/news-card/del-not-active.svg'
import iconDelHover from '../../images/news-card/del-hover.svg'
import { api } from '../../utils/MainApi';

function NewsCard(props) {
  const [cardButtonMouseEnter, setCardButtonMouseEmter] = React.useState(false);
  const [cardButtonImg, setCardButtonImg] = React.useState((props.page === 'main') ? iconAdd : iconDel);

  const tooltipClassList = `${cardButtonMouseEnter ? 'card__tooltip card__tooltip_active' : 'card__tooltip '}`

  function handleCardButtonMouseEnter() {
    setCardButtonMouseEmter(true);
    props.page !== 'main' ? setCardButtonImg(iconDelHover) : cardButtonImg === iconAddMarked ? setCardButtonImg(iconAddMarked) : setCardButtonImg(iconAddHover);
  }

  function handleCardButtonMouseLeave() {
    setCardButtonMouseEmter(false);
    props.page !== 'main' ? setCardButtonImg(iconDel) : cardButtonImg === iconAddMarked ? setCardButtonImg(iconAddMarked) : setCardButtonImg(iconAdd);
  }

  function handleDelete() {
    setCardButtonImg(iconDelHover);
    api.deleteArticle(props.id)
      .catch((err) => console.error(err));
    api.getAllArticles()
      .then((data) => props.setSavedArticles(data))
      .catch((err) => console.error(err));
  };

  function handleSave() {
    setCardButtonImg(iconAddMarked)
    api.saveArticle(props.keyword, props.image, props.date, props.title, props.text, props.source, props.link)
      .catch(err => console.error(err));
  }

  function handleCardButtonClick() {
    props.page !== 'main' ?
    handleDelete() : handleSave()
  }

  return (
    <article className='card'>
      <a className='card__link' href={props.link}>
        <img className='card__img' src={props.src} alt='изображение новостной статьи.' />
        <div className='card__container'>
          <p className='card__date'>{props.date}</p>
          <h3 className='card__title'>{props.title}</h3>
          <p className='card__text'>{props.text}</p>
          <p className='card__source'>{props.source}</p>
        </div>
      </a>
      <CardButton src={cardButtonImg} alt='добавить в избранное.' onMouseEnter={handleCardButtonMouseEnter} onMouseLeave={handleCardButtonMouseLeave} onClick={handleCardButtonClick} />
      <div className={tooltipClassList}>{props.tooltip}</div>
      {(props.page !== 'main') ?
      <div className='card__teg-name'>{props.tag}</div>
      : ''}
    </article>
  );
}

export default NewsCard;
