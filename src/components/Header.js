import React from 'react'
import LinkComponent from './LinkComponent';

const Header = class extends React.Component {
  render() {
    let { upperTitle, title, subTitle, buttons, isHome, link } = this.props;

    return (     
      <main className="main">
        <section className="hero-main is-primary hero">
          <div className="hero-body">
            <div className="container">
              {isHome ? 
              <div className="hero-content">
                {upperTitle && <div className="hero-subhead">{upperTitle}</div> }                
                <h3 className="hero-title">{title}</h3> 
                <div className="hero-entry">
                  {subTitle}
                </div>
                <div className="hero-actions">
                  {buttons && buttons.map((button, index) => {
                    return (
                      <React.Fragment key={index}>
                        <LinkComponent href={button.link} className={`button ${index % 2 === 0 ? 'button-white': 'button-red'}`}>
                          <span>{button.text}</span>
                        </LinkComponent>                        
                        &nbsp;
                      </React.Fragment>
                    )
                  })}                  
                </div>                
              </div>
              :
              <div className="hero-project-content">
                <h3 className="hero-project-title">{title}</h3> 
                <div className="hero-project-entry">
                  {subTitle}
                </div>
                {link &&
                  <React.Fragment>
                    <br />
                    <div className="hero-project-entry">
                      <p>
                        <LinkComponent href={link.url} className="hero-link"> {link.text} <i className="right"></i></LinkComponent>
                      </p>
                    </div>
                  </React.Fragment>
                }
              </div>              
              }              
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Header
