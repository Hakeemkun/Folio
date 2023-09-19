import React from 'react'

import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Skills } from './components/skills/skills'
import { Services } from './components/services/services'
import { Projects } from './components/projects/projects'
import { Contact } from './components/contact/contact'

export const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}
