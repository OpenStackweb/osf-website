import React from 'react'
import logo from '../img/svg/OpenInfraFoundation-logo-RGB-horiz-w.svg'
import Menu from "../content/navbar.json"
import LinkComponent from './LinkComponent'
import {doLogin, initLogOut} from 'openstack-uicore-foundation/lib/security/methods'
import PropTypes from "prop-types";
import URI from "urijs"

const LINKS_PER_COLUMN = 4;

const chunkLinks = (links) => {
  const columns = [];
  for (let i = 0; i < links.length; i += LINKS_PER_COLUMN) {
    columns.push(links.slice(i, i + LINKS_PER_COLUMN));
  }
  return columns;
};

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      expandedIndex: null
    }

    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
    this.getBackURL = this.getBackURL.bind(this);
  }

  isMobile() {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  }

  onClickDropdownTrigger = (evt, index) => {
    if (!this.isMobile()) return;
    evt.preventDefault();
    this.setState((prevState) => ({
      expandedIndex: prevState.expandedIndex === index ? null : index
    }));
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
                    const isExpanded = this.state.expandedIndex === index;
                    return (
                      <li key={index}>
                        <div className={`dropdown is-hoverable ${isExpanded ? 'is-active' : ''}`}>
                          <div className="dropdown-trigger">
                            { li.url &&
                                  <button aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded={isExpanded} className="button" onClick={(evt) => this.onClickDropdownTrigger(evt, index)}>
                                    <LinkComponent href={li.url}>
                                      <span>{li.title}</span>
                                    </LinkComponent>
                                    <span className="navbar-dropdown-arrow" aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
                                  </button>
                            }
                            { !li.url &&
                                <button aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded={isExpanded} className="button" onClick={(evt) => this.onClickDropdownTrigger(evt, index)}>
                                  <span>{li.title}</span>
                                  <span className="navbar-dropdown-arrow" aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
                                </button>
                            }
                          </div>
                          <div id="dropdown-menu" role="menu" className="dropdown-menu">
                            <div className="dropdown-content">
                              {chunkLinks(li.links).map((column, colIndex) => (
                                <div className="dropdown-column" key={colIndex}>
                                  {column.map((link, index) => (
                                    <div className="menuitemeffect" key={index}>
                                      <LinkComponent href={link.url} className="dropdown-item">
                                        <span>{link.text} </span>
                                      </LinkComponent>
                                    </div>
                                  ))}
                                </div>
                              ))}
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
