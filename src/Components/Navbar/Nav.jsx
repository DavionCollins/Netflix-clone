import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Nav = () => {
  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav__dark')
      }
      else{
        navRef.current.classList.remove('nav__dark')
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar__left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar__right">
          <img src={searchIcon} alt="" className='icons'/>
          <p>Children</p>
          <img src={bellIcon} alt="" className='icons'/>
          <div className="navbar__profile">
          <img src={profileImg} alt="" className='profile'/>
          <img src={dropdownIcon} alt="" />
          <div className="dropdown"><p onClick={() => {logout()}}>Sign out</p></div>
          </div>
        </div>

    </div>
  )
}

export default Nav
