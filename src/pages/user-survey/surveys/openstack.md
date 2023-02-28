---
logo: /img/user-survey/os-logo.png
userSurvey: true
title: OpenStack
order: 1
button:
  text: "Take the OpenStack User Survey"
  link: "https://openstack.org/usersurvey"
---

The OpenStack User Survey has been fielded since 2013, and the OpenInfra Foundation does annual analysis (August to August) to identify new users, uncover trends and better understand the architectural choices made by OpenStack users. Due to the customization opportunities, this User Survey is the most detailed of all OpenInfra project user surveys.

Over 300 OpenStack deployments were logged this year, including a significant number of new clouds—in the last 18 months, over 100 new OpenStack clouds have been built, growing the total number of cores under OpenStack management to more than 25,000,000. This increase in cores is also supported by some known users witnessing incredible growth—including Walmart who has now exceeded 1 million cores in production.

Walmart is not alone: there are now seven organizations in the User Survey running over 1 million cores in production, including China Mobile, Verizon Media, LINE, Workday and a few additional organizations who would like to remain anonymous.

This growth was not limited to the largest deployments. Several deployments saw over 100% growth in their OpenStack footprints compared to 2020 while still remaining below 10,000 cores.

**Here is a full breakdown of logged OpenStack deployment sizes:**

- 1-9 cores: 6%
- 10-99 cores: 17%
- 100-999 cores: 28%
- 1,000-9,999 cores: 29%
- 10,000-99,999 cores: 13%
- 100,000-999,999 cores: 6%
- 1 million+ cores: 1%

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

<br/>

<div style="max-width: 1000px; width: 90%;">
<img src="/img/user-survey/user-survey-deployments 1.png" alt="OpenStack - Projects used in Production Deployments">
</div>

<br/>

**Among the environments running OpenStack, several individual components saw considerable growth in production clouds:**

- Ironic: 26%, up from just 9% in 2016
- Kolla: 28% up from 17% in 2020
  - 2020: 17%
  - 2021: 28%
- Magnum: 17% up from 10% in 2020
  - 2020: 10%
  - 2021: 17%
- Octavia: 36%, up from 25% in 2020

Over 200 deployments were recorded as interacting with another cloud. When asked which clouds their deployment interacted with, 53% of the respondents selected AWS, 40% selected Azure, 30% selected GCE, 34% selected another OpenStack private cloud, 13% selected an OpenStack public cloud and an additional 8% said other. Despite running multiple clouds, most respondents indicated that openstack powers more of their cloud infrastructure than any other platform.

**Regarding other tools within the deployments, the most popular choices include:**

- Container orchestration or PaaS tool to manage applications on the OpenStack deployment: Kubernetes (68%)
- Tool to deploy / manage the cluster: Ansible (47%)
- OpenStack Network Driver: Open vSwitch (40%)

Organizations completing the 2021 OpenStack Deployment User Survey include CERN, the German Climate Computing Centre, Hospital Clínic de Barcelona, NASA Goddard Space Flight Center, Societe Generale, Vingroup and Workday. Hundreds of additional organizations have requested to remain confidential.

**The 2021 NPS score for OpenStack is 36. Some of the reasons provided included:**

- (10) It exists; it works; it has an active community keeping it going. Also it's sort of the only realistic game in town when it comes to large cloud infrastructure.
- (10) OpenStack is very reliable- fast and cheap, especially in the networking space; it's very strong. If you want to automate your IT infrastructure, there's no way around OpenStack.
- (10) OpenStack is a stable- feature rich- on premise cloud provider. At this point nothing beats what OpenStack can offer.
- (8) The product is more and more perfected; it’s easy to set up and manage. But it still needs of course a wide range of knowledge and strong devops experience.
- (7) The core of OpenStack is robust, but upgrades can be tricky. We're now facing the OVS to OVN migration. It's a great community to be part of.
- (5) For cloud architects/sys-admins without OpenStack experience, the documentation can be kind of daunting to understand.

More OpenStack User Survey analysis can be reviewed on the [analytics dashboard](#).
