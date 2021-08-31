import React from 'react'
import logo from '../img/svg/OpenInfraFoundation-logo-RGB-horiz-w.svg'
import Menu from "../content/navbar.json"
import LinkComponent from './LinkComponent'
import {doLogin, initLogOut} from 'openstack-uicore-foundation/lib/methods'
import PropTypes from "prop-types";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }

    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogin(evt){
    evt.preventDefault();
    doLogin('/a/profile');
  }

  onClickLogout(evt){
    evt.preventDefault();
    initLogOut();
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    let {isLoggedUser} = this.props;
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-brand">
              <LinkComponent href="/" className="router-link-exact-active router-link-active">
                <div className="logo-containter">
                  <div className="logo-containter-child logo-containter-child-img">
                    <img src={logo} alt="OpenStack Foundation" />
                  </div>
                </div>
              </LinkComponent>
            </div>
            <a role="button" aria-label="menu" aria-expanded="false" className={`navbar-burger burger ${this.state.navBarActiveClass}`} onClick={() => this.toggleHamburger()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span></a>
            <div className={`nav-content menu-container ${this.state.navBarActiveClass}`}>
              <ul className="nav-menu menu-item">
                {Menu.nav.map((li, index) => {
                  if(li.display) {
                    return (
                      <li key={index}>
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            { li.url &&
                                  <button aria-haspopup="true" aria-controls="dropdown-menu" className="button">
                                    <LinkComponent href={li.url}>
                                      <span>{li.title}</span>
                                    </LinkComponent>
                                  </button>
                            }
                            { !li.url &&                              
                                <button aria-haspopup="true" aria-controls="dropdown-menu" className="button">
                                  <span>{li.title}</span>
                                </button>
                            }
                          </div>
                          <div id="dropdown-menu" role="menu" className="dropdown-menu">
                            <div className="dropdown-content">
                              <div className="nested-menu-image">
                                <img src={li.image} alt="" style={li.marginLeft ? { marginLeft: li.marginLeft } : {}} />
                              </div>
                              {li.links.map((link, index) => {
                                return (
                                  <div className="menuitemeffect" key={index}>
                                    <LinkComponent href={link.url} className="dropdown-item">
                                      <span>{link.text} </span>
                                    </LinkComponent>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  }
                })}
                { !isLoggedUser &&
                  <li key={"join"}>
                    <LinkComponent href="/join/" className="bar-button">Join</LinkComponent>
                  </li>
                }
                { !isLoggedUser &&
                <li key={"login"}>
                  <LinkComponent href="#" className="bar-button" onClick={this.onClickLogin}>Log in</LinkComponent>
                </li>
                }
                { isLoggedUser &&
                <li key={"profile"}>
                  <LinkComponent href="/a/profile" className="bar-button">Profile</LinkComponent>
                </li>
                }
                { isLoggedUser &&
                <li key={"logout"}>
                  <LinkComponent href="#" className="bar-button" onClick={this.onClickLogout}>Log out</LinkComponent>
                </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  isLoggedUser: PropTypes.bool.isRequired,
}

export default Navbar
