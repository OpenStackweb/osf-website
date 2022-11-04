import React, { useState } from "react"
import { connect } from 'react-redux'
import LinkComponent from "../components/LinkComponent"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { getGoldCandidates, getElectionStatus } from "../actions/election-actions";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

const ElectionGoldCandidatesPagePreviousTemplate = ({ intro, goldCandidates, loading, menu }) => {

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <AjaxLoader show={loading} size={120} />
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {!loading && goldCandidates &&
              <div className="columns">
                <div className="column is-one-third">
                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election">ELECTION DETAILS<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election/candidates/">SEE THE CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election/candidates/gold">GOLD MEMBER ELECTION CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                  {menu.map((m, index) => {
                    return (
                      <div className="election-item" key={index}>
                        <LinkComponent href={m.link}>
                          {m.text}
                          <i className="fa fa-chevron-right" />
                        </LinkComponent>
                      </div>
                    )
                  })}
                </div>
                <div className="column is-two-thirds">
                  <div className="candidate-tier">
                    <h2>{intro.title}</h2>
                    <span dangerouslySetInnerHTML={{ __html: intro.description }} />
                  </div>
                  <div className="candidate-list">
                    
                  <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/37C28115-F7CD-4AE3-BFE9-A613DF449B84.jpeg" alt="Abhisak Chulya" />
                        <h4>Abhisak Chulya</h4>
                        <br />
                        <div>
                            <b>About Abhisak Chulya</b>
                            <span>
                                <p>Dr. Abhisak has been involved in Internet circle in Asia Pacific since 1999. He was the secretariat of ccTLD for three years during which he had participated in almost every ICANN meetings through out the world. He has experienced and understanding of how big impact of Internet has on this region. He single-handedly organized APRICOT 2002 in Bangkok (<a href="https://www.apricot.net/apricot2002/about/index.html"><u>https://www.apricot.net/apricot2002/about/index.html</u></a>) and was a chairman of APIA serving for three terms from 2004 – 2006 (<a href="https://www.apia.org/pdf/AGM2004.pdf"><u>https://www.apia.org/pdf/AGM2004.pdf</u></a>) Here is more details of Dr. Abhisak qualifications and work history:&nbsp;</p>
                                <p>Abhisak received his doctoral degree in Engineering from Cleveland State University, USA and spent 8 years as a senior research scientist at NASA John H. Glenn Research Center in Cleveland, Ohio, USA. He published over 20 international publications as lead author including presentations in France, Japan, and USA.</p>
                                <p>Moving back home in 1996, he worked as a Director of Thailand Science Park. He later turned entrepreneur setting up his own company called NIPA Technology Co., Ltd. He is the former Executive Director for ccTLD Secretariat for Country Code Top Level Domain Name. He was also in charge of ccTLD Name Server Training Program which is part of AP Outreach Seminar - ccTLD Secretariat.&nbsp;</p>
                                <p>He has been appointed by the Cabinet of Thai Government on 17 June 2003 to be a member of Board of Directors of National Science and Technology Development Agency, Ministry of Science and Technology, Thailand.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/87449">View  Abhisak Chulya's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/profile-images/CH.jpeg" alt="Clemens Hardewig" />
                        <h4>Clemens Hardewig</h4>
                        <br />
                        <div>
                            <b>About Clemens Hardewig</b>
                            <span>
                                <p>Clemens is born in Germany and married with three kids, I have a PhD in computer science and worked in the communication industry in different managerial roles in IT.</p>
                                <p>Working for Deutsche Telekom-T-Systems since 1997, &nbsp;IT wise Clemens grew up in the **ix space and became excited with Opensource and community work already early in my carrier. Since then, the use and promotion of Opensource Technology in the different stations of my carrier is one of the red lines Clemens always tried to facilitate and develop.</p>
                                <p>Being with Deutsche Telekom in different managerial roles, Clemens has been involved in depth &nbsp;in Community Work as eg in the early days of Mobile Internet where I helped to develop the Wireless Application Protocol (WAP) Community as a accounable representative for DT.</p>
                                <p>After several years in Mobile Communications and traditional IT as Technical Manager, Clemens took the opportunity and leads since 2014 the Technology team within T-Systems which builds and delivers the Open Telekom Cloud (OTC), a public cloud offering in Europe based on Openstack and being currently accountable for the teams of architects, engineers, operations and consultants, all together being accountable for the technical delivery of the OTC service offering.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/53350">View  Clemens Hardewig's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/EdwardL0086" alt="Edward Lee" />
                        <h4>Edward Lee</h4>
                        <br />
                        <div><b>About Edward Lee</b><span>I am Edward Lee, I have nearly 15 years of R&amp;D Product and open source experience in multiple fields, such as cloud, storage, big data and so on. 
                            Currently I am the head of open source team in EasyStack inc, my major job is leading team members work in community including OpenInfra, CNCF, Linux as well as product development. I am going to setup the OSPO following the todogroup’s guides and willing to make much more efforts on communities.
                            Prior to that, I have two work experiences, the one is as the leader of development team for more than five years in Huawei. I was in charge of open source strategy making and leading a team with full-time engineers working in several projects e.g. Cinder, Manila, Swift, Kubernetes and so on, we made much effort on contribution and got some core members/maintainers. And also I was the founder and infrastructure architect of several new open source projects related Huawei, such as openEuler, openGauss. The another one is as developer with several years of experience in storage system, big data product development and design.</span>
                        </div>
                        <a href="/a/community/members/124668">View  Edward Lee's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/Grace-Lian-02-web-2.jpg" alt="Grace Lian" />
                        <h4>Grace Lian</h4>
                        <br />
                        <div>
                            <b>About Grace Lian</b>
                            <span>
                                <p>Grace Lian is&nbsp;a senior director of Cloud Software Engineering team in Intel. She leads a global team to work on open source cloud software technologies, including OpenStack, k8s, Kata containers, Cloud Hypervisor, Envoy, Istio, Ceph, and Akraino etc.&nbsp;She also drives the strategy in the cloud native software domains for Intel.</p>
                                <p>Grace is an open source veteran. She started to work on open source software from Carrier Grade Linux project back to 2001. She was engineering manager for the first Linux team in Intel China. The team became OTC (Open Source Technology Center) China and has grown many open source talents for the community. She has long time experience leading global engineering teams on open source software development, touching layers of system software (OS, Web/HTML5, virtualization, orchestration, SDN/NFV, SDS, cloud and edge etc.), bringing open source values to business and successfully supporting many customers.</p>
                                <p>Grace's team started to work on OpenStack since 2012. In the past years, her team has contributed significantly to OpenStack and Kata Containers upstream development, actively led, participated and promoted many community activities. Intel is also one of the members who started Kata Container project and StarlingX project, and contributed them to Open Infrastructure Foundation.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/66411">View  Grace Lian's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/profile-images/SmallProfilePic1.png" alt="Johan Christenson" />
                        <h4>Johan Christenson</h4>
                        <br />
                        <div>
                            <b>About Johan Christenson</b>
                            <span>
                                <p>Johan Christenson is an entrepreneur whom has successfully exited multiple companies he founded. After receiving a graduate degree in Engineering, from Florida Institute of Technology, his focus turned to the digital space.</p>
                                <p>Johan is the founder and CEO of City Network (a part of Iver), which offers a global public cloud as well as private clouds for enterprises - all based on OpenStack. City Networks mission is to enable innovation and focuses on enterprises with regulatory challenges.</p>
                                <p>Johan sees OpenStack and open infrastructure as critical for all enterprises in order to provide options and create competition in an ever more centralized infrastructure world. He, and the team at City, empower new types of industries and markets to use the power of OpenStack, to enable and increase innovation in their organizations.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/26794">View  Johan Christenson's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://www.gravatar.com/avatar/8017860bb7c8de274a7a22bb7b0fcf54" alt="Li Kai" />
                        <h4>Li Kai</h4>
                        <br />
                        <div>
                            <b>About Li Kai</b>
                            <span>
                                <p>I am Kai and am the CSO/Co-founder from 99CLOUD. I had been devoting myself for OpenStack for more than 9 years from 2012.&nbsp; 99CLOUD is one of the top code committer orgnization in OIF foundation.&nbsp; We believe with Open Infra tech, we can some how change the world and help client better in their IT and bussiness transformation. I am currently in the OpenStack board in 2020. I am also in EdgeGallery (a MEC opensource project) as a baord member. Prior to 99CLOUD, I worked for Intel from 2006~2012 as a SW engineer and Accenture 2012~2014 as Cloud Manager.&nbsp;&nbsp;</p>
                            </span>
                        </div>
                        <a href="/a/community/members/20566">View  Li Kai's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/Jiao-Peng-Ju-.jpg" alt="Pengju Jiao" />
                        <h4>Pengju Jiao</h4>
                        <br />
                        <div>
                            <b>About Pengju Jiao</b>
                            <span>
                                <p>Pengju Jiao comes from China Mobile SuZhou R&amp;D Center and he has been working here for 7 years. He currently serves as the leader of the Computing Product Group of the IaaS product department, taking responsibility for the R&amp;D of the OpenStack team. ECloud has become the fastest-growing public cloud in China with the highest revenue growth rate in the past two years. As a member of the China Mobile Public Cloud architecture team, he participated in multi-phase projects of the ECloud and could be considered as the main contributor for guiding ECloud to join the Million Core Club. Pengju Jiao has considerable rich work experience in the development and operation of hyperscale public clouds. In these years, he led the OpenStack R&amp;D team to achieve multiple great achievements, implementing the scheduling and concurrency optimization for hyperscale clusters carrying more than 100,000 servers. With this optimization, the delivery of 5 thousand cloud hosts could be completed in several minutes.&nbsp;</p>
                                <p>Pengju Jiao is also very active to join community events. He once deeply joins many core community projects and make contributions as the Core and PTL for the Karbor. In addition, he is a frequenter in OpenStack Summit, China Day and Meet-up activities. His team has published dozens of speeches in OpenStack-related community activities based on his lead, sharing China Mobile’s practical and innovation experience in OpenStack.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/78062">View  Pengju Jiao's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/eyepv6" alt="Shannon McFarland" />
                        <h4>Shannon McFarland</h4>
                        <br />
                        <div>
                            <b>About Shannon McFarland</b>
                            <span>
                                <p>Shannon McFarland, CCIE #5245, is a Distinguished Engineer and Cloud Architect for Cloud Native and Application Infrastructure technologies at Cisco. He has been at Cisco for 22+ years. Shannon worked as a systems engineer at a system integrator for many years and as an end-user engineer in the medical industry prior to that.<br />
                                &nbsp;<br />
                                Shannon has been involved with OpenStack since the Diablo release and has historically focused on Neutron, Heat, and Magnum related work. In addition, to OpenStack-specific projects, Shannon has been involved in the Kata Containers project. He is also working in the CNCF (Kubernetes, Network Service Mesh, Linkerd and OpenTelemetry) and Istio communities, with a distinct focus on all-things networking and observability. He is an author (“IPv6 for Enterprise Networks”) and a frequent speaker at various industry and community conferences to include OpenStack/Open Infrastructure Summits, Cisco Live, etc.<br />
                                &nbsp;<br />
                                LinkedIn:&nbsp;<a title="https://www.linkedin.com/in/smcfarland/" href="https://www.linkedin.com/in/smcfarland/">https://www.linkedin.com/in/smcfarland/</a>
                                </p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                        <a href="/a/community/members/1356">View  Shannon McFarland's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/Tytus-headshot.jpg" alt="Tytus Kurek" />
                        <h4>Tytus Kurek</h4>
                        <br />
                        <div>
                            <b>About Tytus Kurek</b>
                            <span>
                                <p>Tytus has been a member of the OpenInfra Foundation Board of Directors since 2020. He is a member of the Finance Committee and is actively involved in the OpenStack community. Over years he contributed numerous patches to the OpenStack codebase. He was also participating in the events organised by the OpenInfra Foundation, including summits and PTGs, supporting the foundation in its efforts to spread the awareness of open-source benefits.</p>
                                <p>As a Product Manager at Canonical, Tytus drives the evolution of Canonical’s products and services in the data centre space, including Canonical's Charmed OpenStack distribution. Tytus received his PhD with honours in telecommunications in 2018. His background is data centre administration and cloud engineering. His research interests focus on 5G networks, network function virtualisation, container network functions and unikernels.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/70331">View  Tytus Kurek's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://www.gravatar.com/avatar/39b5ef875b525b434dd267851e844c67" alt="Xin Zhong" />
                        <h4>Xin Zhong</h4>
                        <br />
                        <div>
                            <b>About Xin Zhong</b>
                            <span>
                                <p><span>Xin Zhong got his Master Degree from Tsinghua University in 2003. He has nearly 20 years of open source related experience. He is an expert in Linux OS, distributed storage and cloud computing. He has been involved in development and operation of several large-scale internet and enterprise cloud platform as technical director or chief architect. Currently, he is the Senior Architect of China Unicom Cloud (new brand of Wo Cloud). He represents China Unicom in all the foundation events. He and his team are very active in open source projects like openstack, ceph, etc. He has been Board Director in 2020.</span></p>
                            </span>
                        </div>
                        <a href="/a/community/members/119259">View  Xin Zhong's full candidate profile and Q&amp;A &gt;&gt;</a>
                    </div>

                  </div>
                </div>
              </div>
            }
          </div>
        </section>
      </div>
    </main>
  )
}

const ElectionGoldCandidatesPagePrevious = ({ data, isLoggedUser, goldCandidates, loading, location, getGoldCandidates, electionStatus, getElectionStatus }) => {

  useState(() => {
    getGoldCandidates();
    getElectionStatus();
  }, [])

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <Navbar isLoggedUser={isLoggedUser} />
          <Header title={post.frontmatter.title} />
          <ElectionGoldCandidatesPagePreviousTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            goldCandidates={goldCandidates}
            electionStatus={electionStatus}
            loading={loading}
            menu={post.frontmatter.menu}
            intro={post.frontmatter.intro}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  electionStatus: state.electionState.election_status,
  goldCandidates: state.electionState.gold_candidates,
  loading: state.electionState.loading
}), {
  getGoldCandidates,
  getElectionStatus
}
)(ElectionGoldCandidatesPagePrevious)

export const electionGoldCandidatesPagePreviousQuery = graphql`
  query ElectionGoldCandidatesPagePrevious($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }  
        menu {
          text
          link
        }      
        title 
        intro {   
          title
          description
        }                   
      }
    }
  }
`