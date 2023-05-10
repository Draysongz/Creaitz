import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Courses from './components/Courses.js'

const App = () => {

  return (
    <div className='app'>
      <Nav/>
      <Hero/>
      <Courses/>
    </div>
  )
}

export default App
