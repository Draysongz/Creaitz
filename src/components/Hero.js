import React from 'react'
import './Hero.css'
import hero from './Utilitiess/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <h2 className="caption">Unlocking Your <br /> Marketing Potential</h2>
        <p className="description">Welcome to our Digital Marketing academy! <br />
        We are dedicated to helping you master the skills <br />
        you need to succeed int world of online marketing.
        </p>
      </div>

      <div className="right">
        {/* <img src={hero} alt="profile" className="heroImg" width='350' /> */}
      </div>
      </div>
  )
 }


export default Hero
