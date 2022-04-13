import Navbar from '../Navbar/headerperso'
import ThemeContext from '../../context/ThemeContext'
import './panier.css'

const Panier = () => (
  <ThemeContext.Consumer>
    {value => {
            const { isDarkTheme } = value
            const croissantPrice = 1.10
            const petitpainPrice = 1.00
            const olivesPrice = 1.90
      return (
        <>
              {!isDarkTheme ? (

            <div className="panier-home-container">
              <Navbar />
              <div className="panier-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/panier-light-img.png"
                  className="panier-image"
                  alt="panier"
                />
                <h1 className="panier-heading-light">Panier</h1>
              </div>
            </div>
          ) : (
            <div className="panier-home-container">
              <Navbar />
              <div className="panier-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/panier-dark-img.png"
                  className="panier-image"
                  alt="panier"
                />
                <h1 className="panier-heading-dark">Panier</h1>
              </div>
            </div>
              )}
              <div>
            <h2>Panier</h2>
            <ul>
                <li>Croissant: {croissantPrice}€</li>
                <li>Petit-pain: {petitpainPrice}€</li>
                <li>Olives: {olivesPrice}€</li>
            </ul>
                Total: {croissantPrice + petitpainPrice + olivesPrice}€
        </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Panier
