import React from 'react'
import LinkComponent from './LinkComponent';
import arrow from "../img/svg/arrow-left.svg";
import downArrow from "../img/svg/arrow-down.svg";
import rightArrow from "../img/svg/arrow-left-gray.svg";

const HeaderV2 = ({backgroundImage, frontImage, title, subtitle, sublabel, contactLink, moreLink, rightArrowLearnMore = false}) => {
    return (
        <main className="main">
            <section className="hero-main-v2">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <h1 className="title">{title}</h1>
                            <p className="subtitle">{subtitle}</p>
                            <p className="sublabel">{sublabel}</p>
                            <div className="actions">
                                {contactLink && (
                                    <LinkComponent href={contactLink} className="button button-red">
                                        <span>Contact Us</span><img src={arrow} alt="arrow" />
                                    </LinkComponent>
                                )}
                                <LinkComponent href={moreLink} className="button button-white">
                                    <span>Learn more</span><img src={rightArrowLearnMore? rightArrow : downArrow} alt="arrow" />
                                </LinkComponent>
                            </div>
                        </div>
                        <div className="column is-half image-wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
                            <img src={frontImage} className="image" alt="hero image" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HeaderV2
