import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import LinkComponent from "../components/LinkComponent";

import { getCandidates, getElectionStatus } from "../actions/election-actions";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

const ElectionCandidatesPagePreviousTemplate = ({ candidates, electionStatus, today, loading, menu, howToVote }) => {

  const acceptedCandidates = candidates.filter(c => c.member.election_applications.length >= 10);
  const noBallotCandidates = candidates.filter(c => c.member.election_applications.length < 10 && c.member.election_applications.length > 0);

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <AjaxLoader show={loading} size={120} />
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {

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
                  <article className="message is-primary">
                    <div className="message-body">
                      <h3>{howToVote.title}</h3>
                      <span
                        dangerouslySetInnerHTML={{ __html: howToVote.description.replace("{$ElectionName}", electionStatus?.name) }} />
                    </div>
                  </article>
                  <div className="candidate-tier">
                    <h2>Candidates On The Ballot</h2>
                    <span >
                    The candidates on this list have the 10 nominations required to be on the election ballot and have completed the application.
                    </span>
                  </div>
                  <div className="candidate-list">

                    <div class="candidate-wrapper">
                        <img src="https://www.gravatar.com/avatar/9fa42951d6f1d5532c26032ca89a01b6" alt="Allison Randal" />
                        <h4>Allison Randal</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Tim Bell</span><span class="candidate-nominator">Mark Collier</span><span class="candidate-nominator">Allison Price</span><span class="candidate-nominator">Thierry Carrez</span><span class="candidate-nominator">Amy Marrich</span><span class="candidate-nominator">Ramon Sampang</span><span class="candidate-nominator">Ghanshyam Mann</span><span class="candidate-nominator">Jean-Philippe Evrard</span><span class="candidate-nominator">Jesse Pretorius</span></div>
                        <br />
                        <div>
                            <b>About Allison Randal</b>
                            <span>
                                <p>Allison is a software developer and open source strategist. She is a board member and board chair (2021) of the Open Infrastructure Foundation, a board member of the Software Freedom Conservancy, a board member of Open Usage Commons, and co-founder of the FLOSS Foundations group for open source leaders. She previously served as president and board member of the Open Source Initiative, president and board member of the Perl Foundation, board member at the Python Software Foundation, chief architect of the Parrot virtual machine, chair of the board at the Parrot Foundation, Open Source Evangelist at O'Reilly Media, Conference Chair of OSCON, Technical Architect of Ubuntu, Open Source Advisor at Canonical, Distinguished Technologist and Open Source Strategist at Hewlett Packard Enterprise, and Distinguished Engineer at SUSE. She participates in the Debian and OpenStack projects, and is currently taking a mid-career research sabbatical to complete a PhD at the University of Cambridge.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/2813">View  Allison Randal's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/spotzz_" alt="Amy Marrich" />
                        <h4>Amy Marrich</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Allison Randal</span><span class="candidate-nominator">Eliad Cohen</span><span class="candidate-nominator">Bernard Cafarelli</span><span class="candidate-nominator">Dennis DeMarco</span><span class="candidate-nominator">Jean-Philippe Evrard</span><span class="candidate-nominator">Dmitriy Rabotyagov</span><span class="candidate-nominator">Jesse Pretorius</span><span class="candidate-nominator">Sean Cohen</span><span class="candidate-nominator">Egle Sigler</span><span class="candidate-nominator">Julia Kreger</span></div>
                        <br />
                        <div>
                            <b>About Amy Marrich</b>
                            <span>
                                <p>Amy&nbsp;Marrich is a Principal Technical Marketing Manager at Red Hat. She 
                                previously worked at a small Open Source e-assessment company in 
                                Luxembourg where she was the Open Source Community and Global Training 
                                Manager.&nbsp;&nbsp;Previously she was the OpenStack Instructor at Linux Academy 
                                and a Linux System Engineer on the Platform Engineering Cloud Operations
                                team at Rackspace. She currently serves on the OpenStack Board, is an 
                                active member of the Openstack Ansible project, chair of the OSF 
                                Diversity and Inclusion Working Group, and previously the chair of the 
                                OpenStack User Committee. Amy&nbsp;spends her free time competing in 
                                performance events (agility, FASt Cat, and dock diving) with her 
                                Dalmatians and competing in Dressage with her Connemara pony.
                                </p>
                            </span>
                        </div>
                        <a href="/a/community/members/33567">View  Amy Marrich's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/belmiro-moreira-3.jpg" alt="Belmiro Moreira" />
                        <h4>Belmiro Moreira</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Graeme Moss</span><span class="candidate-nominator">Marcos Benedicto</span><span class="candidate-nominator">Jan van Eldik</span><span class="candidate-nominator">Erik Olof Gunnar Andersson</span><span class="candidate-nominator">Tadas Sutkaitis</span><span class="candidate-nominator">David Holland</span><span class="candidate-nominator">Brendan Conlan</span><span class="candidate-nominator">Tristan Goode</span><span class="candidate-nominator">Arne Wiebalck</span><span class="candidate-nominator">Tim Bell</span></div>
                        <br />
                        <div>
                            <b>About Belmiro Moreira</b>
                            <span>
                                <p>Belmiro Moreira is an enthusiastic mathematician and computer engineer passionate about the challenges and complexities of architecting and deploying large scale open Cloud Infrastructures.&nbsp;</p>
                                <p>Belmiro works at CERN and during the last 10 years he has been responsible for the design,&nbsp;deployment and maintenance of the CERN Cloud Infrastructure based on Openstack.</p>
                                <p>Previously he worked in different virtualization projects to improve the efficiency of the large Batch farm at CERN.&nbsp;</p>
                                <p>Belmiro is from the beginning an active member of the OpenStack community.&nbsp;</p>
                                <p>Currently, he is a member of the OpenStack TC (Technical Committee) and the co-chair of the OpenStack Large Scale SIG. Previously he was also a member of the OpenStack UC (User Committee).&nbsp;</p>
                                <p>Belmiro is particularly interested in the challenges that cloud operators face when maintaining large scale open infrastructures. He talks regularly about his experience in several conferences and events, (OpenStack Summits, OpenStack User Groups, OpenInfra Live, CentOS Dojo, ...) and helps in the organization of many other events.</p>
                                <p>Belmiro is committed to continue to support the OpenInfra community.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/9745">View  Belmiro Moreira's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/eandersson_net" alt="Erik Olof Gunnar Andersson" />
                        <h4>Erik Olof Gunnar Andersson</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Julia Kreger</span><span class="candidate-nominator">Duc Truong</span><span class="candidate-nominator">Wes Wilson</span><span class="candidate-nominator">Amy Marrich</span><span class="candidate-nominator">Marcin Karpik</span><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Belmiro Moreira</span><span class="candidate-nominator">Thierry Carrez</span><span class="candidate-nominator">Tim Bell</span><span class="candidate-nominator">Allison Randal</span></div>
                        <br />
                        <div>
                            <b>About Erik Olof Gunnar Andersson</b>
                            <span>
                                <p>Erik (He/Him) works at Blizzard Entertainment as Lead Site Reliability Engineer for World of Warcraft. He started working for Blizzard back in 2009 and has since contributed to multiple iterations of the Blizzard infrastructure.<br />
                                <br />
                                Blizzard runs an on-prem OpenStack Cloud with over 12,000 nodes has been in production since the release of Overwatch in 2015.
                                </p>
                                <p>He has also been an active contributor to OpenStack since 2015, and is currently a Core Reviewer for Designate and Senlin.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/71900">View  Erik Olof Gunnar Andersson's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/GmannInCloud" alt="Ghanshyam Mann" />
                        <h4>Ghanshyam Mann</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Prakash Ramchandran</span><span class="candidate-nominator">Ignesius Thambyraj</span><span class="candidate-nominator">Ruturaj Kadikar</span><span class="candidate-nominator">Trinath Somanchi</span><span class="candidate-nominator">Vaidyanath Manogaran</span><span class="candidate-nominator">Digambar Patil</span><span class="candidate-nominator">Mark Collier</span><span class="candidate-nominator">Amy Marrich</span><span class="candidate-nominator">Jean-Philippe Evrard</span><span class="candidate-nominator">Allison Price</span></div>
                        <br />
                        <div>
                            <b>About Ghanshyam Mann</b>
                            <span>
                                <p>Ghanshyam is currently serving as a Chair of the OpenStack Technical Committee and Core developer in various OpenStack projects (Nova, QA and a few more) and served as PTL of the OpenStack QA. project. He started working in OpenStack with NEC in 2012 as a cloud support engineer, and since 2014 he has been involved in upstream development. His main upstream focus is on Nova, QA, API stability, and CI/CD. In addition, he is passionate about bringing more contributors to the Open Infra family and helping them in onboarding in the community via different programs like First Contact SIG, Upstream Institute Trainings, mentorship. Before OpenStack Upstream, he worked in different domains like Avionics, Storage, Cloud, and Virtualization. Ghanshyam started his career in technology as a software developer in the Avionic domain with the C++ language.</p>
                                <p>He has also been a frequent speaker in various Open Source events such as OpenStack, Open Infra, Open source summit, Open Infra Days and LinuxCon on various topics like RESTful API, QA, Cloud Backup, Open Source Community Building, Open Source Governance. In addition, he has been actively involved in various PoC and solutions designs around Cloud OSS and currently serving as Cloud Consultant in NEC.</p>
                                <p>More Details: https://ghanshyammann.com/</p>
                            </span>
                        </div>
                        <a href="/a/community/members/6461">View  Ghanshyam Mann's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/idp-osf/profile_pics/2-5ADC3A0D-A482-4386-974B-28262F5F2433-copy-2.jpg" alt="Jean-Philippe Evrard" />
                        <h4>Jean-Philippe Evrard</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Dmitriy Rabotyagov</span><span class="candidate-nominator">Jesse Pretorius</span><span class="candidate-nominator">Andy McCrae</span><span class="candidate-nominator">Chandan Kumar</span><span class="candidate-nominator">Hosam Al Ali</span><span class="candidate-nominator">Joshua Hesketh</span><span class="candidate-nominator">Erik Johansson</span><span class="candidate-nominator">Romain Guichard</span><span class="candidate-nominator">Jaesuk Ahn</span><span class="candidate-nominator">Ghanshyam Mann</span></div>
                        <br />
                        <div>
                            <b>About Jean-Philippe Evrard</b>
                            <span>
                                <p>I am a learner, problem solver, solutions bringer. I started to contribute in OpenStack in 2015. I was the PTL of OpenStack-Ansible during the Queens and Rocky cycle. I was member and chair of the OpenStack Technical Committee, and core reviewer on multiple projects. I was also an OpenStack release manager. I also worked on other projects of the OpenInfra foundation (outside OpenStack).&nbsp;</p>
                                <p>I have my own company, and I focus on helping companies in their Open Source strategy.</p>
                                <p>I currently support City Network, as their CTO.</p>
                                <p>I am a lover of open source software, and am involved in other open source communities when I can (for example, Kubernetes).</p>
                                <p>If you missed me in OpenStack events or meetups, you can still meet me every year at the FOSDEM (when those happen in real life...), handling the openstack booth with fellow OpenStackers.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/37952">View  Jean-Philippe Evrard's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/ashinclouds" alt="Julia Kreger" />
                        <h4>Julia Kreger</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Allison Randal</span><span class="candidate-nominator">Amy Marrich</span><span class="candidate-nominator">Eliad Cohen</span><span class="candidate-nominator">Bernard Cafarelli</span><span class="candidate-nominator">Allison Price</span><span class="candidate-nominator">Mark Collier</span><span class="candidate-nominator">Jean-Philippe Evrard</span><span class="candidate-nominator">Jesse Pretorius</span><span class="candidate-nominator">Sean Cohen</span><span class="candidate-nominator">Jonathan Bryce</span></div>
                        <br />
                        <div>
                            <b>About Julia Kreger</b>
                            <span>
                                <p>Julia started her career in technology over twenty years ago. It has surely not been an average career, but a career where I've continually learned and evolved to fulfill the need. In a sense, it all started with Linux and answering some questions about installing Linux. This started a journey into computer networking&nbsp;and eventually shifted to a systems engineering focus with a stop-over in data center operations.</p>
                                <p>The DevOps movement lead Julia more into software development and the operationalization of software due to the need to automate large scale systems deployments. This required bringing an operational perspective while bridging to the requirements, and often required digging deep into the underlying code to solve the problem of the day.</p>
                                <p>In a sense, Julia found a home in OpenStack in 2014 and the Ironic project in 2015 because of many years spent working with physical hardware in data centers.&nbsp;</p>
                                <p>Julia presently works for Red Hat as a Senior Principal Software Engineer, where her upstream focus has been Ironic for the past few years, and her downstream focus has been on helping lead adoption and use of Ironic.&nbsp;</p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                        <a href="/a/community/members/19088">View  Julia Kreger's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/profile-images/11-11-Garloff-Kurt-3b.jpg" alt="Kurt Garloff" />
                        <h4>Kurt Garloff</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Kurt Garloff</span><span class="candidate-nominator">Clemens Hardewig</span><span class="candidate-nominator">Sebastian Wenner</span><span class="candidate-nominator">Jean-Philippe Evrard</span><span class="candidate-nominator">Artem Goncharov</span><span class="candidate-nominator">Thierry Carrez</span><span class="candidate-nominator">John Garbutt</span><span class="candidate-nominator">Mathias Fechner</span><span class="candidate-nominator">Tim Bell</span><span class="candidate-nominator">Amy Marrich</span></div>
                        <br />
                        <div>
                            <b>About Kurt Garloff</b>
                            <span>
                                <p>I'm currently leading the European Cloud initiative Sovereign &nbsp;Cloud Stack (SCS) as CTO - we have been able to get a grant from the &nbsp;German government to fund the coordination and some of the development &nbsp;work for this project. It's hosted by the Open Source Business Alliance &nbsp;(OSBA), a non-profit that represents the open source industry in &nbsp;Germany. The OSBA has joined the Open Infra Foundation as Associate &nbsp;Member. SCS is closely linked to the European initiative Gaia-X.&nbsp;</p>
                                <p>The idea behind SCS is to network the various Infra DevOps teams in &nbsp;the industry that build Open Source cloud and container stacks for their &nbsp;internal consumption or as public clouds. This avoids the duplication &nbsp;of work and the slight incompatibility that all of these efforts would &nbsp;have if not interlinked closely. SCS clouds are very compatible and can &nbsp;be easily federated. SCS also puts a lot of focus on operational tooling &nbsp;and processes, as high quality day 2 operations remains a challenge for &nbsp;many operator.</p>
                                <p>Dec 2018 - Dec 2019, I was responsible for the Cloud and Storage &nbsp;Departments in SUSE R&amp;D. SUSE was a strong long-time supporter and &nbsp;platinum member of the OIF, also hosting the HP Helion team after the &nbsp;M&amp;A transaction.</p>
                                <p>Before SUSE, I was leading the architecture, community and consulting teams in Deutsche Telekom's Open Telekom Cloud Team.<br />
                                DT has been a vocal supporter of OpenStack since I joined in early 2012.&nbsp;
                                </p>
                                <p>I have personally supported the InterOp Workig Group. I was serving &nbsp;in the board of the OIF in 2018 as Gold member director for DT and in &nbsp;2020 and 2021 as individual director.</p>
                                <p>Before joining DT end of 2011 I was a long-time contributor to the &nbsp;Linux kernel, which also gave me the privilege of building up and &nbsp;leading SUSE Labs and work with a number of great engineers in- and &nbsp;outside my company, contributing to the success of the Open Source technology.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/6804">View  Kurt Garloff's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://www.gravatar.com/avatar/d9f1acba3bfd264a2ef31c5ee7a4208b" alt="Mark Baker" />
                        <h4>Mark Baker</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Mark Baker</span><span class="candidate-nominator">Ben Roeder</span><span class="candidate-nominator">Victor Estival</span><span class="candidate-nominator">Hardik Dalwadi</span><span class="candidate-nominator">Hendricus Kessels</span><span class="candidate-nominator">Tytus Kurek</span><span class="candidate-nominator">Egle Sigler</span><span class="candidate-nominator">Dave Walker</span><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Mark Collier</span></div>
                        <br />
                        <div><b>About Mark Baker</b><span>Previously Product Manager in AWS EC2 and OpenStack PM at Canonical before that. Involved OpenStack since 2011, I helped design and release Canonical's OpenStack distribution from 2011 to 2018 and was an OpenStack Board Director for several years. A 25 year career in infrastructure software with Product Management, Product Marketings and Solutions architecture roles at Oracle, Red Hat, Canonical, MySQL and a couple of startups. Now recently joined Neo4j as lead PM for SaaS products running across a number of different clouds. I love spending time with Open Source infrastructure technology learning about the differing models, communities and the challenges of each.&nbsp;</span></div>
                        <a href="/a/community/members/16146">View  Mark Baker's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/profile-images/mnaser.jpg" alt="Mohammed Naser" />
                        <h4>Mohammed Naser</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Julia Kreger</span><span class="candidate-nominator">Erik Olof Gunnar Andersson</span><span class="candidate-nominator">Hassan Jamil Syed</span><span class="candidate-nominator">Michiel Piscaer</span><span class="candidate-nominator">Abdenour Yahiaoui</span><span class="candidate-nominator">Chandan Kumar</span><span class="candidate-nominator">Simon Leinen</span><span class="candidate-nominator">Wes Wilson</span><span class="candidate-nominator">Clemens Hardewig</span><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Abhisak Chulya</span></div>
                        <br />
                        <div>
                            <b>About Mohammed Naser</b>
                            <span>
                                <p>Over the past 10 years, I’m happy to have watched the hosting industry transform and be part of the transformation process as it evolved from traditional physical hardware to cloud-native infrastructure, powered by OpenStack.&nbsp;&nbsp;Since the creation of VEXXHOST, I have had the chance to work with different sorts of customers, ranging from growing small businesses to helping architect solutions for large Fortune 500 companies, based on OpenStack.&nbsp; I've helped integrate other open infrastructure projects into our commercial offering.</p>
                                <p>By fostering OpenStack at it’s early days in 2011, it has helped improve the project and our service as a whole. I’ve been a contributor to the project since and I have contributed code to almost every release of OpenStack since then.&nbsp; I've also served as PTL for Puppet OpenStack, continue to serve as a PTL for OpenStack-Ansible and serve on the technical commitee, chairing tthe commitee for a term.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/8899">View  Mohammed Naser's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/ricolintw" alt="Rico Lin" />
                        <h4>Rico Lin</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Allison Price</span><span class="candidate-nominator">Wes Wilson</span><span class="candidate-nominator">Mark Collier</span><span class="candidate-nominator">Rico Lin</span><span class="candidate-nominator">Horace Li</span><span class="candidate-nominator">Ghanshyam Mann</span><span class="candidate-nominator">Julia Kreger</span><span class="candidate-nominator">Amy Marrich</span><span class="candidate-nominator">Eric Guo</span></div>
                        <br />
                        <div>
                            <b>About Rico Lin</b>
                            <span>
                                <p><strong>Rico Lin,&nbsp;OpenStack Technical Committee (TC) member,&nbsp;Individual Board of Director for OpenInfra Foundation,&nbsp;Heat PTL, char for&nbsp;Multi-arch SIG, Senior Software Engineer at EasyStack.</strong></p>
                                <p>Experienced in OpenStack development (infra and app), Cloud architect, Container(docker and k8s), community(contribute and event host), and customer tech consults and supports.</p>
                                <p>Goals in OpenStack:</p>
                                <p>*&nbsp;Improve experiences of Cloud-native application on top of OpenStack(by improving infra and user experiences).<br />
                                *&nbsp;Blending OpenStack with other cloud solutions to make it become one indispensable layer.<br />
                                * Leverage&nbsp;the community differences across global (Include let Asia community get more actively&nbsp;join to&nbsp;others).
                                </p>
                            </span>
                        </div>
                        <a href="/a/community/members/33346">View  Rico Lin's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-dev/profile-images/aaaaa.jpg" alt="Shane Wang" />
                        <h4>Shane Wang</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Jonathan Bryce</span><span class="candidate-nominator">Allison Price</span><span class="candidate-nominator">Wes Wilson</span><span class="candidate-nominator">Mark Collier</span><span class="candidate-nominator">Horace Li</span><span class="candidate-nominator">Ruoyu Ying</span><span class="candidate-nominator">Ruijing Guo</span><span class="candidate-nominator">Huang Haibin</span><span class="candidate-nominator">JF Ding</span><span class="candidate-nominator">Rui Zang</span></div>
                        <br />
                        <div>
                            <b>About Shane Wang</b>
                            <span>
                                <p>Shane Wang is an Engineering Director of Cloud Infrastructure Software at Software and Advanced Technology Group at Intel. He has participated in or led his team on research and development of open source software projects such as Xen, tboot, Yocto and OpenStack before. He has been serving as an Individual Director of OpenStack Foundation Board since 2015, with years of commitment to community development and building. Currently he and his team is focusing on cloud native, cloud workloads and benchmarking, software-defined networking (SDN) and software-defined storage (SDS) technologies, edge computing, including OpenStack, Ceph, Kubernetes, Istio/Envoy, containerd, SODA (also known as OpenSDS), ONAP, Akraino, StarlingX, Smart Edge Open (also known as OpenNESS), OpenDaylight, OPNFV, DPDK, and so forth.</p>
                                <p>He got his PhD degree on Computer Science from Fudan University at Shanghai in 2004, and joined Intel after graduating from the school.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/4843">View  Shane Wang's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
                    </div>
                    <div class="candidate-wrapper">
                        <img src="https://avatars.io/twitter/https://twitter.com/vipratos" alt="Vipin Rathi" />
                        <h4>Vipin Rathi</h4>
                        <div><b>Nominated by:</b><span class="candidate-nominator">Prakash Ramchandran</span><span class="candidate-nominator">Ignesius Thambyraj</span><span class="candidate-nominator">Ruturaj Kadikar</span><span class="candidate-nominator">Trinath Somanchi</span><span class="candidate-nominator">Sajid Akhtar</span><span class="candidate-nominator">Vaidyanath Manogaran</span><span class="candidate-nominator">Anantha Padmanabhan CB</span><span class="candidate-nominator">Digambar Patil</span><span class="candidate-nominator">Kavit Munshi</span><span class="candidate-nominator">Geetika Batra</span></div>
                        <br />
                        <div>
                            <b>About Vipin Rathi</b>
                            <span>
                                <p>&nbsp;Vipin Rathi is an Assistant Professor at the University of Delhi. He is Chairperson of Linux Foundation Hyperledger Telecom SIG. He has board level experience as VP at Emerging Open Tech Foundation. He is the organizer of Openstack India, Magma India, CNCF Delhi, Open Edge Computing, Open Source Networking, Hyperledger Meetups. His research interest focus on 5G, Multi-Domain Orchestration. He is guiding a Research team to develop a Kubernetes-based Cloud-Native OpenStack named as KupenStack. He is an active member of Anuket, Magma Core. He attended and delivered presentations at various Open Source summits.</p>
                            </span>
                        </div>
                        <a href="/a/community/members/27619">View  Vipin Rathi's full candidate profile and Q&amp;A &gt;&gt;</a>
                        <hr />
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

const ElectionCandidatesPagePrevious = ({ data, isLoggedUser, candidates, location,
  getCandidates, electionStatus, getElectionStatus, loading }) => {

  useState(() => {
    getCandidates();
    getElectionStatus();
  }, [])

  const [today, setToday] = useState(moment().utc().unix())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch(`https://timeintervalsince1970.appspot.com/`)
      .then(response => response.json())
      .then(resultData => {
        if (resultData.timestamp) {
          setToday(Math.trunc(resultData.timestamp) - 7200);
          setReady(true);
        }
      })
      .catch(() => {
        setToday(moment().utc().unix());
        setReady(true);
      })
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
          <ElectionCandidatesPagePreviousTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            candidates={candidates}
            electionStatus={electionStatus}
            today={ready ? today : null}
            menu={post.frontmatter.menu}
            loading={loading}
            howToVote={post.frontmatter.howToVote}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  electionStatus: state.electionState.election_status,
  candidates: state.electionState.candidates,
  loading: state.electionState.loading
}), {
  getCandidates,
  getElectionStatus
}
)(ElectionCandidatesPagePrevious)


export const electionCandidatesPagePreviousQuery = graphql`
  query ElectionCandidatesPagePrevious($id: String!) {
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
        howToVote {   
          title
          description
        }      
      }
    }
  }
`
