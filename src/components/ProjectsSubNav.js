import React, {useState} from 'react'
import LinkComponent from "./LinkComponent";

const ProjectsSubNav = ({active}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (navItemName) => {
    return active === navItemName ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getMenuList = (id) => (
    <ul id={id} className="links-list">
      <li>
        <LinkComponent href="/projects" className={`link ${isActive('projects')}`}>
          All Projects
        </LinkComponent>
      </li>
      <li>
        <LinkComponent href="/projects/hosting" className={`link ${isActive('hosting')}`}>
          Hosting
        </LinkComponent>
      </li>
    </ul>
  );

  return (
    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          <LinkComponent href="/projects" >Projects</LinkComponent>
        </div>

        {getMenuList('links-list')}

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{active}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>
      </div>

      {isOpen &&
      <div className="subnav-dropdown">
        {getMenuList('links-list-mobile')}
      </div>
      }

    </nav>
  )};

export default ProjectsSubNav