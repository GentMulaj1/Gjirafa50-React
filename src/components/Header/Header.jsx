import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.svg'
import Ad from '../Ad/Ad'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <>
    <Ad/>
    
      <div className='Header'>
        <div className="wrapper inside-header">
          <div className="left-h">
            <img src={Logo} alt="" />
          </div>

          <div className="mid-h">
            <form action="" className='form-mid-h'>
              <input type="text" id="kerko" placeholder='Kërko produkte' autoComplete='off' />
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          
          <div className="right-h">
            <a href="#">Kyçu</a>
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>

      <Nav/>
    </>
  )
}

export default Header
