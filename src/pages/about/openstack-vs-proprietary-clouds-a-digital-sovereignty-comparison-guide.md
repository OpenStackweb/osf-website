---
templateKey: generic-page
seo:
  title: "OpenStack vs Proprietary Clouds: A Digital Sovereignty Comparison Guide"
  twitterUsername: "@openinfra.dev"
  image: /img/OpenInfra-icon-white.jpg
  description: "Digital sovereignty, in practice, comes down to control: over
    where data lives, who can access it, and what happens to infrastructure when
    a vendor relationship ends or a regulation changes. The comparison presented
    in this guide demonstrates that OpenStack® provides structural sovereignty
    advantages across every category evaluated, from data residency and key
    custody to operational autonomy and commercial independence."
  url: https://openinfra.org/openstack-vs-proprietary-clouds-a-digital-sovereignty-comparison-guide
title: "OpenStack vs Proprietary Clouds: A Digital Sovereignty Comparison Guide"
subTitle: "Authors: Daniel Bodky, Rodolfo Casas, Simon Dodsley, Kurt Garloff,
  Sash Ghosh, Kendall Nelson"
---
# Introduction

Digital sovereignty, in practice, comes down to control: over where data lives, who can access it, and what happens to infrastructure when a vendor relationship ends or a regulation changes. The comparison presented in this guide demonstrates that OpenStack® provides structural sovereignty advantages across every category evaluated, from data residency and key custody to operational autonomy and commercial independence.

Proprietary cloud platforms offer real advantages in operational simplicity, breadth of managed services, and time-to-value for organizations without sovereignty requirements. However, for organizations operating in regulated industries, public-sector contexts, or any environment where data sovereignty is a legal or strategic requirement, the architectural characteristics of OpenStack — and open infrastructure more broadly — provide guarantees that contractual commitments cannot replicate. Open source infrastructure is the architectural foundation for genuine digital sovereignty; choosing it is not a compromise on capability.

This guide provides a structured, vendor-neutral comparison of OpenStack and proprietary cloud platforms across the dimensions that matter most to sovereignty-focused infrastructure decisions: compute, storage, networking, security, compliance, operational control, and total cost of ownership.

This document is produced by the Digital Sovereignty Working Group of the Open Infrastructure Foundation. It is intended for infrastructure architects, procurement teams, CISOs, and policymakers evaluating cloud strategy through a sovereignty lens.

# Defining Digital Sovereignty

Digital sovereignty exists on a spectrum, from basic data localization through to full-stack independence. For the purposes of this guide, we define sovereignty across three dimensions:

## Data Sovereignty

The ability to determine where data is stored, who can access it, under what legal jurisdiction it falls, and the right to retrieve, migrate, or delete it without dependency on a third-party platform.

## Operational Sovereignty

The ability to deploy, configure, operate, and modify infrastructure without requiring the permission, tooling, or continued commercial relationship of an external vendor. This includes control over patching cadence, upgrade timing, and feature adoption.

## Software Sovereignty

The ability to understand, audit, extend, and replace the technology stack without dependency on proprietary interfaces, black-box components, or vendor-controlled APIs.

# Infrastructure Layer

## Compute

Compute is where sovereignty first shows up in practice: who controls how workloads are isolated, what hardware they run on, and whether the environment can operate without external connectivity.

|  Category   |  OpenStack - Nova   |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **Hypervisor flexibility**   |  Supports multiple hypervisors via a pluggable driver model. Operators choose based on workload and compliance requirements.   |   Hypervisor is fixed and vendor-controlled. Organizations cannot inspect or modify the virtualization layer.  |
|  **Hardware agnosticism**   |  Runs on any x86, ARM, or RISC-V compatible hardware from any vendor. No hardware lock-in.   |   Optimized for vendor-approved hardware configurations. Custom or niche hardware may not be supported.  |
|  **Workload isolation**   |  Configurable isolation levels from shared tenancy to dedicated physical hosts. Full control over NUMA topology and CPU pinning.   |   Isolation options are defined by the vendor. Dedicated host options exist, but at a significant cost premium.  |
|  **Scaling model**   |  Horizontal scaling under operator control. No per-core or per-socket licensing costs as capacity grows.   |   Scaling triggers additional licensing costs. Large-scale deployments may require commercial renegotiation.  |
|  **Air-gap / offline operation**   |  Fully supported. Deployments can operate with no external connectivity.   |   Typically requires connectivity for licensing validation, telemetry, and management plane functions.  |

## Storage

Storage is one of the most sovereignty-critical infrastructure components: it is where data actually resides, and where residency controls, encryption, and access governance must be enforced.

|  Category   |  OpenStack - Cinder, Manila, Swift   |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **Block storage**   |  Cinder provides a pluggable block storage framework that supports a wide range of backends from open source (Ceph/RBD) to enterprise arrays. Operators choose and control the backend.   |   Block storage is vendor-managed. Backend technology, replication topology, and data placement are not operator-configurable.  |
|  **Object storage**   |  Swift provides S3-compatible object storage with operator-controlled data placement, replication policy, and retention. No egress fees.   |   Object storage is vendor-managed. Egress costs can be significant. Data placement is subject to provider terms.  |
|  **File storage**   |  Manila provides shared file system services with pluggable backends. Protocol support (NFS, SMB, CEPHFS) is operator-selected.   |   File services are vendor-managed with proprietary integration paths.  |
|  **Encryption & key custody**   |  Encryption at rest and in transit with keys managed via Barbican (OpenStack Key Manager). Keys never leave the operator's control.   |   Encryption is vendor-managed. Key management systems (KMS) are operated by the provider. Key custody risk is inherent.  |
|  **Data portability**   |  Standard protocols (iSCSI, NVMe-oF, S3 API, NFS) ensure data can be migrated to any compatible system. No proprietary lock-in.   |   Data extraction may require proprietary tooling. Egress costs and format dependencies create data gravity.
|  **Performance tiering**   |  Operators can implement tiered storage policies using enterprise backends via Cinder. SLA definition is operator-controlled.   |   Performance tiers are vendor-defined. SLA guarantees are contractual, not architectural.  |

## Networking

Network sovereignty — the ability to control segmentation, routing, and data flows — is critical for both security and compliance with data localization requirements.

|  Category   |  OpenStack - Neutron    |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **SDN model**   |  Neutron provides a pluggable SDN framework. Operators can use open source (OVN, OVS) or integrate commercial SDN solutions without platform dependencies.   |   SDN is vendor-controlled. Network configuration is performed through vendor APIs; the underlying implementation is opaque.  |
|  **Network segmentation**   |  Full VLAN, VXLAN, and flat network support. Microsegmentation and security group policy are operator-defined and auditable.   |   Segmentation options are vendor-defined. Policy logic may not be fully transparent or auditable.  |
|  **Egress control**   |  All egress paths are operator-controlled. No data leaves the environment without explicit configuration.   |   Egress to vendor management and telemetry endpoints may be required for platform operation. Full egress isolation may not be possible.  |
|  **BGP & routing**   |  Full BGP support is available via open source components (FRR, Calico). Integration with existing network infrastructure is straightforward.   |   BGP and routing integration are vendor-specific. Integration with existing infrastructure may require proprietary gateways.  |
|  **Bandwidth & egress costs**   |  No platform-level egress fees. Bandwidth costs are infrastructure costs under operator control.   |   Egress fees are a significant ongoing cost. Data repatriation may incur substantial charges.  |


# Security

In a sovereignty context, security comes down to three questions: who controls the keys, who can audit the code, and who decides when vulnerabilities are patched.

|  Category   |  OpenStack - Keystone, Barbican   |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **Encryption at rest**   |  Operator-configured. Encryption policies, algorithms, and key rotation are under full operator control via Barbican.   |   Enabled by default on most platforms, but encryption is vendor-managed. Key custody remains with the provider unless a bring-your-own-key (BYOK) option is purchased.  |
|  **Encryption in transit**   |  TLS configuration is operator-managed. Certificate authority, cipher suite, and rotation policy are locally controlled.   |   TLS is vendor-managed. Cipher suite selection may be limited. Internal traffic between vendor services may not be end-to-end encrypted from the operator's perspective.  |
|  **Key management**   |  Barbican provides a dedicated key management service. Keys can be stored in on-premises HSMs. No third-party key custody.   |   Vendor KMS. BYOK options exist on some platforms, but key material still transits vendor infrastructure during use.  |
|  **Confidential computing**   |  Supports hardware-level confidential computing (Intel TDX, AMD SEV) with full operator control over attestation and policy.   |   Confidential computing is available on some platforms, but vendor-managed attestation is required. Independent verification of isolation is limited.  |
|  **Vulnerability patching**   |  Operators control patching cadence. Critical vulnerabilities can be patched immediately without waiting for a provider release cycle.   |   Patching is vendor-controlled. Organizations cannot unilaterally patch vulnerabilities in the platform layer.  |
|  **Audit logging**   |  Comprehensive audit logging via OpenStack's native audit middleware and integration with open SIEM platforms. Log format and retention are operator-defined.   |   Audit logs are available but may be filtered, formatted, or retained in accordance with vendor policy. Full audit log access may require premium tiers.  |
|  **Supply chain security**   |  Open source codebase enables a full supply chain audit. SBOMs (Software Bill of Materials) are community-generated and verifiable.   |   The supply chain is vendor-controlled. SBOM availability varies. Independent verification of component provenance is not possible.  |




# Sovereignty & Compliance

Regulatory compliance and data sovereignty requirements are evolving rapidly across jurisdictions. The ability to adapt infrastructure controls to meet new requirements without relying on a vendor's product roadmap is what separates genuinely sovereign infrastructure from infrastructure that merely claims to be so.

|  Category   |  OpenStack  |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **Data residency**   |  Absolute. Data placement is operator-controlled at the hardware level. Residency guarantees are architectural, not contractual.   |   Contractual data residency is offered on most major platforms, but the underlying infrastructure spans multiple jurisdictions. Contractual guarantees are not the same as architectural guarantees.  |
|  **Regulatory certifications**   |  Operators obtain certifications (ISO 27001, SOC 2, PCI-DSS) for their specific deployments. Certification scope covers the full stack.   |   Providers hold certifications for their platform. Operators inherit partial coverage but remain responsible for their own controls. Shared responsibility models create compliance gaps.  |
|  **GDPR / data protection**   |  Full control over personal data processing, retention, and deletion. No third-party processor dependency for infrastructure-level data.   |   Provider is a data processor. Data processing agreements (DPAs) are required. Third-party sub-processors may be involved.  |
|  **Sector-specific compliance**   |  Operators can implement controls required for DORA (financial services), NIS2, HIPAA, or defense standards without waiting for vendor feature development.   |   Compliance features are on vendor roadmaps. Sector-specific requirements may not be addressable in the current version of the platform.  |
|  **Audit & right of inspection**   |  Full right of inspection. Operators can audit any component of the stack at any time.   |   Audit rights are contractually limited. Vendors provide compliance reports (e.g., SOC 2 Type II) in lieu of direct inspection.  |
|  **Jurisdiction & legal access**   |  Infrastructure is entirely within the operator's jurisdiction. No foreign government has a basis for legal access through the platform provider.   |   Providers may be subject to foreign jurisdictions (e.g., CLOUD Act, Law on Protection of Personal Data). Legal access requests may be processed without operator notification, depending on jurisdiction.  |



# Platform & Operations

Operational sovereignty — the ability to run, maintain, and evolve infrastructure without external dependencies — determines whether an organization retains control of its digital environment in the long run.

|  Category   |  OpenStack  |  Proprietary Solutions   |
| :--- | :--- | :--- |
|  **Orchestration & Kubernetes**   |  Magnum provides Kubernetes-as-a-service on OpenStack. Any upstream Kubernetes distribution can be deployed. No proprietary Kubernetes extensions required.   |   Managed Kubernetes services are available but use vendor-specific control planes, node configurations, and networking plugins. Portability to other environments requires re-engineering.  |
|  **Identity & access management**   |  Keystone provides federated identity with support for SAML, OIDC, and LDAP. Integration with existing enterprise IAM is straightforward and operator-controlled.   |   IAM is vendor-managed. Integration with external identity providers is supported, but the IAM control plane remains with the vendor.  |
|  **Monitoring & observability**   |  Open standards (Prometheus, Grafana, OpenTelemetry) with no vendor lock-in. Data stays within the operator's environment.   |   Monitoring tooling is vendor-provided. Telemetry data is often sent to vendor systems. Third-party observability integration may be limited.  |
|  **Upgrade & lifecycle control**   |  Operators control upgrade timing and cadence. Rolling upgrades are supported. Organizations can remain on a stable release while evaluating new versions.   |   Upgrades are vendor-controlled. End-of-life enforcement may require organizations to upgrade on the vendor's schedule or lose support.  |
|  **Configuration management**   |  Infrastructure-as-code with Terraform, Ansible, Heat, and any standard tooling. Configuration is fully portable.   |   Configuration is managed through vendor APIs and consoles. Proprietary IaC tooling (e.g., CloudFormation) creates configuration lock-in.  |
|  **Disaster recovery**   |  DR architecture is fully operator-designed. RPO/RTO targets are implemented at the infrastructure level without dependency on vendor DR products.   |   DR options are vendor-provided services. DR architecture is subject to vendor product availability and pricing.  |
|  **Multi-site & edge**   |  StarlingX and distributed OpenStack deployments natively support edge, telco, and multi-site sovereign architectures.   |   Multi-region and edge options are available, but they use vendor-specific edge platforms and proprietary connectivity services.  |





# Commercial & Licensing

Licensing models, egress costs, and platform migration costs shape the total cost of ownership for cloud infrastructure in ways that often surface years after the initial procurement decision. Sovereignty-focused organizations must assess these commercial factors alongside technical capabilities.

|     |     |     |
| --- | --- | --- |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

# Ecosystem & Integration

A cloud platform's partner network, compatible technologies, and integration paths determine how well it can serve diverse workload requirements over time.

|     |     |     |
| --- | --- | --- |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

# Summary & Use Case Guidance

The right platform depends on the sovereignty requirements, deployment scale, and risk tolerance. The following guidance helps map those requirements to platform characteristics.

## When OpenStack Is the Stronger Fit

* Public sector and government deployments subject to national data sovereignty legislation
* Financial services organizations subject to DORA, operational resilience, or outsourcing regulations
* Regulated industries where audit rights and the right of inspection are legally required
* Organizations with existing data center investments seeking to build a private cloud
* Deployments where data repatriation cost or timeline is a risk factor
* AI/ML workloads where training data sovereignty and model custody are requirements
* Telco and edge deployments requiring deterministic performance and distributed sovereignty
* Organizations with a strategic requirement to avoid single-vendor dependency

## When Proprietary Platforms May Be Considered

* Organizations with no data sovereignty or residency requirements
* Workloads with highly variable and unpredictable scaling requirements
* Organizations without the operational capability to run and maintain infrastructure
* Use cases where time-to-market is the dominant priority and long-term lock-in risk is accepted
* Development and testing environments where sovereignty requirements do not apply

Note: The considerations above reflect the inherent architectural characteristics of each approach. Many organizations operate hybrid environments, using OpenStack for sovereignty-critical workloads and proprietary platforms for specific use cases. Classifying workload sovereignty requirements before selecting a platform is the essential first step.

# Summary Assessment Matrix

The following matrix summarises the sovereignty-relevant advantages and considerations across all evaluated categories.

|     |     |     |     |
| --- | --- | --- | --- |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |

# Conclusion

Visit the digital sovereignty page on [openinfra.org](https://openinfra.org/digital-sovereignty/) to explore additional resources, including case studies and industry best practices. The OpenInfra community remains committed to expanding our support framework as global digital sovereignty regulations evolve.