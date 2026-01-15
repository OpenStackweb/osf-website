import React from "react";
import logo from "../img/svg/OpenInfrastructureFoundation-logo-RGB-horiz2-w.svg";
import content from "../content/footer-nav.json";

const FooterV2 = class extends React.Component {
  render() {
    const { sections, footerBar } = content;

    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <footer className="footer is-dark footer-v2">
          <div className="footer-container-v2">
            <div className="footer-sections-v2">
              <div className="footer-section">
                <h6>Four Opens</h6>
                <ul>
                  <li>
                    <a href="/four-opens/">Our Philosophy</a>
                  </li>
                  <li>
                    <a href="four-opens/open-source/">Open Source</a>
                  </li>
                  <li>
                    <a href="/four-opens/open-development/">Open Development</a>
                  </li>
                  <li>
                    <a href="/four-opens/open-community/">Open Community</a>
                  </li>
                  <li>
                    <a href="/four-opens/open-design/">Open Design</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h6>Projects</h6>
                <ul>
                  <li>
                    <a href="/projects/">Projects</a>
                  </li>
                  <li>
                    <a href="/hybrid-cloud/">Hybrid Cloud</a>
                  </li>
                  <li>
                    <a href="/user-survey/">User Survey</a>
                  </li>
                  <li>
                    <a href="/dco/">DCO</a>
                  </li>
                  <li>
                    <a href="/universe/">OpenInfra Universe</a>
                  </li>
                  <li>
                    <a href="/open-infrastructure-blueprint-white-paper/">
                      Open Infrastructure Blueprint
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h6>Events</h6>
                <ul>
                  <li>
                    <a href="/summit/">OpenInfra Summit</a>
                  </li>
                  <li>
                    <a href="/days/">OpenInfra Days</a>
                  </li>
                  <li>
                    <a href="/live/">OpenInfra Live</a>
                  </li>
                  <li>
                    <a
                      href="https://www.meetup.com/pro/openinfradev/"
                      target="_blank"
                    >
                      Community Meetups
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h6>About</h6>
                <ul>
                  <li>
                    <a href="/about/board/">Governing Board</a>
                  </li>
                  <li>
                    <a href="/about/staff/">Foundation Staff</a>
                  </li>
                  <li>
                    <a href="/careers/">Careers</a>
                  </li>
                  <li>
                    <a href="/about/open-infrastructure/">
                      Open Infrastructure 101
                    </a>
                  </li>
                  <li>
                    <a href="/about/diversity/">
                      Diversity & Inclusion Initiatives
                    </a>
                  </li>
                  <li>
                    <a href="/about/openinfra-partnerships/">Partnerships</a>
                  </li>
                  <li>
                    <a href="/legal/">Legal Documents</a>
                  </li>
                  <li>
                    <a href="/contact/">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section footer-section-last footer-break-section">
                <div className="footer-section-last-divider">
                  <h6>Membership</h6>
                  <ul>
                    <li>
                      <a href="/members/">Supporting Organizations</a>
                    </li>
                    <li>
                      <a href="/join/">Join OpenInfra Foundation</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section-last-divider">
                  <h6>News</h6>
                  <ul>
                    <li>
                      <a href="/blog/">OpenInfra Blog</a>
                    </li>
                    <li>
                      <a href="/press/">Press & Media</a>
                    </li>
                    <li>
                      <a href="/newsletter/">Newsletter</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section-last-divider">
                  <h6>Regional Hubs</h6>
                  <ul>
                    <li>
                      <a href="https://openinfraasia.org/">OpenInfra Asia</a>
                    </li>
                    <li>
                      <a href="https://openinfraeurope.org/">
                        OpenInfra Europe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-v2-lower">
              <div className="nav-brand">
                <a href="/" className="router-link-active">
                  <div className="logo-containter">
                    <div className="logo-containter-child logo-containter-child-img">
                      <img
                        src="/img/OpenInfraFoundation-logo-RGB-horiz-w.svg"
                        alt="OpenInfra Foundation"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="footer-v2-social">
                <ul>
                  <li>
                    <a href="https://x.com/openinfradev">
                      <img src="/img/footer/footer-x.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/open-infrastructure-foundation">
                      <img src="/img/footer/footer-linkedin.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/openinfradev">
                      <img src="/img/footer/footer-facebook.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://weixin.qq.com/r/ESpMVGXEgjj9rSE3938D">
                      <img src="/img/footer/footer-wechat.jpeg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://social.openinfra.dev/@OpenInfra" rel="me">
                      <img src="/img/footer/footer-mastodon.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://bsky.app/profile/openinfra.org">
                      <img src="/img/footer/footer-bluesky.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bug-container">
              <p className="footer-bug">
                Find an issue with anything on this site?{" "}
                <a href="mailto:info@openinfra.dev" className="footer-list">
                  Report a bug
                </a>
              </p>
            </div>
          </div>
          <div className="footer-v2-bottom-bar">
            <div className="footer-v2-bar-1 footer-v2-bar"></div>
            <div className="footer-v2-bar-2 footer-v2-bar"></div>
            <div className="footer-v2-bar-3 footer-v2-bar"></div>
            <div className="footer-v2-bar-4 footer-v2-bar"></div>
          </div>
        </footer>
        {footerBar && (
          <div className="bar-footer is-dark-gray">
            <div className="container">
              <div className="bar-footer-inner">
                <div className="bar-footer-entry">
                  <a href={footerBar.privacy.url}>{footerBar.privacy.text}</a> |{" "}
                  <a href={footerBar.legal.url}>{footerBar.legal.text}</a>
                </div>
                <div className="bar-footer-entry bar-footer-entry-right">
                  {footerBar.text}
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
};

export default FooterV2;
