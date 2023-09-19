import React from 'react'
import './projects.css'
import tesla from '../../assets/tesla.png'
import pizza from '../../assets/pizza.png'
import git from '../../assets/github.png'
import link from '../../assets/link.png'

export const Projects = () => {
  return (
    <>
    <div className="projectsTitle" id='projects'>Some of my work.</div>
    <div className='projects'>
      <div className="project">
        <div className="left">
          <img src={tesla} className='projectImage'/>

        </div>
        <div className="right">
          <div className="projectTitle">Tesla clone</div>
          <div className="projectDescription">Using react for routing to diffrent links for diffrent cars and also to make the ui almost like the original site </div>
          <div className="links">
            <a href="https://hakeemkun.github.io/tesla/" target="_blank"><img src={link} /></a>    
            <a href="https://github.com/Hakeemkun/tesla" target="_blank"><img src={git} /></a> 
          </div> 
        </div>
      </div>
      <div className="project">
        <div className="left">
          <img src={pizza}/>
        </div>
        <div className="right">
          <div className="projectTitle">Pizza shop</div>
          <div className="projectDescription">Using react for routing and storing api data to be displayed in the cart page also adding a search bar to find pizzas </div>
          <div className="links">
            <a href="https://hakeemkun.github.io/pizza-shop/" target="_blank"><img src={link} /></a>    
            <a href="https://github.com/Hakeemkun/pizza-shop" target="_blank"><img src={git} /></a> 
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}
