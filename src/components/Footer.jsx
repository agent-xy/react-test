import React from 'react'
import logo from '../img/logo50.png';

function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <img src={logo} alt='' className='footer-logo'/>
            <p>何かのテキスト</p>
          </div>
          <div className='footer-text'>
            <div className='foot1'>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
            </div>
            <div className='foot2'>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
            </div>
            <div className='foot2'>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Home</a></p>
            </div>
          </div>
        </div>
        
        <div className='footer-background-text'>
          <p>何かのテキスト</p>
        </div>
      </div>
    </div>
  )
}

export default Footer