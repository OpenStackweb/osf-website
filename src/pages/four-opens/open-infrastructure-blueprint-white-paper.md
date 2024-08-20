---
templateKey: generic-page
seo:
  title: Open Infrastructure Blueprint White Paper
  description: "Building the OpenInfra Standard: How Linux, OpenStack, and
    Kubernetes Combine to Deliver an Open Source Powered Infrastructure Stack"
  url: https://openinfra.dev/open-infrastructure-blueprint-white-paper
  image: /img/openinfrafoundation-logo-rgb-stacked.jpg
  twitterUsername: "@openinfradev"
title: Open Infrastructure Blueprint White Paper
subTitle: "Building the OpenInfra Standard: How Linux, OpenStack, and Kubernetes
  Combine to Deliver an Open Source Powered Infrastructure Stack"
---
# Introduction

Open source has proven that it is as production ready as proprietary software. Open source has proven that it can scale and integrate with other technologies to reach the needs of almost any use case. One collection of open source projects in particular has risen as a powerful top-to-bottom open source infrastructure stack. This stack is made with Linux, OpenStack and Kubernetes. These open source projects are three of the top most active open source projects in the world.

#### Linux

Linux has long been established as the de facto open source operating system (OS) standard. Linux is one of the most active open source projects in the world. There are a variety of distributions of Linux, some of which will be mentioned further on in this whitepaper.

#### OpenStack

OpenStack has taken its place as the de facto open source cloud infrastructure standard. 

#### Kubernetes 

Since the rise of containerization,a number of projects that have vied for the top spot. Kubernetes has outlasted its competition and established itself as the de facto open source container orchestration software.

## Benefits

### The Value of Open Source Software

**Well-tested, well-used, well-supported technology**

Users from individual professionals to the world's largest enterprises use open source software every day. Open source software like Linux, OpenStack, and Kubernetes benefit from the experiences of a large, diverse user base engaging in a wide variety of use cases. Such widespread and heterogeneous use helps to ensure problems in the software are more quickly identified and resolved than in proprietary software with more limited support models. It also ensures that from the start of the development process through to its completion, the software is robustly engineered.  

Open source software apparently has a major economic advantage, which is due to the fact that most of it is available free of charge, but that argument needs some closer inspection: while this distribution model is most often available and highly appreciated by individuals, research organization, or for Proofs of Concept (PoCs), most enterprises decide to deploy a commercial setup which often includes support or maintenance of setups or services. However, even for these segments, open source software has the advantage that the risk of a vendor lock-in is considerably reduced, since every user of open source software has the right to further develop it (so-called forking) under a likewise license.

On a strategic level, much higher ranked than open source software’s economic advantages are attributes like freedom, flexibility, transparency, reliability, and security. As the source code is always available for its users, they or their service providers are able to inspect, fix if needed, or enhance the software.

Additional advantages of open source software are the innovation and quality features that stem from the open development model. Most open source software is developed by communities formed of dedicated individuals, typically including dedicated staff members of several otherwise competing companies. This development model enables best-of-breed solutions and reduces the “not-invented-here” syndrome, otherwise often observed in proprietary industries. This collaboration is coordinated and governed under the umbrella of organizations like the Open Infrastructure Foundation.

**Focus on the work that is most important**

Open source software provides solutions that are ready to fit the technology needs of organizations. When organizations adopt open source software, they can focus on delivering value to their customers instead of spending limited resources developing and supporting their own technology. Users of open source software can leverage the support of the global open source community.

**Freedom from encumbering licenses and restrictions**

Open source software does not carry expensive, limiting, and innovation-hindering licenses found in many proprietary technology solutions. Organizations can freely use and modify open source software to meet their needs without needing anyone's permission or consent. Their choice of technology, when choosing open source, does not lock them into specific vendors or put them at risk of user-hostile license changes.

**Vibrant community of users, providers, developers**

Users of open source software enjoy the mutual support of large communities of users, providers, and developers. Open source communities like the OpenStack and the Kubernetes communities are valuable resources for their experience, their knowledge, and their contributions to the success of everyone who uses the community's software.

### Do more with OpenStack and Kubernetes than with either one alone

**Deploy container-based, virtual machine-based, and bare metal-based workloads in the same infrastructure**

Integrating OpenStack and Kubernetes in the same infrastructure provides organizations with the ability to provision and manage workloads in containers, virtual machines, and bare metal machines through a single solution instead of dividing up workloads across multiple infrastructure providers. Organizations who integrate OpenStack and Kubernetes in their infrastructure enjoy all the benefits of OpenStack and Kubernetes without the additional overhead of separate infrastructure deployments.

**Augment the capabilities of OpenStack and Kubernetes**

Using OpenStack and Kubernetes together produces multiple opportunities to enhance the functionality of both platforms beyond what they each provide on their own.

Kubernetes users can use OpenStack's services to manage container ingress, provide container storage and image registry storage, store secrets, provide cluster overlay networking, and authenticate requests instead of building their own solutions for these needs. OpenStack also has services for simplified provisioning and management for Kubernetes clusters on top of OpenStack.

OpenStack users can run OpenStack services in containers on Kubernetes and benefit from the administration, monitoring, self-healing, and other functionality Kubernetes provides for container workloads. OpenStack users can produce more flexible and more manageable OpenStack deployments using Kubernetes.

### Use the same tools to manage workloads at all stages of their lifecycles

OpenStack and Kubernetes have well-developed, documented application programming interfaces (APIs) for interacting with workloads on OpenStack and Kubernetes, and they both support many of the most popular workload management tools. When organizations use OpenStack and Kubernetes together, they can reduce the cost and complexity of managing their infrastructure by standardizing on tools that support both OpenStack and Kubernetes.

# Layers and Integration

While setting up and maintaining a cloud is conceptually somewhat similar to working with standalone servers and systems, the scale of maintained systems in a cloud is often larger by several orders of magnitude. That’s why the base deployment architecture is so influential to the future cloud setup.

In the wild, several basic forms of layering of individual components have emerged, including some surprising structures. 

Probably the oldest form of deployment is to install a core set of OpenStack services on bare metal servers manually. Once a cloud setup is bootstrapped, more automated methods can be employed. Several variants of this approach are available to address the initial bootstrap and maintenance process (see section XXX). 

There are genuine OpenStack services that accommodate Kubernetes’ base infrastructure, or users install the subsystem as one would install it on the virtualized servers. 

Several cloud service providers (CSPs) offer dedicated services for a managed Kubernetes platform. The advantage offered by this approach is that  the user only needs to care about the domain-specific, containerized application software, leaving both the maintenance of the infrastructure-as-a-service (IaaS) and platform-as-a-service (PaaS) to the CSP.

Even more complex composed architectures are possible, such as a Kubernetes platform hosting containerized OpenStack services with another Kubernetes layer of application software on top.

## Kubernetes on OpenStack

As the de-facto standard of the infrastructure layer (IaaS), the OpenStack ecosystem focuses on the virtualization layer between physical hardware and virtual machines. Over ten years of evolution, OpenStack has built a full-stack solution, including projects and tools taking full advantage of hardware virtualization and utilization. 

The Kubernetes ecosystem is the de-facto standard of the platform or application layer (PaaS). It focuses on the containerization layer between operating systems and cloud-native applications. Kubernetes-related projects are most likely classified into the PaaS layer.

Kubernetes on OpenStack is a best fit for taking advantage of the capabilities of two matured ecosystems. The wide array of OpenStack services can handle heterogeneous platforms and devices, abstracting them effectively to provision, scale, and manage the lifecycle of Kubernetes clusters. End users can manage their applications with Kubernetes cloud natively. This architecture allows data centers to be upgraded without interfering with business. It also provides a way for applications to co-exist or transition between bare metal servers and virtual machines provisioned on OpenStack to application pods managed on Kubernetes. This flexibility gives users time to transform their applications to be cloud native. 

With the evolution of cloud technologies, cloud management systems are required to handle multivariate compute resources simultaneously, including virtual machines and containers. In active production environments, large quantities of data centers are built with OpenStack, and businesses are running on virtual machines. With the rise of Kubernetes, applications and cloud platforms are evolving based on cloud-native design principles. For those active production platforms, it is easy to benefit from both virtual machines and containers by running Kubernetes on OpenStack.

OpenStack is used to provision the virtual machines and/or bare metal servers upon which Kubernetes is deployed. In production, containerized applications can be orchestrated on either infrastructure base or both, and a cloud operation management system can control the lifecycle of applications based on their resource requirements and schedule.

Organizations will find it relatively easy to move from a basic OpenStack cloud to something more complex (for example, integrating Kubernetes to meet more use cases) and to do so without interrupting the flow of business. Using OpenStack with Kubernetes yields more isolation between architectural layers and more precise resource management.

Projects from the OpenStack ecosystem and Kubernetes ecosystem can be shared in one combined infrastructure. For example, Neutron from OpenStack can serve as a network micro service for virtual machines, bare metal  servers, and containers. One Neutron instance can support the whole system by sharing. It minimizes basic resource requirements for a service, system complexity and total cost. Other projects such as Keystone and Prometheus can serve the same way.

## OpenStack on Kubernetes

Deploying OpenStack on Kubernetes represents a cutting-edge approach to infrastructure management, harnessing the modularity and orchestration capabilities of Kubernetes to enhance the flexibility and scalability of OpenStack environments. This powerful combination brings together the comprehensive cloud services of OpenStack with the robust container orchestration of Kubernetes, resulting in a dynamic and resilient platform that can efficiently manage both virtual machines and containerized applications.

With Kubernetes at the helm, OpenStack components are containerized, enabling them to be deployed, scaled, and managed with unprecedented precision. Kubernetes' self-healing features, such as automatic restarts and rollouts, ensure that the OpenStack control plane maintains high availability and operational consistency. Furthermore, Kubernetes' native tools for automated scaling and management lend themselves to the complex and often shifting demands of cloud infrastructure, providing a seamless, responsive experience for cloud administrators.

The architecture significantly simplifies operational overhead, as teams can leverage cloud-native tools to streamline deployment processes, monitor system health, and apply updates with minimal disruption. The utilization of these tools not only reduces the need for manual intervention but also enhances the ability to respond rapidly to changes, ensuring a consistently optimized environment. With the ability to leverage cloud-native tools, operators gain the advantage of a familiar and comprehensive toolkit for managing their infrastructure, which can lead to improved efficiency and a reduced learning curve for new staff. These cloud-native capabilities empower teams to adopt best practices such as continuous integration and continuous deployment (CI/CD), further automating the lifecycle of cloud services and fostering a culture of innovation. Combining Kubernetes and OpenStack can reduce operational costs and overhead for teams familiar with cloud-native approaches to managing infrastructure. 

Beyond operational simplification, these advanced tools integrate smoothly with existing CI/CD workflows, offering operators the flexibility to deploy updates and new features rapidly and securely. This fosters an environment where innovation is encouraged, and changes can be rolled out with confidence and precision. Additionally, the platform's design for resiliency includes features such as automatic bin-packing and resource optimization, ensuring that applications not only remain highly available but also run efficiently, reducing waste and optimizing cost. The embrace of cloud-native principles means that infrastructure can be treated as code, allowing for repeatable, predictable deployments and the creation of immutable infrastructure patterns.

This integration facilitates a cloud infrastructure that is both agile and robust, capable of adapting to the evolving needs of businesses while maintaining the reliability expected of enterprise-grade platforms. The synergy between OpenStack and Kubernetes lays the foundation for a new era of cloud computing, where the benefits of containerization and traditional virtualization are no longer mutually exclusive but are instead combined to create a versatile and powerful cloud ecosystem.

## OpenStack Services Supplementing Kubernetes Containers

OpenStack deployments today host tens of thousands of Kubernetes clusters with secure multi-tenancy as the bedrock. OpenStack Magnum is a Container Orchestration Engine (COE) management service that is part of the OpenStack ecosystem. It allows users to create container orchestration engines, including Kubernetes, as first-class resources on an OpenStack deployment. Magnum traditionally used Heat Orchestration Templates (HOT) for deployment; however it now supports the Kubernetes Cluster API as a driver option. Magnum allows the Kubernetes clusters that it creates to be scaled at any time. It also provides access to the underlying OpenStack services for managing networking and storage. If an administrator Kubernetes cluster is not readily available to bootstrap as well as manage other Kubernetes clusters, the "OpenStack Cluster API Provider" is a great alternative. The OpenStack Cluster API provider integrates with the Cluster API project and is developed within the Kubernetes community. It uses OpenStack services such as Nova, Ironic, Cinder, Octavia, Designate and Neutron to set up the necessary compute virtual machines, bare metal hosts, self-service storage, networks, DNS, and load balancers. 

As OpenStack itself comprises several independent service components, these services can by themselves be encapsulated into containers and thus managed by Kubernetes. That leaves the challenge to deploy an initial Kubernetes setup directly on bare metal. However, the Kubernetes community has addressed this task with several customized installers. This approach has advantages as it can facilitate sophisticated Kubernetes features like those for scaling and resilience.

## Tools

### Atmosphere

Atmosphere is an open source deployment tool tailored to efficiently manage OpenStack cloud infrastructures. It offers a full-fledged suite of capabilities for diverse deployment scenarios, from cloud to hosted and on-premises editions. It leverages Kubernetes and OpenStack-Helm for an automated and repeatable deployment process, ensuring consistent provisioning of OpenStack resources. The platform's technical prowess is further evident in its built-in monitoring, alerting capabilities, and sophisticated identity management through Keycloak, enhancing security and streamlining user access. 

From a technical standpoint, Atmosphere excels with its meticulous integration of advanced networking technologies and storage configurations. It supports a range of hardware acceleration options like Mellanox ASAP2 and Open vSwitch (OVS) offloading, improving network throughput and latency. The platform's container storage interface (CSI) and automated secure sockets layer (SSL) management through cert-manager complement its seamless handling of block storage and image services. For Kubernetes orchestration, Atmosphere employs a custom Cluster API driver, facilitating the cohesive management of containerized and traditional virtual machine workloads within a unified infrastructure. The platform is built to facilitate a smooth migration from various environments, including VMware and AWS, ensuring minimal disruption.

### Kolla

The Kolla project provides production-ready containers and tools for deploying and managing OpenStack clouds. Kolla builds and maintains container images for OpenStack services and for other infrastructure components, like MariaDB, HAProxy on which OpenStack depends and also OpenSearch and Prometheus which are useful in deploying a monitoring/observability stack on which OpenStack depends. In addition to container images, the Kolla project family maintains Ansible playbooks and additional tooling organized under the Kolla-Ansible sub-project for quickly deploying OpenStack with minimal experience. The Kolla project also produces an integrated technology stack for deploying OpenStack to bare metal machines under the Kayobe sub-project.

Kolla's technology enables cloud administrators with limited OpenStack experience to deploy OpenStack clouds using well-tested, opinionated configurations with support for further customization as cloud administrators grow as OpenStack operators. Kolla's container-based architecture for OpenStack enables simplified updates, better orchestration, and easier management for OpenStack services. Kolla enables an easier path for deploying, operating, and managing OpenStack while keeping OpenStack fully available for experienced OpenStack administrators.

### Metal3

Metal3 is one of the most successful attempts to bring bare metal capabilities into Kubernetes. Metal3 get its “secret sauce” from Ironic, the bare metal provisioning and management project developed under the OpenStack umbrella. Metal3 relies on Ironic for all interactions with the hardware, concentrating instead on Kubernetes-native BareMetalHost API and integration with the Cluster API.

Among the main factors contributing to the success of Metal3 was the focus of OpenStack projects on providing clean and well-defined APIs targeted both at end users and other services. Metal3 did what OpenStack Compute (Nova) had already been doing: using Ironic to add bare metal machines to the cluster. By thinking in terms of API, Ironic developers created a foundation for projects they couldn't even envision. As often happens in successful collaborations, Ironic benefited as well from being exposed to the Kubernetes world in terms of features as well as fresh feedback from new users.

Recently, Metal3 has applied for incubation in the Cloud Native Computing Foundation (CNCF). If this happens, it will be strong proof of the value of OpenStack in the container-native world.

### OpenStack-Helm

The OpenStack-Helm project leverages Helm, Kubernetes' package manager, to deploy, manage, and seamlessly upgrade OpenStack services within Kubernetes clusters. Helm charts simplify the deployment, management, and scaling of OpenStack components like Nova, Neutron, and Keystone, while benefiting from Kubernetes' scheduling, scaling, and self-healing capabilities. OpenStack-Helm provides charts not only for OpenStack components but also for backend services like MariaDB, RabbitMQ, and Memcached.

OpenStack-Helm charts are highly flexible, allowing users to modify Kubernetes resources, annotations, labels, and liveness/readiness checks and to use custom images and OpenStack configurations as needed. This flexibility ensures that users can tailor the charts to meet their specific deployment needs and operational requirements. Additionally, users can opt for third-party backend charts and various container network interface (CNI) and CSI plugins to suit their specific infrastructure requirements.

### OpenStack Magnum

Magnum in OpenStack makes container orchestration engines (COEs), such as Kubernetes andDocker Swarm, available as first-class resources. It leverages existing OpenStack components to provision the necessary infrastructure for running containers. It uses Heat for automating the infrastructure and taps Keystone, Neutron, and Cinder for authentication, networking and block storage, respectively. Magnum abstracts the underlying infrastructure and allows users to manage COEs through the OpenStack API and command line interface (CLI). It integrates seamlessly with OpenStack by leveraging the services and components mentioned above. As a result, Magnum makes OpenStack a good candidate for enterprises to provide isolated environments for different teams or projects using OpenStack’s multi-tenancy features. Organizations can deploy a hybrid cloud setup where part of the infrastructure is on-premises (using OpenStack) and part is in the public cloud, with Magnum providing a unified container management layer. Developers and operations teams can leverage Magnum to create containerized development, testing, and production environments, streamlining the CI/CD pipeline. It allows for easy scaling of containerized applications by managing the underlying infrastructure through OpenStack. Magnum provides a powerful tool for integrating container orchestration engines with OpenStack, offering flexibility and scalability for managing containerized applications. However, it requires careful planning and management to overcome the inherent complexity and resource requirements.

### OpenStack Kubernetes Operators

OpenStack Kubernetes Operators is a collection of custom Kubernetes controllers and Custom Resource Definitions that extend the Kubernetes API to deploy OpenStack services as application pods on a Kubernetes Cluster. These operators can manage the full lifecycle of OpenStack services including deployment, scaling, upgrades, backup, and recovery. Human operators can encapsulate OpenStack configuration in a declarative manifest using common Kubernetes objects such as ConfigMaps, secrets, persistent volumes, routes and endpoints. There are operators capable of running tasks with automation tools such as Ansible, and these are in-turn used to deploy services on a managed group of bare metal servers. One use case for bare metal servers would be to create a cluster of OpenStack Compute nodes. The collection also includes operators that assist in “adopting” an existing non-podified OpenStack installation deployed via the Triple-O (“OpenStack on OpenStack”) project into Kubernetes. Users can validate their clouds with the help of a “test-operator” that automates OpenStack API and end-to-end tests within the OpenStack Tempest project, natively on Kubernetes. 

### OpenStack Sunbeam

OpenStack Sunbeam is a new OpenStack project for deploying small and large OpenStack clouds as simply as possible. OpenStack Sunbeam uses Open Container Initiative (OCI) images, Kubernetes Operators, and other Kubernetes-native principals to produce ready-to-use, production-quality OpenStack clouds in minutes without requiring extensive OpenStack experience. Both experienced and new OpenStack administrators can deploy upstream OpenStack quickly and easily to their local machines, to small data center clusters, to the edge, or to large enterprise clouds with a single set of tools. OpenStack administrators can rely on OpenStack Sunbeam's well-tested, opinionated default configuration or customize their OpenStack deployments to meet their unique needs. OpenStack Sunbeam is the successor to the Charmed OpenStack community project and uses Ubuntu, Snaps, Juju, Terraform, and Kubernetes to create and manage full-featured OpenStack deployments.

### Terraform/OpenTofu

Terraform and OpenTofu are tools for managing infrastructure deployments following the Infrastructure-as-Code (IaC) philosophy to data center management. Terraform is published by HashiCorp, the maker of other popular software like Vault, Nomad, and Consul. OpenTofu is the community-driven, open source fork of Terraform managed by the Linux Foundation. OpenStack administrators can use Terraform and OpenTofu to automate managing and deploying OpenStack infrastructure and OpenStack resources. The community-driven OpenStack Terraform provider enables Terraform and OpenTofu to interface with OpenStack's APIs for provisioning OpenStack resources such as instances, networks, flavors, images, security groups, users, projects, and storage volumes. There are also Terraform providers for many of the tools OpenStack administrators use to deploy OpenStack. Terraform and OpenTofu provide a single tool for deploying every aspect of the lifecycle of cloud workloads on OpenStack.

### YAOOK

Yaook is an open source lifecycle management tool for OpenStack hosted by ALASCA, a non-profit association for operational open cloud infrastructures. The tool relies on Kubernetes to enable the automation of manual processes for the provisioning and management of OpenStack-based infrastructures (e.g. hardware inventory, monitoring, and updating). Generic Day 2 operation tasks are natively included in Yaook’s scope. Yaook can contribute to the adoption of OpenStack by providing additional support for DevOps teams working with OpenStack.

The tool has three components:

* Yaook Bare Metal manages hardware. It deploys the operating system, as well as server network and disk configuration. It allows automatic redeploying of nodes, the primary mechanism for software updates.
* Yaook Kubernetes manages the Kubernetes below OpenStack. It handles upgrades transparently and provides a full-featured Kubernetes cluster.
* Yaook Operator installs and manages OpenStack on top of Kubernetes. It communicates with the standard Kubernetes APIs to create and manage resources in the cluster. It handles OpenStack upgrades and maintenance tasks and provides a user interface to define configurations.

## Linux Distributions

The following is a list of open source Linux distributions that have been reported as integrations with OpenStack through the [OpenStack User Survey](https://www.openstack.org/user-survey).  

### AlmaLinux OS

AlmaLinux OS is an enterprise Linux operating system used across the globe by people and organizations that need a stable operating system that is free and does not require a license. This includes everything from non-profit organizations to Fortune 500 companies; from hobbyists managing their home automation to supercomputers expanding our understanding of the universe; and everything in between. As the first downstream RHEL-compatible operating system to be released after the announcement that support for CentOS Linux was ending, the goal of the AlmaLinux community is to provide a stable, long-term option for those who have historically used CentOS Linux and for whom CentOS Stream is not an option. The AlmaLinux OS Foundation is a 501(c)(6) non-profit entity created as the central collaboration point for everything to do with AlmaLinux and for the benefit of the AlmaLinux OS community.

### Anolis OS

Anolis OS is a stable, secure, and user-friendly open source server operating system launched by OpenAnolis. Validated in large-scale business scenarios such as "Double 11," its performance and stability can enhance the overall cloud performance in typical user environments by 40% and reduce the failure rate by 50%. It also supports large-model AI applications and AI hardware like DPUs and GPUs.

OpenAnolis, established in September 2020, is an international open source community and innovation platform. It aims to build a Linux open source distribution and foster innovative open source technologies through open community collaboration to drive the growth of software, hardware, and application ecosystems. Over 800 partners are actively participating in building this ecosystem, and OpenAnolis currently serves more than 800,000 users.

### CentOS Stream 

CentOS Stream is an open source enterprise Linux distribution which provides the major version that Red Hat Enterprise Linux (RHEL) minor versions branch from. For anyone interested in participating and collaborating in the RHEL ecosystem, CentOS Stream is your reliable platform for integration. Using CentOS Stream in combination with OpenStack and Kubernetes brings a durable open source Linux flavor for enterprise platforms. It involves deploying and operating cloud-native applications. Some of the prominent use cases are:

1. Private and hybrid cloud infrastructures with OpenStack and Kubernetes are popular application use points. CentOS Stream serves as an operating system for internal applications, data storage, and services, leveraging OpenStack’s capabilities for managing compute, storage, and networking resources. Container and Bare metal launching is the key feature but it also supports Magnum for infrastructure virtualization and upcoming Kubernetes integrations.
2. Inter-cloud integration between on-premises CentOS-based OpenStack deployments with public clouds enables interoperability. This allows anyone to create a seamless hybrid cloud environment, allowing for workload mobility between private and public clouds. Enterprises can replicate critical workloads to a secondary CentOS-based OpenStack cluster for failover in case of primary site failure.
3. Enterprises could design and deploy microservices-based applications, leveraging Kubernetes for container orchestration and OpenStack for infrastructure management. CentOS Stream is binary-compatible with Red Hat Enterprise Linux (RHEL), making it a preferred option for enterprises that need a durable and supported operating system for their infrastructure. 

### CoreOS

Fedora CoreOS (FCOS) is an automatically updating, minimal, monolithic, container-focused operating system, designed for clusters but also operable standalone, optimized for Kubernetes but also great without it. Its goal is to provide the best container host to run containerized workloads securely and at scale.

CentOS Stream CoreOS (SCOS) is a Linux distribution built from CentOS Stream RPM packages and focused on running container-based workloads with Kubernetes. It is part of the SCOS Stream of OpenShift Kubernetes Distribution (OKD), co-maintained by the CentOS Cloud SIG and the OKD Working Group.

### Fedora

The Fedora Project is a community of people working together to build a free and open source software platform and to collaborate on and share user-focused solutions built on that platform. Or, in plain English, the Fedora community makes an operating system that is  easy to do useful stuff with. The Fedora community includes thousands of individuals with different views and approaches, but together they share some common values called the “Four Foundations”: Freedom, Friends, Features, and First.

### openEuler

OpenEuler is a digital infrastructure operating system incubated and operated by the OpenAtom Foundation. It is suitable for any server, cloud computing, edge computing, and embedded deployment. This secure, stable, and easy-to-use open source operating system is compatible with multiple computing architectures. It is ideal for operational technology (OT) applications and enables the convergence of OT and information and communications technology (ICT).

The openEuler open source community collaborates with global developers to create an inclusive and diverse software ecosystem catering to all digitalization scenarios, empowering enterprises to develop their software, hardware, and application ecosystems.

### Rocky Linux

Rocky Linux is an open source enterprise operating system designed to be 100% bug-for-bug compatible with Red Hat Enterprise Linux®. It is developed by the community and hosted by the Rocky Enterprise Software Foundation (RESF). Rocky was created shortly after the December 8, 2020, announcement from Red Hat that it would discontinue development of CentOS—which has been a production-ready downstream version of Red Hat Enterprise Linux. In response, CentOS co-creator Gregory Kurtzer announced he would again start a project to achieve the original goals of CentOS. It's name is a tribute to CentOS co-creator Rocky McGaugh. By December 12, the code repository of Rocky Linux had become the top-trending repository on GitHub. Rocky Linux has grown to become one of the most widely used migration options off of CentOS, deployed by at-scale users globally.

### Ubuntu

Ubuntu is a popular, well-tested operating system for deploying OpenStack clouds. Ubuntu is a community-driven Linux distribution derived from Debian and published by Canonical. The Ubuntu community embodies the meaning of the ancient African word "ubuntu" -- humanity to others -- through making enterprise-quality software available to everyone freely on the same terms. There are many flavors and specialized derivatives of Ubuntu for desktops, workstations, servers, clouds, connected devices, and other types of use cases. Canonical and other companies in the Ubuntu community also provide commercial services and support for Ubuntu for organizations of all sizes. Ubuntu was the first operating system to commit to scheduled releases on a predictable cadence. Since 2004, the Ubuntu community has produced a high-quality release every six months and a new LTS release every two years. Ubuntu's reliability, quality, and community make Ubuntu one of the world's most widely used Linux distributions.

# Authors

Dana Cazacu, Marius Feldmann, Ali Hussain, Meiqin Jin, Wenhai Li, Nils Magnus, Amy Marrich, Jadon Naas, Michal Nasiadka, Kendall Nelson, Mauro Oddi, Goutham Pacha Ravi, Dmitry Tantsur, Benny Vasquez

# Reference Architectures

## Cleura

### Cleure Reference Architecture

![Cleura Reference Architecture](/img/cleura_openinfrablueprint_ra.png)

## H3C

### H3C CloudOS physical architecture

Three physical servers are available in the management zone, used to deploy the management plane of H3C CloudOS. These three servers form a K8s cluster.

The service zone contains KVM nodes, bare metal nodes, storage nodes, and network nodes. VMs on the KVM nodes and the bare metal nodes can form a K8s cluster for user access.

![H3C Reference Architecture](/img/h3c-ref.png)

**H3C CloudOS physical architecture**

Three physical servers are available in the management zone, used to deploy the management plane of H3C CloudOS. These three servers form a K8s cluster.

The service zone contains KVM nodes, bare metal nodes, storage nodes, and network nodes. VMs on the KVM nodes and the bare metal nodes can form a K8s cluster for user access.

**H3C CloudOS logical architecture**

Users directly access the Web interface, which is supported by a cloud service layer and back-end operations management. The cloud services share the operations capabilities. The physical resource pool contains KVM nodes and bare metal nodes.

Users directly access the Web interface, which is supported by a cloud service layer and back-end operations management. The cloud services share the operations capabilities. The physical resource pool contains KVM nodes and bare metal nodes.

## Huawei

### Huawei Dual Engine solution with OpenStack and Kubernetes

Huawei Dual-Engine container solution is built with OpenStack as its IaaS layer being responsible for infrastructure and BareMetal management and Kubernetes as its CaaS layer covering app management. It is capable of multinarrative resource management, shared infrastructure in one cloud, unified interfaces, telecom capability enhancement, Cloud and CT management system aligned. 

Expansion instead of new construction: For live production environment, upgrading from VM platform to dual engine platform to support multivariable resource will save huge cost. There is no need for new constructions. New dual engine platform can take advantage of previous OM systems. Virtualization and containerization management panel work in the same layer, share the same COTS infrastructure. Each component takes its own responsibility and shared common services such as IAM, BareMetal, etc. The dual engine BareMetal container solution supports multiple resource forms, such as VMs, bare metal servers, VM containers, and bare metal containers.

![Huawei Reference Architecture](/img/huawei-ref.png)

## Red Hat

### Red Hat OpenStack Services on OpenShift High level diagram

![Red Hat Reference Architecture](/img/redhat-ref.png)