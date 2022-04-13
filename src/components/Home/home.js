import Navbar from '../Navbar/headerperso'
import ThemeContext from '../../context/ThemeContext'
import './home.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme } = value
      const croissantPrice = 1.10
      const petitpainPrice = 1.00
      const olivesPrice = 1.90

      return (
        <>
          {!isDarkTheme ? (
            <div className="main-home-container">
              <Navbar />
              <div className="home-container-light">
                <img
                  src="https://cdn.pixabay.com/photo/2014/06/19/00/59/shopping-cart-371979_960_720.png"
                  className="home-image"
                  alt="home"
                />
                  <div className="home-heading-light">
                  <h1>Panier</h1>
                    <ul>
                        <li>Croissant: {croissantPrice}€</li>
                        <li>Petit-pain: {petitpainPrice}€</li>
                        <li>Olives: {olivesPrice}€</li>
                    </ul>
                    Total: {croissantPrice + petitpainPrice + olivesPrice}€
                    </div>
                </div>
            </div>
          ) : (
            <div className="main-home-container">
                <Navbar />
                <div className="home-container-dark">
                  <img
                  src="https://cdn.pixabay.com/photo/2014/06/19/00/59/shopping-cart-371979_960_720.png"
                  className="home-image"
                  alt="home"
                />
                  <div className="home-heading-dark">
                  <h1>Panier</h1>
                    <ul>
                        <li>Croissant: {croissantPrice}€</li>
                        <li>Petit-pain: {petitpainPrice}€</li>
                        <li>Olives: {olivesPrice}€</li>
                    </ul>
                    Total: {croissantPrice + petitpainPrice + olivesPrice}€
                    </div>
                </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home