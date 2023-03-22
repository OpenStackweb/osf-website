import React from 'react'
import NewsletterForm from '../ContactFormNewsletter'

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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Jura:wght@400;500;700&display=swap" rel="stylesheet"></link>
                <div className="container home-v2-container-news">
                    <div className="home-v2-text-container">
                        <h2 className="home-v2-header home-v2-header-white">Latest <span className="home-v2-header-yellow">OpenInfra News</span></h2>
                        <p className="home-v2-paragraph home-v2-paragraph-white">The latest news, technologies, and resources from the OpenInfra Community</p>
                    </div>
                    <div className="news-article-container" style={{right: this.state.newsOffset}}>
                        <div className="news-article-inner-container">
                            <a href="https://thenewstack.io/a-is-for-openstack-antelope/"><img src="/img/homeV2/news-images/openstack-antelope-news-img.jpg" /></a>
                            <p className="news-article-intro-text">Steven J. Vaughan-Nichols • Mar 22, 2023</p>
                            <a href="https://thenewstack.io/a-is-for-openstack-antelope/"><h3>A Is for OpenStack Antelope</h3></a>
                            <p className="news-article-content">The latest version of the OpenStack IaaS cloud shifts to a once-a-year release cycle.</p>
                            <a className="news-article-link" href="https://thenewstack.io/a-is-for-openstack-antelope/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.forbes.com/sites/janakirammsv/2023/02/27/microsoft-makes-azure-kubernetes-service-secure-to-run-multi-tenant-workloads/"><img src="/img/homeV2/news-images/kata-containers-news-home.jpg" /></a>
                            <p className="news-article-intro-text">Janakiram MSV • Feb 27, 2023</p>
                            <a href="https://www.forbes.com/sites/janakirammsv/2023/02/27/microsoft-makes-azure-kubernetes-service-secure-to-run-multi-tenant-workloads/"><h3>Microsoft Makes Azure Kubernetes Service Secure To Run Multi-Tenant Workloads</h3></a>
                            <p className="news-article-content">Last week Microsoft launched a new feature that lets customers run modern applications on Azure Kubernetes Service (AKS) in an isolated and secure form.</p>
                            <a className="news-article-link" href="https://www.forbes.com/sites/janakirammsv/2023/02/27/microsoft-makes-azure-kubernetes-service-secure-to-run-multi-tenant-workloads/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.sdxcentral.com/articles/news/starlingx-8-0-targets-telcos-o-ran-with-open-source-cloud-and-edge-platform/2023/02/"><img src="/img/homeV2/news-images/starlingx-8-img.jpg" /></a>
                            <p className="news-article-intro-text">Sean Michael Kerner • Feb 23, 2023</p>
                            <a href="https://www.sdxcentral.com/articles/news/starlingx-8-0-targets-telcos-o-ran-with-open-source-cloud-and-edge-platform/2023/02/"><h3>StarlingX 8.0 Targets Telcos, O-RAN With Open Source Cloud and Edge Platform</h3></a>
                            <p className="news-article-content">The Open Infrastructure Foundation today announced the general availability of StarlingX 8.0, which provides telcos with a new open source cloud and edge computing...</p>
                            <a className="news-article-link" href="https://www.sdxcentral.com/articles/news/starlingx-8-0-targets-telcos-o-ran-with-open-source-cloud-and-edge-platform/2023/02/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/"><img src="/img/homeV2/news-images/kata-article-img.webp" /></a>
                            <p className="news-article-intro-text">Steven Vaughan-Nichols • Oct 11, 2022</p>
                            <a href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/"><h3>Kata Containers 3's marriage of virtual machines and containers continues</h3></a>
                            <p className="news-article-content">Suppose, just suppose, you could combine the speed and flexibility of containers with the security of virtual machines (VM). That's exactly what Kata Containers does.</p>
                            <a className="news-article-link" href="https://www.zdnet.com/article/kata-containers-3s-marriage-of-virtual-machines-and-containers-continues/">READ MORE</a>
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