import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import CardListButton from '../ui/CardListButton/CardListButton';
import img1 from '../../images/news-card/card-1.jpg'
import img2 from '../../images/news-card/card-2.jpg'
import img3 from '../../images/news-card/card-3.jpg'

function NewsCardList(props) {
  return (
    <section className='news-card-list'>
      {(props.page === 'main') ? <h2 className='news-card-list__title'>Результаты поиска</h2> : ''}
      <div className='news-card-list__container'>
        <NewsCard src={img1} date='2 августа, 2019' title='Национальное достояние – парки' text='В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.' source='Дзен' tooltip={props.tooltip} page={props.page} />
        <NewsCard src={img2} date='2 августа, 2019' title='Лесные огоньки: история одной фотографии' text='Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.' source='Афиша' tooltip={props.tooltip} page={props.page} />
        <NewsCard src={img3} date='2 августа, 2019' title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка' text='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...' source='Дзен' tooltip={props.tooltip} page={props.page} />
      </div>
      {(props.page === 'main') ? <CardListButton text='Показать ещё' /> : ''}
    </section>
  );
}

export default NewsCardList;
