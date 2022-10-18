import React from 'react'
import logo from '../img/svg/OpenInfraFoundation-logo-RGB-horiz-w.svg'
import Menu from "../content/navbar.json"
import LinkComponent from './LinkComponent'
import {doLogin, initLogOut} from 'openstack-uicore-foundation/lib/methods'
import PropTypes from "prop-types";
import URI from "urijs"

const NavbarV2 = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }

    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
    this.getBackURL = this.getBackURL.bind(this);
  }

  getBackURL() {
    let backUrl = window?.location?.href ?? '/a/profile';
    return URI.encode(backUrl);
  }

  onClickLogin(evt){
    evt.preventDefault();
    doLogin(this.getBackURL());
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
      <nav className="nav nav-v2">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <div className="container navbar-v2-container">
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
                      <li className="navbar-item-v2 navbar-item-v2-dropdown" key={index}>
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            { li.url &&
                                  <button aria-haspopup="true" aria-controls="dropdown-menu" className="button navbar-dropdown-btn-v2">
                                    <LinkComponent href={li.url}>
                                      <span>{li.title}</span>
                                    </LinkComponent>
                                  </button>
                            }
                            { !li.url &&                              
                                <button aria-haspopup="true" aria-controls="dropdown-menu" className="button navbar-dropdown-btn-v2">
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
                  <li className="navbar-item-v2 navbar-btn-v2" key={"login"}>
                    <LinkComponent href="#" className="bar-button bar-button-v2" onClick={this.onClickLogin}>LOGIN</LinkComponent>
                  </li>
                }
                { !isLoggedUser &&
                <li className="navbar-item-v2 navbar-btn-v2-primary" key={"join"}>
                  <LinkComponent href="/join/" className="bar-button bar-button-v2 bar-button-primary">JOIN</LinkComponent>
                </li>
                }
                { isLoggedUser &&
                <li className="navbar-item-v2 navbar-btn-v2" key={"logout"}>
                  <LinkComponent href="#" className="bar-button bar-button-v2" onClick={this.onClickLogout}>LOG OUT</LinkComponent>
                </li>
                }
                { isLoggedUser &&
                <li className="navbar-item-v2 navbar-btn-v2-primary" key={"profile"}>
                  <LinkComponent href="/a/profile" className="bar-button bar-button-v2 bar-button-primary">PROFILE</LinkComponent>
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

NavbarV2.propTypes = {
  isLoggedUser: PropTypes.bool.isRequired,
}

export default NavbarV2
