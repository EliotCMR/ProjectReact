import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{ isDarkTheme, toggleTheme: this.toggleTheme }}
      >
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route component={NotFound} /> */}
          </BrowserRouter>
      </ThemeContext.Provider>

    );
  }
}

export default App