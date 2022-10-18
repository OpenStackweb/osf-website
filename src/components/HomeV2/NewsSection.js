import React from 'react'

const NewsSection = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          newsOffset: 0,
          newsOffsetKey: 0
        }
      }
    
    
      prevBoxClick = (e) => {
        if(this.state.newsOffsetKey >= 1) {
            this.setState({
                newsOffset: this.state.newsOffset -= 410,
                newsOffsetKey: this.state.newsOffsetKey -= 1
            })
        } else {
            return;
        }
      }

      nextBoxClick = (e) => {
        if(this.state.newsOffsetKey <= 2) {
            this.setState({
                newsOffset: this.state.newsOffset += 410,
                newsOffsetKey: this.state.newsOffsetKey += 1
            })
        } else {
            return;
        }
      }

    render() {
        return (
            <div className="home-v2-outer-container-dark">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Jura:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <div className="container home-v2-container-news">
                    <div className="home-v2-text-container">
                        <h2 className="home-v2-header home-v2-header-white">Latest <span className="home-v2-header-yellow">OpenInfra News</span></h2>
                        <p className="home-v2-paragraph home-v2-paragraph-white">The latest news, technologies, and resources from the OpenInfra Community</p>
                    </div>
                    <div className="news-article-container" style={{right: this.state.newsOffset}}>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3> 
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3> 
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3>
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3>
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3>
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/blog-image.png" />
                            <p className="news-article-intro-text">Allison Price . 11 Sep 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3>
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                    </div>
                    <div className="news-article-button-container">
                        <div className="news-article-button"
                        onClick={this.prevBoxClick}>
                            <img src="/img/homeV2/prev-arrow.svg" />
                        </div>

                        <div className="news-article-button"
                        onClick={this.nextBoxClick}>
                            <img src="/img/homeV2/next-arrow.svg" />
                        </div>
                    </div>
                </div>
                <div className="home-v2-newsletter-section">
                    <div className="home-v2-newsletter-box">
                        <div className="home-v2-newsletter-box-inner">
                            <h2 className="home-v2-header">Stay Up <span className="home-v2-header-red">To Date</span></h2>
                            <ul className="home-v2-newsletter-list">
                                <li>Get involved in the community</li>
                                <li>Read the latest OpenInfra project news</li>
                                <li>Get news about industry updates, cloud economics, and more!</li>
                            </ul>
                            <div className="home-v2-newsletter-form">
                                <input type="text" placeholder="Enter your email"></input>
                                <button type="Submit">Subscribe</button>
                            </div>
                            <p className="home-v2-newsletter-disclaimer">We care about your data in our <a href="/privacy-policy/">Privacy Policy</a>.</p>
                        </div>
                    </div>
                    <div className="home-v2-newsletter-image">

                    </div>
                </div>
            </div>
        );
    }
}

export default NewsSection