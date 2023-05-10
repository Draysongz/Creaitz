import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="logo"><span className='c'>C</span>reaitz</div>
      <ul className='navHolder'>
        <li className="navlist"><a href="#" className="home">Home</a></li>
        <li className="navlist"><a href="#" className="about">About</a></li>
        <li className="navlist"><a href="#" className="Courses">Courses</a></li>
        <li className="navlist"><a href="#" className="faq">Faq</a></li>
        <button className="action">Enroll now</button>
      </ul>
    </div>
  )
}

export default Nav
  