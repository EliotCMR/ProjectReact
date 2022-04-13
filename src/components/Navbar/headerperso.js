import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './headerperso.css'
import image from '../sid2.png'

console.log(image);

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              {/* <img src={image} alt="sid" /> */}
              <ul className="middle-items">
                <li className="list-item">
                  <Link to="/" className="link-light">
                    Panier
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-light">
                    CV
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <ul className="middle-items">
                <li className="list-item">
                  <Link to="/" className="link-dark">
                    Panier
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-dark">
                    CV
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
