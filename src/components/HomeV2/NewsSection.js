import React from 'react'

const NewsSection = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          newsOffset: 0,
          newsOffsetKey: 0,
          newsScrollWidth: window.innerWidth >= 420 ? 410 : 330,
          newsScrollAmount: window.innerWidth >= 1000 ? 3 : 4
        }
      }
    
    
      prevBoxClick = (e) => {
        if(this.state.newsOffsetKey >= 1) {
            this.setState({
                newsOffset: this.state.newsOffset -= this.state.newsScrollWidth,
                newsOffsetKey: this.state.newsOffsetKey -= 1
            })
        } else {
            return;
        }
      }

      nextBoxClick = (e) => {
        if(this.state.newsOffsetKey <= this.state.newsScrollAmount) {
            this.setState({
                newsOffset: this.state.newsOffset += this.state.newsScrollWidth,
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
                            <img src="/img/homeV2/news-images/news-img-1.png" />
                            <p className="news-article-intro-text">ALLISON PRICE • 11 SEP 2022</p>
                            <h3>OpenInfra Summit Vancouver</h3> 
                            <p className="news-article-content">Registration and sponsorships for the OpenInfra Summit Vancouver are now open! This is your cha...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/news-images/news-img-2.png" />
                            <p className="news-article-intro-text">ILDIKO VANSCA • 13 SEP 2022</p>
                            <h3>starlingx 7.0 released</h3> 
                            <p className="news-article-content">The open source edge computing and IoT cloud platform optimized for low latency and high perfor...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/news-images/news-img-3.png" />
                            <p className="news-article-intro-text">HELENA SPEASE • 22 AUG 2022</p>
                            <h3>openinfra live this week</h3>
                            <p className="news-article-content">Learn the importance of having a Virtual Desktop Infrastructure (VDI) with OpenStack in this week’s...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/news-images/news-img-4.png" />
                            <p className="news-article-intro-text">Olivia Rhye • 20 Jan 2022</p>
                            <h3>UX review presentations</h3>
                            <p className="news-article-content">How do you create compelling presentations that wow your colleagues and impress your managers...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/news-images/news-img-5.png" />
                            <p className="news-article-intro-text">Phoenix Baker • 19 Jan 2022</p>
                            <h3>Migrating to Linear 101</h3>
                            <p className="news-article-content">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <img src="/img/homeV2/news-images/news-img-6.png" />
                            <p className="news-article-intro-text">Lana Steiner • 18 Jan 2022</p>
                            <h3>Building your API Stack</h3>
                            <p className="news-article-content">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them...</p>
                            <a className="news-article-link" href="">READ MORE</a>
                        </div>
                    </div>
                    <div className="news-article-button-container">
                        <div className={this.state.newsOffsetKey == 0 ? "news-article-button news-article-button-inactive" : "news-article-button"}
                        onClick={this.prevBoxClick}>
                            <img src="/img/homeV2/prev-arrow.svg" />
                        </div>

                        <div className={this.state.newsOffsetKey == (this.state.newsScrollAmount + 1) ? "news-article-button news-article-button-inactive" : "news-article-button"}
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