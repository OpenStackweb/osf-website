---
templateKey: blog-post
title: "Inside Open Infrastructure: July 2026"
author: Allison Price
date: 2026-08-04T18:47:31.264Z
category:
  - value: category-h2Ztx9rpD
    label: Community
hidePost: false
seo:
  title: "Inside Open Infrastructure: July 2026"
  description: The latest from the OpenInfra Foundation
  url: https://openinfra.org/blog/openinfra-newsletter-july-2026
  twitterUsername: "@openinfradev"
---
### Introducing Kata Containers 4.0

The Kata Containers community has shipped Kata Containers 4.0, reinforcing the project's role as the open source foundation for sandboxing AI agents. Kata pairs the speed of Linux containers with the isolation of lightweight virtual machines, running each workload in its own VM rather than sharing a host kernel, an approach suited to agents whose behavior can shift unpredictably. Kata now serves as a supported runtime for [Agent Sandbox](https://agent-sandbox.sigs.k8s.io/), a project under the Kubernetes SIG Apps umbrella, and remains the foundation for [Confidential Containers](https://confidentialcontainers.org/), which lets agent workloads process private data without exposing it to the infrastructure operator.

The 4.0 release's central achievement is runtime-rs, a new Rust-based runtime that replaces the original Go implementation as the project's default, improving memory safety, shrinking the runtime's footprint and lowering startup latency. Read the full release overview on the [Kata Containers blog](https://katacontainers.io/blog/kata-containers-4-0-0-release-overview/).

Organizations already running Kata in production, including [Ant Group](https://katacontainers.io/collateral/kata-containers-ant-group-cwpp-ebpf_whitepaper.pdf), [Edgeless Systems](https://www.edgeless.systems/products/contrast), [Microsoft](https://katacontainers.io/blog/kata-containers-on-aks/) and [NVIDIA](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/overview.html), are building on the release to strengthen isolation for their agentic and confidential computing workloads. [Visit Superuser](https://superuser.openinfra.org/articles/why-ai-agents-need-stronger-sandboxing-and-what-the-kata-containers-community-is-doing-about-it/) to learn more about how Kata Containers is emerging as a critical building block for AI platforms.

### OpenInfra Foundation News

* The OpenInfra Foundation's Digital Sovereignty Working Group published two new whitepapers: a vendor-neutral comparison of [OpenStack vs proprietary clouds](https://openinfra.org/openstack-vs-proprietary-clouds-a-digital-sovereignty-comparison-guide), and a [practical guide](https://openinfra.org/best-practices-with-openinfra-for-digital-sovereignty) to building sovereign infrastructure with open source.
* OpenInfra Foundation's Kendall Nelson attended UN Open Source Week with delegates from 100+ countries. [Check out what she took away](https://openinfra.org/blog/un-opensource-week-and-digital-sovereignty) on digital sovereignty, AI's real-world limits, and the case for treating open source as an ecosystem, not a supply chain.
* KCD & OpenInfra Days Vietnam 2026 marked the first time Kubernetes Community Day and OpenInfra Days joined forces in Vietnam, bringing together more than 800 engineers, experts, and technology leaders in Hanoi. [Read the recap from Vietnam](https://www.vietnam.vn/en/ai-chi-tao-ra-nhung-gia-tri-dot-pha-khi-duoc-dat-tren-ha-tang-du-manh).
* Last month, the OpenInfra Foundation attended KubeCon + CloudNativeCon India 2026 with a clear takeaway: the open infrastructure community across the region is thriving. [Check out Jimmy McArthur’s recap](https://openinfra.org/blog/open-infrastructure-draws-strong-interest-at-kubecon+cloudnativecon-india-2026) on the growing OpenInfra community in India!
* If you’re interested in joining the global collaboration around open source infrastructure, consider [membership in the OpenInfra Foundation](https://t.e2ma.net/click/ud4ini/igq4cs/mbte08). [Book a meeting with Jimmy McArthur](https://t.e2ma.net/click/ud4ini/igq4cs/23te08) today!

### [OpenInfra Summit Asia](https://www.lfasiallc.com/kubecon-cloudnativecon-openinfra-summit-china/)

On September 8-9, [OpenInfra Summit Asia | KubeCon | CloudNativeCon | PyTorch Conference China](https://t.e2ma.net/click/ud4ini/igq4cs/yove08) will take place in Shanghai. This flagship event unites adopters, technologists, and community members from across the region to drive innovation in open-source infrastructure, cloud-native computing, and open-source AI around common, industry-wide use cases such as next-gen AI. Over two days, the OpenInfra community will collaborate with the PyTorch and CNCF communities across dozens of open technologies, including two of the most active open source projects to exist—Kubernetes and OpenStack—to shape the future of open source software and technology as a whole.

* Shanghai, China | Shanghai International Convention Center Oriental Riverside Hotel
* [Register](https://t.e2ma.net/click/ud4ini/igq4cs/ehwe08) 
* [View the Schedule](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/)

### [OpenStack](https://docs.google.com/document/d/1dK_dHXjYPZptgX8I6lfxldMmRoRfxTRC2K6uzUP1ivk/edit?tab=t.0)

* Deployers and operators are encouraged to upgrade their Ironic (including its Python Agent), Mistral, Nova, Neutron, Swift and Zaqar versions for several new important security fixes. As always, [consult the OpenStack Security site](https://security.openstack.org/) and [subscribe to the OpenStack Announcements mailing list](https://lists.openstack.org/mailman3/lists/openstack-announce.lists.openstack.org/) for the latest in official OpenStack Security Advisories and Security Notes.
* Running OpenStack? Share your feedback and deployment choices in the [OpenStack User Survey](https://www.openstack.org/user-survey/survey-2026). The deadline to be included in 2026 analysis is August 28, 2026.
* At the upcoming OpenInfra Summit in Shanghai, there are several [sessions covering OpenStack](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?search=openstack) with topics ranging from virtualization migration to bare metal management and AI agent sandboxing.

### [Kata Containers](https://docs.google.com/document/d/1tuX7R69c-2BAXNChdwmCQEXblAy9ocWFIpscKE869uk/edit?tab=t.0)

* At the upcoming OpenInfra Summit in Shanghai, [these sessions cover various Kata Containers topics](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?search=kata) including the 4.0 release and Kata’s growing role in AI agent sandboxing. 

### [StarlingX](https://docs.google.com/document/d/19V2FvemKvlxCKO6z8NsJfU7rNboLvYCAzzZ_8U-7RpI/edit?tab=t.0)

* If you’re evaluating or using StarlingX, please take a few minutes to fill out the [User Survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and provide feedback to the community!

### [Zuul](https://docs.google.com/document/d/1OrwXFZgITKTuqdcjXaSRKoT3UN1IxchI6-4gGTQzAHc/edit?tab=t.0)

* At the OpenInfra Summit in Shanghai, [Monty Taylor will demonstrate](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?search=zuul) how long-lived AI coding and review agents collaborate through Gerrit, Zuul, and Matrix, integrating seamlessly into the same open development workflows used by human contributors.

### [OpenInfra University Partnership Program (UPP)](https://openinfra.org/university-partnership-program/)

With the next round of semesters coming up, we are gathering more project ideas (across all OpenInfra projects)  for students to work on. If you have an idea AND are willing to mentor, [please add your proposal to the etherpad](https://etherpad.opendev.org/p/UPP-Projects%26Mentors)!

### More OpenInfra Community Events

* OpenInfra Days Nigeria | 29 August

  * **[Learn More](https://www.meetup.com/openstack-nigeria-user-group/events/315706846/)**
* KCD + OpenInfra + Ceph Day Korea |  1 September

  * [Register](https://community2.cncf.io/events/details/cncf-kcd-south-korea-presents-kcd-x-ceph-x-openinfra-day-korea-2026/) | [Sponsor](https://drive.google.com/file/d/1bU6MZvdkwUck5SyvxltGh724CnBgkwsP/view?usp=drive_link) 
* Project Teams Gathering (PTG) |  12 - 16 October

  * [Learn More](https://t.e2ma.net/click/ud4ini/igq4cs/aejf08)
* OpenInfra & Cloud Native Track at Sovereign Cloud Days Germany | October 22–25

  * [Learn More](https://t.e2ma.net/click/ud4ini/igq4cs/q6jf08) | [Sponsor](https://t.e2ma.net/click/ud4ini/igq4cs/6ykf08) | [CFP](https://t.e2ma.net/click/ud4ini/igq4cs/mrlf08) [](https://t.e2ma.net/click/ud4ini/igq4cs/2jmf08)  
* OpenInfra Track at the ALASCA Summit | 3 & 4 November

  * [Learn More](https://t.e2ma.net/click/ud4ini/igq4cs/i8ff08) | [Register](https://t.e2ma.net/click/ud4ini/igq4cs/y0gf08) | [Sponsor](https://t.e2ma.net/click/ud4ini/igq4cs/ethf08) | [CFP open until 31 July](https://t.e2ma.net/click/ud4ini/igq4cs/ulif08)

Visit [2026 OpenInfra events](https://t.e2ma.net/click/ud4ini/igq4cs/icnf08) for a full list of gatherings. For more information, contact [events@openinfra.org](mailto:events@openinfra.org).