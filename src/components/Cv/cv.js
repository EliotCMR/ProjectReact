import Navbar from '../Navbar/headerperso'
import ThemeContext from '../../context/ThemeContext'
import { useEffect, useState } from 'react'
import '../Home/home.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.exemple.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.state({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

const Cv = () => (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme } = value
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      useEffect(() => {
        fetch("https://api.example.com/items")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.items);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )

      }, [])
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
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
                  <div className="home-heading-light"></div>
                  <h1>CV</h1>
                  <ul>
                    {items.map(item => (
                      <li key={item.name}>
                        {item.name} {item.price}
                      </li>
                    ))
                    }
                  </ul>
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
                  <div className="home-heading-dark"></div>
                  <h1>CV</h1>
                  <ul>
                    {items.map(item => (
                      <li key={item.name}>
                        {item.name} {item.price}
                      </li>
                    ))
                    }
                  </ul>
                </div>
              </div>
            )}
          </>
        )
      }
    }
    }</ThemeContext.Consumer>
)

export default MyComponent(Cv)