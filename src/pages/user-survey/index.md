---
templateKey: user-survey-page
seo:
  description: >-
    The Four Opens are guiding principles to successfully grow an open source
    community: open source, open design, open community, and open development. 
  image: /img/OpenInfra-icon-white.jpg
  title: 'User Survey Report'
  twitterUsername: '@OpenInfraDev'
  url: 'https://openinfra.dev/user-survey/'
title: User Survey Report
subTitle: OpenInfra Project Specific Deep Dives
about:
  display: true
  title: About the User Survey
  description: |-
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
  image: /img/user-survey/user-survey.png
surveyTypes:
  - logo: /img/user-survey/os-logo.png
    title: OpenStack
    button: 
      text: 'Take the OpenStack User Survey'
      link: '#'
    abstract: |-      
      The OpenStack User Survey has been fielded since 2013, and the OpenInfra Foundation does annual analysis (August to August) to identify new users, uncover trends and better understand the architectural choices made by OpenStack users. Due to the customization opportunities, this User Survey is the most detailed of all OpenInfra project user surveys.  
  
      Over 300 OpenStack deployments were logged this year, including a significant number of new clouds—in the last 18 months, over 100 new OpenStack clouds have been built, growing the total number of cores under OpenStack management to more than 25,000,000. This increase in cores is also supported by some known users witnessing incredible growth—including Walmart who has now exceeded 1 million cores in production.  
  
      Walmart is not alone: there are now seven organizations in the User Survey running over 1 million cores in production, including China Mobile, Verizon Media, LINE, Workday and a few additional organizations who would like to remain anonymous.  
  
      This growth was not limited to the largest deployments. Several deployments saw over 100% growth in their OpenStack footprints compared to 2020 while still remaining below 10,000 cores.  
  
      **Here is a full breakdown of logged OpenStack deployment sizes:**  

      * 1-9 cores: 6%  
      * 10-99 cores: 17%  
      * 100-999 cores: 28%  
      * 1,000-9,999 cores: 29%  
      * 10,000-99,999 cores: 13%  
      * 100,000-999,999 cores: 6%  
      * 1 million+ cores: 1%  

      Of the organizations who completed the 2021 survey, 79% are in production, 13% are under development and 8% are in the proof of concept stage.  
        
      When looking at the release of the deployment, the majority of organizations are running within the last seven releases:  
        
      - Trunk: 4%
      - Wallaby: 8%
      - Victoria: 16%
      - Ussuri: 18%
      - Train: 28%
      - Stein: 12%
      - Rocky: 14%
      - Queens: 11%
      - Pike: 7%
      - Ocata: 8%
      - Newton: 5%
      - Mitaka: 7%
      - Liberty: 2%
      - Kilo: 2%
      - Less than 1% of deployments logged in the OpenStack User Survey run Essex through Juno.

      <img src="/img/user-survey/user-survey-deployments 1.png)" />

      **Among the environments running OpenStack, several individual components saw considerable growth in production clouds:** 
      * Ironic: 26%, up from just 9% in 2016
      * Kolla: 28% up from 17% in 2020  
          * 2020: 17%  
          * 2021: 28%  
      * Magnum: 17% up from 10% in 2020  
          * 2020: 10%  
          * 2021: 17%  
      * Octavia: 36%, up from 25% in 2020  

      Over 200 deployments were recorded as interacting with another cloud. When asked which clouds their deployment interacted with, 53% of the respondents selected AWS, 40% selected Azure, 30% selected GCE, 34% selected another OpenStack private cloud, 13% selected an OpenStack public cloud and an additional 8% said other. Despite running multiple clouds, most respondents indicated that openstack powers more of their cloud infrastructure than any other platform.  
        
      **Regarding other tools within the deployments, the most popular choices include:**
        
      * Container orchestration or PaaS tool to manage applications on the OpenStack deployment: Kubernetes (68%)  
      * Tool to deploy / manage the cluster: Ansible (47%)  
      * OpenStack Network Driver: Open vSwitch (40%)  

      Organizations completing the 2021 OpenStack Deployment User Survey include CERN, the German Climate Computing Centre, Hospital Clínic de Barcelona, NASA Goddard Space Flight Center, Societe Generale, Vingroup and Workday. Hundreds of additional organizations have requested to remain confidential. 
        
      **The 2021 NPS score for OpenStack is 36. Some of the reasons provided included:**
        
      * (10) It exists; it works; it has an active community keeping it going. Also it's sort of the only realistic game in town when it comes to large cloud infrastructure.  
      * (10) OpenStack is very reliable- fast and cheap, especially in the networking space; it's very strong. If you want to automate your IT infrastructure, there's no way around OpenStack.  
      * (10) OpenStack is a stable- feature rich- on premise cloud provider. At this point nothing beats what OpenStack can offer.  
      * (8) The product is more and more perfected; it’s easy to set up and manage. But it still needs of course a wide range of knowledge and strong devops experience.  
      * (7) The core of OpenStack is robust, but upgrades can be tricky. We're now facing the OVS to OVN migration. It's a great community to be part of.  
      * (5) For cloud architects/sys-admins without OpenStack experience, the documentation can be kind of daunting to understand.  

      More OpenStack User Survey analysis can be reviewed on the [analytics dashboard](#).
  - logo: /img/user-survey/airship-logo.png
    title: Airship
    button: 
      text: 'Take the Airship User Survey'
      link: '#'
    abstract: |-
      Since the launch of the Airship User Survey in May 2020, ten organizations have completed it, spanning industries such as telecommunications, Information Technology, Academic / Research, Government / Defense, and Retail / Ecommerce. Of those organizations, half are running Airship in production, while 30% are actively evaluating Airship and 20% are considering it. 

      When asked what kind of workloads respondents were interested in, 10% selected Kubernetes workloads only, 20% selected VM workloads on OpenStack-helm only and the remaining 70% selected both. 

      Organizations who completed the Airship User Survey include ServerAnt, Havelsan and SK Telecom. Additional organizations have requested to remain anonymous.

      **Here are a few reasons respondents shared when asked which features of Airship affected their choice to use/consider/evaluate Airship:**

      * Easy package deployment of OpenStack-Helm, Kubernetes and MaaS, ensuring dependencies are checked and work. We have already deployed OpenStack-Helm on Kubernetes with MaaS and had many dependency issues when testing out different kubernetes distributions such as RKE2 (docker vs containerd) and k8s v1.20 vs 1.18 issues
      * Automation for NFV
      * Manifests are based on kustomize, has pipelines, potentially extendable for needs without code modification
      * Benefits of both deploying Kubernetes and OpenStack together because we will deploy 5G core network on it
      * My company has only been using a part of Airship v1.0. What I like the most is Airship's choice of architecture and toolsets, especially for v2.0. It reflects the most innovative technology to realize cloud native infrastructure, but with very deeply considered architecture for real use case
      * Ease of maintenance and management
      * Integration with OpenStack; CNCF support

      **The NPS score of the Airship project is 50. Some of the reasons provided included:**

      * (8) Airship 2 is really unique - it uses metal3/clusterApi that makes k8s deployment really easy. and at the same time can be used for day 2 to manage workloads. And what is very important - it's open source!
      * (9) Airship is a complete solution for cloud infrastructure.
      * (9) Easy to deploy, update and it is the future.
  - logo: /img/user-survey/kata-logo.png
    title: Kata Containers
    button: 
      text: 'Take the Kata Containers User Survey'
      link: '#'
    abstract: |-
      The Kata Containers User Survey opened in April 2020 and has recently undergone an update by the Architecture Committee. 

      **Since April 2020, 26 organizations have completed the survey, spanning industries such as:**

      * Information Technology (46%)
      * Academic / Research (15%)
      * Telecommunications (12%)
      * Consumer Goods (8%) 
      * Manufacturing / Industrial (8%) 
      * Healthcare (4%)
      * Government / Defense (4%) 
      * Gaming (4%) 
      * Finance (4%) 
      * Automotive (4%) 
      * Advertising (4%) 
      * Other (15%)


      Among those organizations, 58% are evaluating Kata Containers, 19% are considering using Kata Containers and 15% are running Kata Containers in production. 

      When asked which orchestrator an organization is using, 62% indicated Kubernetes, while 19% said Docker. The additional 24% did not specify. 

      While 57% of organizations said their workloads are a mixture of both short and long-running workloads, 24% said theirs are long-running (greater than 1 minutes) and 10% indicated theirs were short-lived (less than one minute). 

      **Here are some responses from what respondents like most about Kata Containers, besides “free” and “open”:**

      * Ability to provide a container consumption model to the user, yet provide a reduced attack surface. It serves as our base for confidential computing when integrated with AMD SEV and Intel TDX
      * Kata can provide the isolation that some workloads require when running on multi-tenanted infrastructure. For Kubernetes, it allows the secure execution of pods in a sandbox, limiting the impact of container escape attacks
      * Solves the shortcomings of Docker not being able to perform heavy I/O and heavy network applications
      * I think the best thing about the Kata community is that it provides many compiling, building and packaging tools to support a variety of hardware environments and operating systems

      Organizations who completed the Kata Containers User Survey include Baidu, Huawei, Qualogy, Federal University of Technology Minna Nigeria, AstroKube, Adobe Advertising Cloud and IBM Research. Additional organizations have requested to remain anonymous. 

      The Kata Containers User Survey has recently been updated by the community to learn more about operators’ architectural decisions around Kata Containers and how satisfied they are with the project and community.  
  - logo: /img/user-survey/starlingx-logo.png
    title: StarlingX
    button: 
      text: 'Take the StarlingX User Survey'
      link: '#'
    abstract: |-
      The StarlingX User Survey launched in March 2019 and has received over 30 responses. Of those organizations, 34% are interested in StarlingX, 46% are running a proof of concept, 15% are testing, and 4% are running StarlingX in production.

      **The edge use cases that organizations are turning to StarlingX for are:**

      * Multi-Access Edge Computing (MEC): 32% 
      * Industrial Automation: 26%
      * Universal Customer Premise Equipment (CPE): 20% 
      * Virtual Radio Access Network (RAN): 3% 
      * Healthcare: 3% 
      * Factory Automation / Industrial IoT: 3% 
      * Other: 13%

      Among the organizations selecting ‘Other,’ use cases included research in edge computing, uCPE, IoT nodes and gateways, and edge compute for very small clusters. 

      Organizations who have completed the StarlingX User Survey have requested to remain anonymous. 
  - logo: /img/user-survey/zuul-logo.png
    title: Zuul
    button: 
      text: 'Take the Zuul User Survey'
      link: '#'
    abstract: |-
      The Zuul User Survey began collecting responses in March 2020 and has received almost 30 organization submissions to date. 

      Of these organizations, a whopping 69% are running Zuul in production, 17% are evaluating Zuul, and 14% are considering using Zuul. 

      The amount of jobs run per day varies by organization. 69% of organizations run less than 100 jobs per day, 12% run 100-1,000 jobs per day, 8% run 1,000-10,000 jobs per day, 8% run 10,000 - 100,000 jobs per day and 4% run more than 100,000 jobs per day.  

      Organizations who completed the Zuul User Survey include BMW, Volvo, NTT, Wazo-Platform, Good Money, leboncoin, T-Systems, 99Cloud, CESNET, OpenDev, Red Hat and Just Eat. Additional organizations have requested to remain anonymous. 

      **When asked, what they like most about Zuul, besides “free” and “open,” respondents said:**

      * Solve a lot of the pain points I have with Jenkins. Job dependencies management; the advanced capabilities of executor; multi-node testing concept; integration of ansible; out of the box support of various drivers that save me from looking for plugins of varying level of quality. The community on IRC has been great.
      * Gating  - Cross Project Dependencies
      * The improved iteration cycle that Zuul gives teams when testing changes. The ability to interact with zuul using github comments to trigger actions. The irc channel that is very helpful when I have queries and has super fast and friendly responses.

      **The NPS score of the Zuul project is 59. Some of the reasons provided included:**

      * (8) The bottom-up approach. Needs some effort to get started but it feels like you can build your toolchain from scratch with just the necessary parts.
      * (8) Scalability at its core. - Bridging the multi-repo gap intelligently.
      * (9) Easy to use - we copy over everything from the open source/upstream repos as our stuff plugs into it, so it was a no-brainer. - Easy to define what needs to be tested, easy to understand, easy to add jobs or different 
      * (10) Speculative merge in our gate have saved us many times...An aspect that makes us willing to share expensive licenses, like those of embedded compilers, is the ability to set priority between check, gate and custom jobs. So when all nodes are busy, the most important jobs are run first and deadlines are secured. Infrastructure as code is a game changer, and something we appreciated when going from Zuul v2.6 to 3.18. As our software development teams deploy on more embedded targets we get dependencies between different projects. Here we have started to enjoy the ability to set cross project dependencies.
      * (10) Solve a lot of the pain points I have with Jenkins. Job dependencies management; the advanced capabilities of excutor; multi-node testing concept; integration of ansible; out of the box support of various (10) drivers that save me from looking for plugins of varying level of quality. The community on IRC has been great.
      * (10) Zuul's gating functionality allows our users to land code knowing that it works. This makes releasing software on time simple and easy. Additionally Zuul's ability to test many pieces of software from different locations allows us to run complex test jobs that simulate real world deployments.
      * (10) The improved iteration cycle that Zuul gives teams when testing changes. The ability to interact with zuul using github comments to trigger actions. The IRC channel is very helpful when I have queries and has super fast and friendly responses.  
---
