import React from 'react'
import NewsletterForm from '../ContactFormNewsletter'

const NewsSection = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          newsOffset: 0,
          newsOffsetKey: 0,
          newsScrollWidth: window.innerWidth >= 420 ? 410 : 330,
          newsScrollAmount: window.innerWidth >= 1000 ? 2 : 3
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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Jura:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <div className="container home-v2-container-news">
                    <div className="home-v2-text-container">
                        <h2 className="home-v2-header home-v2-header-white">Latest <span className="home-v2-header-yellow">OpenInfra News</span></h2>
                        <p className="home-v2-paragraph home-v2-paragraph-white">The latest news, technologies, and resources from the OpenInfra Community</p>
                    </div>
                    <div className="news-article-container" style={{right: this.state.newsOffset}}>
                        <div className="news-article-inner-container">
                            <a href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/"><img src="/img/homeV2/news-images/kata-article-img.webp" /></a>
                            <p className="news-article-intro-text">Steven Vaughan-Nichols • Oct 11, 2022</p>
                            <a href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/"><h3>Kata Containers 3's marriage of virtual machines and containers continues</h3></a>
                            <p className="news-article-content">Suppose, just suppose, you could combine the speed and flexibility of containers with the security of virtual machines (VM). That's exactly what Kata Containers does.</p>
                            <a className="news-article-link" href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.zdnet.com/article/openstack-from-austin-to-zed/"><img src="/img/homeV2/news-images/openstack-article-img.webp" /></a>
                            <p className="news-article-intro-text">Steven Vaughan-Nichols • Oct 10, 2022</p>
                            <a href="https://www.zdnet.com/article/openstack-from-austin-to-zed/"><h3>OpenStack from Austin to Zed</h3></a>
                            <p className="news-article-content">OpenStack has come a long way from its first release to its latest as it has matured from a private cloud to a multi-purpose cloud for any and all purposes</p>
                            <a className="news-article-link" href="https://www.zdnet.com/article/openstack-from-austin-to-zed/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.starlingx.io/blog/starlingx-release-7/"><img src="/img/homeV2/news-images/news-img-2.png" /></a>
                            <p className="news-article-intro-text">Ildiko Vancsa • Sep 13, 2022</p>
                            <a href="https://www.starlingx.io/blog/starlingx-release-7/"><h3>StarlingX R 7.0 is here!</h3></a>
                            <p className="news-article-content">In September of 2022, the StarlingX community announced the R7.0 release with new features and enhancements to the platform.</p>
                            <a className="news-article-link" href="https://www.starlingx.io/blog/starlingx-release-7/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://openinfra.dev/blog/open-for-business-open-infra-foundation-launches-directed-funding-for-openinfra-project-hosting-replicating-success-of-openstack-kata-containers-starlingx"><img src="/img/homeV2/news-images/openinfra-article-img.jpg" /></a>
                            <p className="news-article-intro-text">Allison Price • Jul 6, 2022</p>
                            <a href="https://openinfra.dev/blog/open-for-business-open-infra-foundation-launches-directed-funding-for-openinfra-project-hosting-replicating-success-of-openstack-kata-containers-starlingx"><h3>‘Open for Business’: OpenInfra Foundation Launches ‘Directed Funding’ for OpenInfra Project Hosting</h3></a>
                            <p className="news-article-content">At the 2022 OpenInfra Summit in Berlin, the Open Infrastructure Foundation (OpenInfra Foundation) announced that it has added the ability to directly fund specific projects...</p>
                            <a className="news-article-link" href="https://openinfra.dev/blog/open-for-business-open-infra-foundation-launches-directed-funding-for-openinfra-project-hosting-replicating-success-of-openstack-kata-containers-starlingx">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.zdnet.com/article/10-years-of-zuul-continuous-integrationcontinuous-delivery-rises-to-new-successes/"><img src="/img/homeV2/news-images/zuul-article-img.webp" /></a>
                            <p className="news-article-intro-text">Steven Vaughan-Nichols • Jun 7, 2022</p>
                            <a href="https://www.zdnet.com/article/10-years-of-zuul-continuous-integrationcontinuous-delivery-rises-to-new-successes/"><h3>10 Years of Zuul Continuous Integration/Continuous Delivery rises to new successes</h3></a>
                            <p className="news-article-content">The Open Infrastructure Foundation CI/CD program Zuul is essential to BMW, Volvo, and Workday's software development.</p>
                            <a className="news-article-link" href="https://www.zdnet.com/article/10-years-of-zuul-continuous-integrationcontinuous-delivery-rises-to-new-successes/">READ MORE</a>
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
                            {/* <div className="home-v2-newsletter-form">
                                <input type="text" placeholder="Enter your email"></input>
                                <button type="Submit">Subscribe</button>
                            </div> */}
                            <NewsletterForm />
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