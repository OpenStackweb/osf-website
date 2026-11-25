---
templateKey: blog-post
title: The OpenStack Rabbit Hole That Became My Career
author: Winicius Silva
date: 2026-11-25T16:37:30.790Z
category:
  - value: category-h2Ztx9rpD
    label: Community
hidePost: false
seo:
  title: The OpenStack Rabbit Hole That Became My Career
  description: "Before starting my Computer Science degree, I had never used
    Linux, tinkered with open source, or worked with infrastructure software, at
    least not directly. "
  url: https://openinfra.org/blog/winicus-silva-openstack-rabbit-hole
  twitterUsername: "@openinfradev"
---
## The Very Beginning

Before starting my Computer Science degree, I had never used Linux, tinkered with open source, or worked with infrastructure software, at least not directly. When I began my studies at the Federal University of Campina Grande (UFCG), a friend convinced me to install Linux and customize my setup, telling me I’d probably end up using it for the rest of my career. Looking back, he was completely right.

I quickly fell down the rabbit hole of the Linux ecosystem, diving into open source, Bash, GNU, Unix philosophy, system administration, and all of these things. Around the same time, I joined an infrastructure study group at the university. We struggled a lot with networking, wrestling with our Proxmox cluster, and celebrating every time we learned something new.

## Discovering OpenStack

After a while, I got the opportunity to work at the Distributed Systems Laboratory (LSD) in the Computer Science department, helping maintain and operate a datacenter used for scientific research. The lab ran on an OpenStack-based cloud system. At the time, the datacenter housed around 40 blade servers and served over 100 users, with the OpenStack cluster providing more than 1TB of RAM, roughly 7,500 vCPUs, and 120TB of storage backed by Ceph.

Everything was new to me, from OpenStack, to Ceph, Ansible, Kubernetes, Terraform, monitoring. I was very happy to be learning all this. But over time, simply operating the cluster wasn't enough. I wanted to understand how these services work under the hood and actively contribute to them. The natural next step was getting involved in the community. Encouraged by a colleague who contributed to Ironic, I took my first steps as an OpenStack contributor, making small contributions to Ironic and sushy-tools while getting involved in mailing lists, IRC channels, PTGs, and community discussions.

This was a turning point in my career. It changed how I viewed open source and made contributions to other projects. Beyond the code, I picked up essential skills like mastering Git, conducting better code reviews, and understanding the true value of community collaboration.

## Stepping Into the Industry

Seeing Kubernetes everywhere in the industry sparked my curiosity about how it was deployed and structured under the hood. True to habit, I started researching open source projects at the intersection of Kubernetes and OpenStack. That’s how I stumbled upon the OpenStack Resource Controller ([ORC](https://github.com/k-orc/openstack-resource-controller/)) and [Gophercloud](https://github.com/gophercloud/gophercloud/). Contributing to these projects gave me a strong foundation in Kubernetes development while deepening my knowledge of OpenStack internals. That journey directly paved the way for my current role at Red Hat, where I work with OpenShift and OpenStack, helping build better products and support the open source communities behind them.



**About the Author:**

Winicius Silva, 22 and based in Brazil, has a bachelor's degree in Computer Science from the Federal University of Campina Grande. He is currently a Software Engineer at Red Hat, working on the integration between OpenShift clusters on top of OpenStack platforms. Winicius is also an open source contributor and maintainer of Gophercloud and openstack-resource-controller (ORC).