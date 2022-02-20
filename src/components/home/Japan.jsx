import React from 'react'
import Anime1 from '../../img/anime-icon1.jpg';
import Anime3 from '../../img/anime-icon3.jpg';
import Anime4 from '../../img/anime-icon4.jpg';
import Anime6 from '../../img/anime-icon6.jpg';

function Japan() {

  return (
    <div className='japan-section'>
      <div className='japan-hero-container'>
        <div className='japan-hero'>
          <p className='glich glich1' data-text="何かのテキスト">何かのテキスト</p>
        </div>
      </div>
      <div className='row japan-container'>
        <div className='row box item3'>
          <div className='background-text'>
            <p>何かのテキスト</p>
          </div>
          <div className='japan-content'>
            <div className='box-title'>
              <h2>Best Anime</h2>
            </div>
            <div className='row'>
              <div className='best-anime'>
                <img className='anime-logo' src={Anime1}/>
                <h3>Sono Bisque Doll wa Koi</h3>
              </div>
              <div className='best-anime'>
                <img className='anime-logo' src={Anime6}/>
                <h3>Hori-san to Miyamura</h3>
              </div>
              <div className='best-anime'>
                <img className='anime-logo' src={Anime3}/>
                <h3>Attack on titan</h3>
              </div>
              <div className='best-anime'>
                <img className='anime-logo' src={Anime4}/>
                <h3>Tensai Ouji no Akaji</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Japan