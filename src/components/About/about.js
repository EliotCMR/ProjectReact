import Navbar from '../Navbar/headerperso'
import ThemeContext from '../../context/ThemeContext'
import './about.css'
import React from 'react'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme } = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="about-home-container">
              <Navbar />
              <div className="about-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="about-image"
                  alt="about"
                />
                <div className="about-heading-light"></div>
                <h1>CV</h1>
              </div>
            </div>
          ) : (
            <div className="about-home-container">
              <Navbar />
              <div className="about-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="about-image"
                  alt="about"
                />
                <h1 className="about-heading-dark">CV</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)



export default About/* (MyComponent) */