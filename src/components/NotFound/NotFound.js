import Navbar from '../Navbar/headerperso'
import ThemeContext from '../../context/ThemeContext'
import Footerperso from '../Footer/footerperso'
import './NotFound.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="not-found-home-container">
              <div className="not-found-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-image"
                  alt="not found"
                />
                <h1 className="not-found-heading-light">Lost Your Way?</h1>
                <p className="not-found-para-light">
                  We cannot seem to find the page
                </p>
              </div>
              <Footerperso/>
            </div>
          ) : (
            <div className="not-found-home-container">

              <div className="not-found-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-image"
                  alt="not found"
                />
                <h1 className="not-found-heading-dark">Lost Your Way?</h1>
                <p className="not-found-para-dark">
                  We cannot seem to find the page
                </p>
                </div>
                <Footerperso/>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound