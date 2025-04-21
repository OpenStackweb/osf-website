---
templateKey: blog-post
title: "Inside Open Infrastructure: April 2025"
author: Allison Price
date: 2025-04-21T17:11:25.697Z
category:
  - value: category-A7fnZYrE1
    label: News & Announcements
hidePost: true
seo:
  title: "Inside Open Infrastructure: April 2025"
  url: https://openinfra.dev/blog/openinfra-newsletter-april-2025
  twitterUsername: "@OpenInfraDev"
  description: Hear the latest around the OpenInfra D&I Working Group, StarlingX
    R10.0 and more!
---
![](/img/graphics-for-su-1-.png)

**OpenDev: Free Software Needs Free Tools**

[OpenDev](https://opendev.org/) is a community-managed software development collaboratory. OpenDev runs open-source tools to help developers build open-source software. Tools OpenDev manages include Gerrit for code review, Zuul for continuous integration, Etherpad for brainstorming, and Jitsi Meet for synchronous communication. Everything is deployed with Zuul and Ansible. That's right, OpenDev dogfoods its own tools to run the tools.

Things the OpenDev Team has been working on recently include:

* **Parallelizing our continuous deployment jobs in Zuul that actually update our servers. This has produced dramatic improvements to the time it takes to deploy changes.** It has been in the works for some time due to being an all-or-nothing switch. OpenDev can only run things in parallel if every deployment job is aware it is running in parallel and appropriately locking shared resources. OpenDev has spun up two new cloud regions in [Rackspace OpenStack Flex](https://www.rackspace.com/cloud/openstack-flex) to provide CI test job resources. OpenDev has an early beta deployment of the new zuul-launcher service, helping to ensure that Nodepool in Zuul is ready for everyone when it releases. Servers that host our services are migrating onto Ubuntu Noble and from Docker to Podman as the container runtime. This enables speculative testing of container images in our CI jobs while allowing us to move the hosting of our container images outside of Docker hub.
* **Helped the OpenStack project release [Epoxy 2025.1](https://releases.openstack.org/epoxy/index.html) on time, merging more than 7,600 changes and running more than one million CI jobs in the process.** These CI jobs test that the software continues to function as it changes and produces the artifacts that ultimately make up the release itself.
* **Hosted the recent virtual PTG using the combination of Etherpad and Jitsi Meet that we call "Meetpad".** Hundreds of attendees came together to help build the future of Open Infra atop the open infrastructure OpenDev is hosting.

Looking ahead, the OpenDev team plans to upgrade more servers to Ubuntu Noble and upgrade services like Gerrit to newer versions. Keep an eye on our [announcement mailing list](https://lists.opendev.org/mailman3/lists/service-announce.lists.opendev.org/) for important details like outages related to these upgrades.

If any of this sounds interesting or exciting to you, the OpenDev team is always happy to have more help. Developers involved in the projects we host play a vital role in continuing to make OpenDev possible by getting their hands dirty and improving things alongside us. Feel free to reach out on the OFTC IRC network in #opendev or on our [discussion mailing list](https://lists.opendev.org/mailman3/lists/service-discuss.lists.opendev.org/) and ask how you can get involved.

Finally, it is worth mentioning that OpenDev is not alone in hosting developer tooling for open source projects. Many of us have recently had to take action to handle ill-behaved [AI web crawlers](https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/). In many cases, these crawlers are overly naive, don't respect robots.txt, request the same data over and over, or use the most inefficient methods for fetching data (https requests for every file in every git commit in a git repo rather than a single git clone and local traversal). If you are involved in running web crawlers, or know those who are, the OpenDev team would encourage you to ensure that you are being a good Internet citizen and not putting an undue burden on open source project hosts.

# OpenInfra Foundation News

* The OpenInfra Member [VMware Migration Working Group](https://www.openstack.org/vmware-migration-to-openstack) met again at the PTG to advance the upcoming VMware to OpenStack Migration Guide. Stay tuned in June for more information! 
* The OpenInfra Member OpenInfra AI Working Group also met at the PTG to begin an outline for a white paper that will be published in October.
* If you’re interested in participating members-only opportunities such as VMware to OpenStack Migration Working Group or OpenInfra AI Working Group, check out the [recent PTG recap](https://openinfra.org/blog/vmware-ai-working-groups-ptg) and consider [membership of the OpenInfra Foundation](https://openinfra.dev/join/members/). Contact [Jimmy McArthur](mailto:jimmy@openinfra.dev) today to find out more!

# **Community Events**

**Upcoming OpenInfra and Community Events**[](https://www.socallinuxexpo.org/scale/22x/events/open-infra-days)

[OpenInfra Summit Europe](https://summit2025.openinfra.org/)

* [](https://summit2025.openinfra.org/)17-19 October 2025 | Paris-Saclay, FR | École Polytechnique Campus
* [Submit a Talk ](https://summit2025.openinfra.org/cfp/)| The deadline is 13 June at 23:59 PT
* [Become a Sponsor](https://summit2025.openinfra.org/sponsor/) | The deadline is 26 September at 23:59 PT
* [Register Now](https://openinfrasummit25.dakini-pco.com/) | Prices increase on 29 July at 23:59 PT
* [Travel Support](https://openinfrafoundation.formstack.com/forms/openinfra_tsp) | The Deadline is 9 July at 23:59 PT
* Questions? Email [summit@openinfra.dev](mailto:summit@openinfra.dev)

[Celebrate OpenStack's 15th Birthday](https://www.openstack.org/blog/celebrating-15-years-of-openstack/)

* 29 & 30 April: [Erlangen, Germany](https://www.meetup.com/openinfra-lowersaxony/events/306901826/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal)
* 22 May: [Stockholm, Sweden](https://www.meetup.com/openinfra-user-group-sweden/events/306139678/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link)
* 8 May: Athens, GR
* 5 June: [Rennes, FR](https://www.meetup.com/fr-FR/openstack-rennes/events/306903998/?eventOrigin=group_upcoming_events)
* Check out [more upcoming celebrations](https://www.openstack.org/blog/celebrating-15-years-of-openstack/)!

Sweden

StackConf

* For more information about OpenInfra community events, please contact [events@openinfra.dev](mailto:events@openinfra.dev).

# OpenStack: Open source software for creating private and public clouds

*

# Kata Containers: The speed of containers, the security of VMs

*

# StarlingX: A fully featured cloud for the distributed edge

*