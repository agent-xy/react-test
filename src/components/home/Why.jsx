import React from 'react'
import whyIcon from '../../img/why-icon.jpg';

function Why() {
  return (
    <div className='why-section'>
      <div className='why-hero-container'>
        <div className='japan-hero'>
          <p className='glich glich1' data-text="何かのテキスト">何かのテキスト</p>
        </div>
      </div>
      <div className='why-container'>
        <div className='why'>

          <div className='box why-box why-box-2'>
            <div className='why-box-head'>
              <img src={whyIcon} alt="" />
            </div>
            <div className='box-title'>
              <h2>Why see anime?</h2>
            </div>
            <div className='why-box-text'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sunt accusamus, illo impedit quod aperiam nulla voluptatum modi molestiae? Laboriosam aliquam consectetur explicabo tempora doloremque adipisci maxime, odio veritatis voluptatibus?</p>
            </div>
            <div className='btn-class'>
              <button className='why-btn'>Click me!</button>
            </div>
          </div>


          <div className='box why-box why-box-1'>
            <div className='why-box-head'>
              <img src={whyIcon} alt="" />
            </div>
            <div className='box-title'>
              <h2>Why see anime?</h2>
            </div>
            <div className='why-box-text'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat voluptates, consequuntur quasi quod minus placeat repudiandae accusantium ipsam aliquid dignissimos cum blanditiis quis aliquam ipsa quo aut libero ea.</p>
            </div>
            <div className='btn-class'>
              <button className='why-btn'>Click me!</button>
            </div>
          </div>


          <div className='box why-box why-box-2'>
            <div className='why-box-head'>
              <img src={whyIcon} alt="" />
            </div>
            <div className='box-title'>
              <h2>Why see anime?</h2>
            </div>
            <div className='why-box-text'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsam necessitatibus perferendis, animi sed aliquam in pariatur minus, dolorem amet quod, qui tempora dolorum veritatis tempore earum impedit. Consequuntur, vero.</p>
            </div>
            <div className='btn-class'>
              <button className='why-btn'>Click me!</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Why