import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    isToggle: false,
  }

  onClickShowMenu = () => {
    this.setState({isToggle: true})
  }

  onClickCloseMenu = () => {
    this.setState({isToggle: false})
  }

  render() {
    const {isToggle} = this.state

    return (
      <div>
        <nav className="header-container">
          <div className="header-card">
            <div className="log-card">
              <Link to="/">
                <img
                  alt="covid-logo"
                  className="header-logo"
                  src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624021089/COVID19INDIA_tkirsu.png"
                />
              </Link>
            </div>
            <div className="names-container">
              <Link className="home-link" to="/">
                Home
              </Link>
              <Link className="about-link" to="/about">
                About
              </Link>
            </div>
            <div className="menu-container">
              <button
                type="button"
                className="menu-button"
                onClick={this.onClickShowMenu}
              >
                <img
                  alt="menu-logo"
                  className="menu-icon"
                  src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624344349/Screenshot_129_cukxno.png"
                />
              </button>
            </div>
          </div>
        </nav>
        <div>
          {isToggle ? (
            <div className="menu-card">
              <div className="menu-section">
                <div className="">
                  <Link className="home-link menu-link1" to="/">
                    Home
                  </Link>
                  <Link className="about-link menu-link1" to="/about">
                    About
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="menu-button2"
                    onClick={this.onClickCloseMenu}
                  >
                    <img
                      alt="cross"
                      className="cross-logo"
                      src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624343900/Screenshot_128_zjdgh5.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Header
