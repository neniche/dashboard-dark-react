import React from 'react';
import Card from './card'
import './top-card-list.css';

const cardListData = [
  {
    username: '@neniche_',
    followers: '1k',
    todayFollowers: -12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook'
  },
  {
    username: '@DenisseFalcon',
    followers: '2k',
    todayFollowers: 15,
    icon: 'images/icon-twitter.svg',
    name: 'twitter'
  },
  {
    username: '@denissse.falcon',
    followers: '1.5k',
    todayFollowers: 32,
    icon: 'images/icon-instagram.svg',
    name: 'instagram'
  },
  {
    username: '@neniche_12',
    followers: '100',
    todayFollowers: 50,
    icon: 'images/icon-youtube.svg',
    name: 'youtube'
  },
]
function TopCardList() {
    return(
        <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.username} {...cardData}/>)
          }
          {/* <article className="card facebook" >
            <p className="card-title">
                <img src="images/icon-facebook.svg" alt=""/>
                @neniche_
            </p>
            <p className="card-followers">
              <span className="card-followers-number">4k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt=""/>
              12 Today</p>
          </article>
          <article className="card twitter" >
            <p className="card-title">
                <img src="images/icon-twitter.svg" alt=""/>
                @neniche_
            </p>
            <p className="card-followers">
              <span className="card-followers-number">3k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt=""/>
              12 Today</p>
          </article>
          <article className="card instagram" >
              <p className="card-title">
                  <img src="images/icon-instagram.svg" alt=""/>
                  @neniche_
              </p>
              <p className="card-followers">
                <span className="card-followers-number">2k</span>
                <span className="card-followers-title">Followers</span>
              </p>
              <p className="card-today">
                <img src="images/icon-up.svg" alt=""/>
                12 Today</p>
          </article>
          <article className="card youtube" >
            <p className="card-title">
                <img src="images/icon-youtube.svg" alt=""/>
                @neniche_
            </p>
            <p className="card-followers">
              <span className="card-followers-number">2k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt=""/>
              12 Today</p>
          </article> */}
        </div>
      </div>
    </section>
    );

}

export default TopCardList;