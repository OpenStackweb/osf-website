---
templateKey: blog-post
title: "Inside Open Infrastructure: April 2025"
author: Allison Price
date: 2025-04-21T17:11:25.697Z
category:
  - value: category-A7fnZYrE1
    label: News & Announcements
hidePost: false
seo:
  title: "Inside Open Infrastructure: April 2025"
  url: https://openinfra.dev/blog/openinfra-newsletter-april-2025
  twitterUsername: "@OpenInfraDev"
  description: Hear the latest around OpenDev, OpenInfra Summit Europe, OpenInfra
    Software Releases and more!
---
![](/img/graphics-for-su-10-.jpg)

# **OpenDev: Free Software Needs Free Tools**

[OpenDev](https://opendev.org/) is a community-managed software development collaboratory. OpenDev runs open-source tools to help developers build open-source software. Tools OpenDev manages include Gerrit for code review, Zuul for continuous integration, Etherpad for brainstorming, and Jitsi Meet for synchronous communication. Everything is deployed with Zuul and Ansible. That's right, OpenDev dogfoods its own tools to run the tools.

Things the OpenDev Team has been working on recently include:

* **Parallelizing OpenDev's continuous deployment jobs in Zuul that actually update the OpenDev servers. This has produced dramatic improvements to the time it takes to deploy changes.** It has been in the works for some time due to being an all-or-nothing switch. OpenDev can only run things in parallel if every deployment job is aware it is running in parallel and appropriately locking shared resources. OpenDev has spun up two new cloud regions in [Rackspace OpenStack Flex](https://www.rackspace.com/cloud/openstack-flex) to provide CI test job resources. OpenDev has an early beta deployment of the new zuul-launcher service, helping to ensure that Nodepool in Zuul is ready for everyone when it releases. Servers that host the OpenDev services are migrating onto Ubuntu Noble and from Docker to Podman as the container runtime. This enables speculative testing of container images in the OpenDev CI jobs while allowing us to move the hosting of the OpenDev container images outside of Docker hub.
* **Helped the OpenStack project release [Epoxy 2025.1](https://releases.openstack.org/epoxy/index.html) on time, merging more than 7,600 changes and running more than one million CI jobs in the process.** These CI jobs test that the software continues to function as it changes and produces the artifacts that ultimately make up the release itself.
* **Hosted the recent virtual PTG using the combination of Etherpad and Jitsi Meet also known as "Meetpad".** Hundreds of attendees came together to help build the future of Open Infra atop the open infrastructure OpenDev is hosting.

Looking ahead, the OpenDev team plans to upgrade more servers to Ubuntu Noble and upgrade services like Gerrit to newer versions. Keep an eye on the [announcement mailing list](https://lists.opendev.org/mailman3/lists/service-announce.lists.opendev.org/) for important details like outages related to these upgrades.

If any of this sounds interesting or exciting to you, the OpenDev team is always happy to have more help. Developers involved in the projects we host play a vital role in continuing to make OpenDev possible by getting their hands dirty and improving things alongside us. Feel free to reach out on the OFTC IRC network in #opendev or on the [discussion mailing list](https://lists.opendev.org/mailman3/lists/service-discuss.lists.opendev.org/) and ask how you can get involved.

Finally, it is worth mentioning that OpenDev is not alone in hosting developer tooling for open source projects. Many of us have recently had to take action to handle ill-behaved [AI web crawlers](https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/). In many cases, these crawlers are overly naive, don't respect robots.txt, request the same data over and over, or use the most inefficient methods for fetching data (https requests for every file in every git commit in a git repo rather than a single git clone and local traversal). If you are involved in running web crawlers, or know those who are, the OpenDev team would encourage you to ensure that you are being a good Internet citizen and not putting an undue burden on open source project hosts.

# OpenInfra Foundation News

* The [OpenInfra Member VMware Migration Working Group](https://www.openstack.org/vmware-migration-to-openstack) met again at the PTG to advance the upcoming VMware to OpenStack Migration Guide. Stay tuned in June for more information! 
* The OpenInfra Member OpenInfra AI Working Group also met at the PTG to begin an outline for a white paper that will be published in October.
* If you’re interested in participating in members-only opportunities, such as the VMware to OpenStack Migration Working Group or the OpenInfra AI Working Group, check out the [recent PTG recap](https://openinfra.org/blog/vmware-ai-working-groups-ptg) and consider [membership of the OpenInfra Foundation](https://openinfra.dev/join/members/). Contact [Jimmy McArthur](mailto:jimmy@openinfra.dev) today to find out more!

# OpenInfra Summit Europe

17-19 October | Paris-Saclay, France | École Polytechnique Campus

* [Learn More](https://summit2025.openinfra.org/) about the OpenInfra Summit Europe
* [Submit a Talk](https://summit2025.openinfra.org/cfp/) | The deadline is 13 June at 23:59 PT
* [Become a Sponsor](https://summit2025.openinfra.org/sponsor/) | The deadline is 26 September at 23:59 PT
* [Register Now](https://openinfrasummit25.dakini-pco.com/) | Prices increase on 29 July at 23:59 PT
* [Apply for Travel Support](https://openinfrafoundation.formstack.com/forms/openinfra_tsp) | The Deadline is 9 July at 23:59 PT

Have questions? Email [summit@openinfra.dev](mailto:summit@openinfra.dev) 

[Nominations for the 2025 Superuser Awards](https://openinfrafoundation.formstack.com/forms/superuserawards2025) are currently open! If you know of an organization (even your own!) who sets a high bar for open source infrastructure innovation, nominate them to be recognized by the global community! Nominations will close September 2 at 23:59 PT. The winner will be announced at the [OpenInfra Summit Europe](https://summit2025.openinfra.org/) on Friday, October 17.

# OpenStack: Open source software for creating private and public clouds

* [OpenStack 2025.1, Epoxy](https://www.openstack.org/software/openstack-epoxy/) is now available! Hear about the updates [directly from the community leaders](https://www.youtube.com/watch?v=qX2-8oyFVPk)!
* Check out [Superuser](https://superuser.openinfra.org/) to find the latest OpenStack case studies plus OpenStack + Kata Containers tutorials!

# Kata Containers: The speed of containers, the security of VMs

* The new [Kata Containers 3.15.0](https://github.com/kata-containers/kata-containers/releases) release is now available!
* The next Architecture Committee (AC) election is currently in progress, the voting period is open till Apr 28, 2025. Look out for notifications to announce the new AC!
* The Kata community participated in the recent PTG. Check out the [overview blog posts](https://katacontainers.io/blog/kata-community-ptg-updates-april-2025/) to learn what contributors discussed about the Rust runtime, performance testing, CI, and further topics

# StarlingX: A fully featured cloud for the distributed edge

* The latest [StarlingX 10.0](https://www.starlingx.io/blog/starlingx-release-10/) release is now available!
* The community has just finalized the planning phase for the 11.0 release cycle. In the implementation phase they will not accept any new ideas that require significant changes, but small improvements can still be added to the release plan.
* The StarlingX community participated in the recent PTG. Check out the [overview blog](https://www.starlingx.io/blog/starlingx-vptg-april-2025-recap/) post to learn more about what the project teams are currently working on.

# Zuul: Stop merging broken code

* [Zuul 12.0.0](http://%20zuul%2012.0.0%20released%20https//lists.zuul-ci.org/archives/list/zuul-announce@lists.zuul-ci.org/message/RU5EPJO22Q64ME73RXEA3ZW4IGPJXDPD/) has arrived!

# **Upcoming OpenInfra and Community Events**

**[Celebrate OpenStack's 15th Birthday](https://www.openstack.org/blog/celebrating-15-years-of-openstack/)**  

* 29 & 30 April: [Erlangen, Germany](https://www.meetup.com/openinfra-lowersaxony/events/306901826/) 
* 22 May: [Stockholm, Sweden](https://www.meetup.com/openinfra-user-group-sweden/events/306139678/)
* 5 June: [Rennes, France](https://www.meetup.com/fr-FR/openstack-rennes/events/306903998/)
* Check out [more upcoming celebrations](https://www.openstack.org/blog/celebrating-15-years-of-openstack/)!

**[OpenInfra User Group Sweden's 10th Anniversary](https://www.meetup.com/openinfra-user-group-sweden/events/306139678/)** 

* 22 May | Stockholm, Sweden | Biograf Skandia

<!--StartFragment-->

**OpenInfra Days Asia Roadshow**

* June & July | [OpenInfra Days Vietnam](https://www.vietopeninfra.org/void2025)
* 19 July | [OpenInfra Day Indonesia](https://www.linkedin.com/posts/openinfraid_openinfra-oid2025-openinfraid-ugcPost-7319909725951643648-UeNl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkFmC4BAjY_ZaQQLbuPSV1vjFRU6hVE5Pk) 
* 26 August | [OpenInfra Day Korea](https://openinfradays.kr/)
* July - September | [Cloud Operator Days Tokyo](https://cloudopsdays.com/)
* [And more](https://openinfra.org/days)!

**[OpenInfra User Group Colombia at Kubernetes Community Day](https://www.meetup.com/colombia-openinfra-user-group/events/307096751/)** 

* 29 August | Bogotá Colombia | Pontificia Universidad Javeriana

For more information about OpenInfra community events, please contact [events@openinfra.dev](mailto:events@openinfra.dev).