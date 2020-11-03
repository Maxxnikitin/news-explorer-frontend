import React from 'react';
import './About.css';
import photo from '../../images/about/me.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__photo' src={photo} alt='фото автора.' />
      <div className='about__container'>
        <h2 className='about__title'>Об авторе</h2>
        <p className='about__text'>Меня зовут Максим Никитин, я занимаюсь веб-разработкой. В данном проекте я реализовал бэкенд на Node.js и фронтент на React.js. Всему этому я научился в Яндекс Практикуме.</p>
        <p className='about__text'>Владею адаптивной, семантической вёрсткой, нативным js, ООП, REST Api, фреймворками React.js и Vue.js(Nuxt.js), Node.js и фреймворком Express, NoSQL базой данных MongoDB.</p>
      </div>
    </section>
  );
}

export default About;
