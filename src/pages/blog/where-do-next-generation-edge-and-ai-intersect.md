---
templateKey: blog-post
title: "Where do Next Generation Edge Computing and AI Intersect?"
author: Ildiko Vancsa
date: 2025-07-09T13:15:41.306Z
category:
  - value: category-A7fnZYrE1
    label: News & Announcements
hidePost: false
seo:
  title: "Where do Next Generation Edge Computing and AI Intersect?"
  url: https://openinfra.org/blog/where-do-next-generation-edge-and-ai-intersect
  twitterUsername: "@openinfradev"
  description: OpenInfra Edge Computing Group releases new whitepaper to explore
    the edge AI technology space.
---
Enterprise edge computing adoption is now widespread, with market projections reaching $378 billion by 2028. As organizations embrace relevant use cases, they are also increasingly looking to incorporate artificial intelligence (AI) and machine learning (ML) into their solutions. 

Widespread adoption (75% of enterprises) of open source tools and architectures highlights a shift towards the need for collaborative and flexible solutions. The next logical step is to investigate incorporating AI and ML, subjects of much recent investment, research and development efforts. With the growing influence of AI, especially in real-time applications and automation, it is time to explore where edge computing, AI and open source meet and determine how the ecosystem can leverage the existing tools and identify gaps and potential new projects that can address the growing need for tools to support the next generation of Edge Computing flavored by AI.

In the newly published, [Next Generation Edge: Edge Computing Architectures for Artificial Intelligence and Machine Learning Use Cases](https://www.openstack.org/use-cases/edge-computing/next-generation-edge-edge-computing-architectures-for-artificial-intelligence-and-machine-learning-use-cases) whitepaper, the [OpenInfra Edge Computing Group](https://wiki.openstack.org/wiki/Edge_Computing_Group) focuses on exploring and sharing cutting edge research related specifically to use cases where AI and edge computing are both needed. The whitepaper serves as a foundation to understand the challenges and opportunities in applying the properties and constraints of edge computing to the requirements of AI use cases. As industries roll out new AI solutions, architectures from the core out to the edge need to be properly set up and configured to handle new types of workloads, often with higher resource demands. This is an area of research and development that has been somewhat overlooked by the general AI community.

The whitepaper highlights that this space is still in its infancy, with many challenges, requirements and next generation architectures needed to satisfy the edge AI use cases. The good news is that there are plenty of new applications of AI and edge computing in areas such as healthcare, automotive, supply chain, robotics, and more. 

However, while the architectural choices might be clearer, building them from open source components still needs more thought and preparation. It is time to create a knowledge base of new challenges and requirements for open source communities to start addressing this new problem space. Since using edge computing for AI use cases is such a new area of research and development, taking a cross-industry, collaborative approach to identify needs and address requirements is crucial.

On the flip side, there are already many communities, working groups and projects that can be directly applied to building solutions. Existing projects will need to be enhanced to fill in gaps, particularly where the two technology areas meet, which also opens opportunities to start new projects to introduce functionality that has not been previously available. Some examples include several OpenInfra projects that already include options that can serve as foundational building blocks to take AI use cases out to the edge. Both [OpenStack](https://www.openstack.org/) and [StarlingX](https://www.starlingx.io/) provide capabilities to run AI workloads in data centers, while the latter has been designed to provide massively distributed infrastructure, out to the edge.

The [Kata Containers](https://katacontainers.io/) project provides crucial functionality as an Open Source, secure container runtime. AI and ML workloads often use sensitive data, so the isolation that Kata lightweight virtual machines deliver is a key feature. Kata is already used for AI use cases, and can be further enhanced to support the latest hardware enhancements for more security and performance.

To further data management support, [EdgeLake](https://lfedge.org/projects/edgelake/) in the broader Linux Foundation landscape, is a fully decentralized, self-managed, and cryptographically secured data platform where data is processed, managed, and accessed in-place. The key capability of the project is that it allows data to be processed where it’s generated through a self-governing edge network.

For further projects in the edge computing or AI space, take a look at [LF Edge](https://lfedge.org/) and the [LF AI & Data Foundation](https://wiki.openstack.org/wiki/Edge_Computing_Group).

Growing interest in AI and edge computing is driving active investment in new and existing projects and working groups alike in the open source ecosystem, as a way to ensure long-term success. Make sure to follow and participate in relevant open source activities, and consider investing in or forming communities and projects to build that crucial shared knowledge base to build a strong and sustainable edge AI foundation.
Do you have an edge AI use case? [Get involved](https://wiki.openstack.org/wiki/Edge_Computing_Group#Group_Resources) in the [OpenInfra Edge Computing Group](https://wiki.openstack.org/wiki/Edge_Computing_Group) to share your use cases, requirements and build the next generation of edge AI architectures with OpenInfra projects.

#### About the OpenInfra Edge Computing Group

The OpenInfra Edge Computing Group was formed in 2017 coming out of an increased interest in understanding the challenges and opportunities of use cases that require more computational power closer to the end users or devices. The group has already published several [whitepapers](https://www.openstack.org/use-cases/edge-computing/g) on topics of interest to the edge computing community.

The working group initially set out to explore the newly emerging landscape to better understand the demands and requirements that these applications put on the network and overall end to end infrastructure. By collecting relevant use cases, the working group members started to analyze the types of architecture models and to define infrastructure systems needed to support applications that are distributed over a broad geographic area, with potentially thousands of sites, and located as close as possible to discrete data sources, physical elements or end users.

The OpenInfra Edge Computing Group’s main scope remains the software infrastructure stack. However, at the edge hardware features and network considerations play a larger role in defining and supporting the use cases, viable architecture options and tests for evaluating new and existing solutions. The OpenInfra Edge Computing Working Group addresses the needs for these solutions across different industries and global constituencies, to enable development activities for open infrastructure and other open source community projects.
