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
            <div>
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
                            <a href="https://www.zdnet.com/article/why-openstack-and-kata-containers-are-both-seeing-a-resurgence-of-adoption/"><img src="/img/homeV2/news-images/suwon-south-korea.jpg" /></a>
                            <p className="news-article-intro-text"> Steven Vaughan-Nichols • Sep 4, 2024</p>
                            <a href="https://www.zdnet.com/article/why-openstack-and-kata-containers-are-both-seeing-a-resurgence-of-adoption/"><h3>Why OpenStack and Kata Containers are both seeing a resurgence of adoption</h3></a>
                            <p className="news-article-content">Quite discreetly, the OpenInfra Foundation and the open-source projects it promotes (such as OpenStack, and Kata Containers, virtual machines (VM) as containers) are changing the world.</p>
                            <a className="news-article-link" href="https://www.zdnet.com/article/why-openstack-and-kata-containers-are-both-seeing-a-resurgence-of-adoption/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.theregister.com/2024/08/28/geico_vmware_openstack_migration/"><img src="/img/homeV2/news-images/geico-drops-vmware.jpg" /></a>
                            <p className="news-article-intro-text"> Simon Sharwood • Aug 28, 2024</p>
                            <a href="https://www.theregister.com/2024/08/28/geico_vmware_openstack_migration/"><h3>US insurer GEICO drops VMware for OpenStack</h3></a>
                            <p className="news-article-content">US auto insurer GEICO has decided to migrate from VMware to OpenStack. Tad Van Fleet, a distinguished architect at GEICO, said "OpenStack allows us to avoid vendor lock-in and allows us to customize our infrastructure to meet our specific needs..."</p>
                            <a className="news-article-link" href="https://www.theregister.com/2024/08/28/geico_vmware_openstack_migration/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.sdxcentral.com/articles/interview/is-openstack-a-viable-vmware-alternative/2024/06/"><img src="/img/homeV2/news-images/sdx-openstack-vmware.png" /></a>
                            <p className="news-article-intro-text">Dan Meyer  • June 12, 2024</p>
                            <a href="https://www.sdxcentral.com/articles/interview/is-openstack-a-viable-vmware-alternative/2024/06/"><h3>Is OpenStack a viable VMware alternative?</h3></a>
                            <p className="news-article-content">Broadcom’s ongoing changes to VMware’s licensing and distribution channels have created a wave of enterprise concern that is propelling potential alternatives, with OpenStack the most recent to throw its hat into that ring.</p>
                            <a className="news-article-link" href="https://www.sdxcentral.com/articles/interview/is-openstack-a-viable-vmware-alternative/2024/06/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.sdxcentral.com/articles/analysis/starlingx-9-0-open-source-cloud-platform-boosts-performance-for-telco-and-edge/2024/04/"><img src="/img/homeV2/news-images/sdx-starlingx-9.png" /></a>
                            <p className="news-article-intro-text">Sean Michael Kerner  • Apr 12, 2024</p>
                            <a href="https://www.sdxcentral.com/articles/analysis/starlingx-9-0-open-source-cloud-platform-boosts-performance-for-telco-and-edge/2024/04/"><h3>StarlingX 9.0 open source cloud platform boosts performance for telco and edge</h3></a>
                            <p className="news-article-content">The open source StarlingX project is out with its 9.0 release, promising improved performance and capabilities for users of the telco and edge-focused cloud computing platform.</p>
                            <a className="news-article-link" href="https://www.sdxcentral.com/articles/analysis/starlingx-9-0-open-source-cloud-platform-boosts-performance-for-telco-and-edge/2024/04/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://techcrunch.com/2024/04/04/openstack-improves-support-for-ai-workloads/"><img src="/img/homeV2/news-images/techcrunch-caracal.png" /></a>
                            <p className="news-article-intro-text">Frederic Lardinois  • Apr 4, 2024</p>
                            <a href="https://techcrunch.com/2024/04/04/openstack-improves-support-for-ai-workloads/"><h3>OpenStack improves support for AI workloads</h3></a>
                            <p className="news-article-content">OpenStack allows enterprises to manage their own AWS-like private clouds on-premises. Even after 29 releases, it’s still among the most active open-source projects in the world and this week, the OpenInfra Foundation that shepherds the project announced the launch of version 29 of OpenStack. Dubbed ‘Caracal,’ this new release emphasizes new features for hosting AI and high-performance computing (HPC) workloads.</p>
                            <a className="news-article-link" href="https://techcrunch.com/2024/04/04/openstack-improves-support-for-ai-workloads/">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.itprotoday.com/iaas-and-paas/openstack-caracal-release-focuses-ai-performance-security"><img src="/img/homeV2/news-images/itpro-caracal.png" /></a>
                            <p className="news-article-intro-text">Sean Michael Kerner  • Apr 3, 2024</p>
                            <a href="https://www.itprotoday.com/iaas-and-paas/openstack-caracal-release-focuses-ai-performance-security"><h3>OpenStack Caracal Release Focuses on AI, Performance, Security</h3></a>
                            <p className="news-article-content">The open source cloud infrastructure platform continues to evolve to meet the needs of high-performance computing and AI. The open source OpenStack cloud platform received its first major update of 2024 today with the release of OpenStack Caracal.</p>
                            <a className="news-article-link" href="https://www.itprotoday.com/iaas-and-paas/openstack-caracal-release-focuses-ai-performance-security">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://www.computerweekly.com/blog/Open-Source-Insider/OpenStack-Caracal-improves-agility-delivers-bite-as-VMware-alternative"><img src="/img/homeV2/news-images/caracal-news-banner.png" /></a>
                            <p className="news-article-intro-text">Adrian Bridgwater  • Apr 3, 2024</p>
                            <a href="https://www.computerweekly.com/blog/Open-Source-Insider/OpenStack-Caracal-improves-agility-delivers-bite-as-VMware-alternative"><h3>OpenStack Caracal improves agility & delivers bite as VMware alternative</h3></a>
                            <p className="news-article-content">The OpenStack has released Caracal (pronounced:‘keh·ruh·kal’ and named after the  medium-sized wild cat native to Africa, the Middle East and Asia) marking the 29th version of this widely deployed open source cloud infrastructure software. OpenStack is today deployed with more than 45 million cores in production. </p>
                            <a className="news-article-link" href="https://www.computerweekly.com/blog/Open-Source-Insider/OpenStack-Caracal-improves-agility-delivers-bite-as-VMware-alternative">READ MORE</a>
                        </div>
                        <div className="news-article-inner-container">
                            <a href="https://techcrunch.com/2023/06/13/openinfra-foundation-opens-regional-hubs-in-europe-and-asia/"><img src="/img/homeV2/news-images/openinfraasiaeurope.png" /></a>
                            <p className="news-article-intro-text">Frederic Lardinois • Jun 13, 2023</p>
                            <a href="https://techcrunch.com/2023/06/13/openinfra-foundation-opens-regional-hubs-in-europe-and-asia/"><h3>OpenInfra Foundation opens regional hubs in Europe and Asia</h3></a>
                            <p className="news-article-content">At the OpenInfra Summit, the OpenInfra Foundation announced that it is launching two regional hubs — OpenInfra Asia based in Singapore and OpenInfra Europe based in Belgium — to better promote and protect open source in those regions.</p>
                            <a className="news-article-link" href="https://techcrunch.com/2023/06/13/openinfra-foundation-opens-regional-hubs-in-europe-and-asia/">READ MORE</a>
                        </div>
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
