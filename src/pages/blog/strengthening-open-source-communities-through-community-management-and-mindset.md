---
templateKey: blog-post
title: Strengthening Open Source Communities through Community Management and Mindset
author: Ildikó Váncsa
date: 2026-02-18T16:00:00.000Z
category:
  - value: category-h2Ztx9rpD
    label: Community
hidePost: false
seo:
  title: Strengthening Open Source Communities through Community Management and
    Mindset
  description: Ildikó Váncsa been involved in and working with open source
    projects for more than a decade, and through those experiences, she has
    learned how individuals and companies in these communities work together, or
    at least try to.
  url: https://openinfra.org/blog/strengthening-open-source-community-management
  twitterUsername: "@openinfradev"
---
I’ve been involved in and working with open source projects for more than a decade, and through those experiences, I’ve learned how individuals and companies in these communities work together, or at least try to.

As a community manager for over 7 years, I have made it my practice to study open source communities, both those I work with directly and those in which I’m involved as a contributor, through the lens of achieving not just success but also sustainability. To dive into some of my findings, I recently gave [a talk at FOSDEM](https://fosdem.org/2026/schedule/event/UTAMGU-downstream_mindset_vs_upstream_communities/) where I explored the challenges of corporate involvement in open source projects and how these challenges affect community dynamics and stability.

When talking to a company that relies on open source software (OSS) for its products and services, one of the first questions that comes to my mind is, “Are you investing in maintaining these OSS projects upstream?” If you are reading the OpenInfra blog, your answer is likely “Yes,” or, as a sponsor or advocate, you may be considering that as a next step in your strategy. Either way, it’s helpful to be familiar with some of the challenges that arise in open source ecosystems, particularly when projects become relied upon in production. 

So, what exactly are these challenges, and what can you do to address them?

## Downstream Mindset

As OSS has become the go-to for most companies to build their solutions, and more and more people have gotten involved in open source projects on behalf of their employers, as part of their paid job, which is amazing to see. However, when these individuals don’t get the guidance and support from their companies to be meaningfully involved, the upstream project often starts to struggle, sometimes without understanding why. This phenomenon affects OpenInfra and all other open source communities with notable corporate involvement, even those with diverse stakeholder ecosystems and production deployments.

I love seeing more and more companies sharing code online and having their employees involved upstream. However, for many, it is just the start of their open source journey, and they might find a lot of steps and processes that seem counterintuitive compared to traditional proprietary practices. Rushing into execution without any training or time allowed for employees to learn about open source processes and ways of working can make the road forward a bit more rocky than it needs to be.

Other challenges along the way are even more hidden, sometimes even to the individuals who are affected. When companies assign people from their teams to work upstream, they often don’t see beyond the company's short-term needs. The priorities for people working upstream are usually feature development and fixing bugs that affect the company. Employees are often incentivized to keep their company as their top priority when working upstream, within the limited time they are allowed. As these individuals are paid to work upstream in the OSS project, it’s only natural that they will represent their companies in the community, so what is the problem?

If everyone is always focused only on the development work and bug fixes their companies need, who will maintain the open-source project? How can the project and community remain sustainable over time if maintenance tasks don’t get done?

Below are examples of areas that get neglected and suffer. Which of them do you recognize?

* Documentation, if it even exists, becomes outdated.
* Deprecation timelines stretch because downstream stakeholders need more time.
* Decisions get delayed due to varying downstream interests and the lack of leadership authority.
* Mentorship programs lack mentors, because everyone’s busy, and company management doesn’t allow allocating time for it.
* CI infrastructure relies quietly on overworked contributors who fix issues before most people even notice there was one.
* Maintainer burnout occurs because people who care pick up the slack in their own free time.

The majority of the above challenges boil down to the rapid growth of the open source ecosystem, much of which is driven by corporate interests. Many people who get involved on behalf of companies never receive education about open source or the support to actually care for the OSS project(s) they are involved in. 

I remember when I first got involved in the OpenStack community and learned about the concept of the ‘Community Hat’ from open source experts who have been in the ecosystem for years or even decades. This concept taught me that caring for the project is on me, too, from day 1. I fear this “Community Hat” concept has been lost somewhere along the way, harming open source communities and the ecosystem as a whole.

## The Community Hat - Take Ownership Over Your OSS Project

When contributing upstream, we all wear multiple hats that we need to constantly balance. The Company Hat aligns our work in the OSS project with product roadmaps, internal goals, and customer commitments. The Community Hat ensures we, as individuals, take ownership of the project and treat it as our own, because it is! This makes conversations about sustainability, onboarding, governance clarity, and the experience of users beyond our immediate stakeholders a priority, as opposed to something that only happens at best effort. This is crucial because if people who work on the open source project don’t take responsibility for it, then who will?

As a community manager, it is my responsibility to remind contributors to put on their Community Hat, too, when they are working on OpenInfra projects and participate in discussions on any of the communication platforms their communities are using. It allows and encourages them to make decisions efficiently, while also asking how these decisions will affect the ecosystem six months or two years from now. It encourages them to consider how newcomers will receive guidance to understand and follow the processes to get involved. And, it enables them to teach their employers that production stability downstream depends on resilience upstream.

The decision that’s in the best interest of the community is in the best interest of all downstream organizations that depend on it, even if it doesn’t seem like an immediate benefit.

While all this sounds easy, implementing it in practice isn’t always straightforward. Here are 4 practices that you can encourage your communities to follow and your companies to support:

1. ## Make Maintenance Work a Shared Responsibility

Remember, maintenance work is not just the project maintainers’ job. As a contributor, tasks like writing and updating documentation, helping to debug CI, and doing reviews are everyone’s responsibilities, including you.

Surface maintenance work in planning conversations. Documentation updates, CI stability, refactoring, release notes, and mentoring are part of the project’s infrastructure. When they are explicitly discussed and tracked, they become shared responsibilities rather than quiet burdens.

Encourage shared ownership of long-term direction. Leadership continuity, mentorship pipelines, and contributor onboarding do not maintain themselves. When these areas are treated as core components of the project, they strengthen resilience.

Connect maintenance to long-term stability. When documentation or CI improvements are framed in terms of user experience and ecosystem reliability, their value becomes clearer across the board.

Sharing the burden leads to longevity.

2. ## Frame and Visualize Decisions for the Whole Ecosystem

Think in terms of users, not only stakeholders in the room. OpenInfra projects serve a global audience that extends far beyond a specific company’s customers. Expanding that perspective often clarifies trade-offs and timelines.

Publish timelines, milestones and deprecation paths. Clear, published plans create predictability. They reduce friction when discussing timelines internally and help contributors explain upstream expectations within their organizations.

Diverse considerations build sustainability.

3. ## Document Your Governance and Processes, not just the Code

Acknowledge, document and rotate leadership roles where possible. Having clearly documented leadership roles, including responsibilities and how to assume them, supports the emergence of new leaders.

Set principles for your community, and document them as part of your processes. Humans most often go towards the least resistance. Make tasks like testing and documentation mandatory parts of the contribution workflow to avoid building debt from the get-go.

Clarity and transparency reduce the likelihood of friction before it escalates.

4. ## Support Contributors from the Organizational Side

Allocate explicit time for upstream responsibilities. Maintenance, documentation, and community participation require space. When they are acknowledged in planning cycles, contributors can engage sustainably.

Recognize community contributions in performance conversations. Maintenance tasks, such as code refactoring, documentation updates, CI maintenance, mentorship, governance participation, and ecosystem improvements, deliver real value. Recognition reinforces their importance.

Align upstream practices with internal standards. Most organizations already prioritize testing, documentation, and lifecycle management for their own products. Drawing parallels to upstream projects helps organizations apply the same standards to the open source project and, in turn, contribute to the project’s operational stability and risk management upstream.

These small decisions by engineering managers and organizational leaders have a meaningful impact on their employees who are involved in OSS projects. When contributors feel supported in wearing both hats, their engagement becomes more durable.

## The Role of an OpenInfra Foundation Community Manager

Community management is often associated with outreach, advocacy, and sometimes handling processes like running community elections or scheduling and facilitating meetings. But that’s just the tip of the iceberg, which the OpenInfra Foundation recognizes. OpenInfra community managers are in a unique position, supporting communities like OpenStack and Kata Containers from a neutral position.

This allows us to put the community first and prioritize inclusion, efficiency and sustainability. By maintaining a neutral perspective, we can surface emerging risks, connect conversations across teams, and guide discussions toward clarity. We work with communities to document expectations, clarify processes, identify bottlenecks and distribute responsibilities before strain becomes damaging. This also includes reminding maintainers and contributors to put on the Community Hat and keep strengthening the systems that enable collaboration.

While having a community manager isn’t mandatory for your project to be successful and sustainable, you need to make sure there are people who always put the community first and can hold up a mirror when things go sideways.

## Keep Balance

Contributing to an open source project on behalf of a company can be a delicate process, which puts pressure on individuals. Only a handful of people are assigned to work on open source projects full time with the sole focus of enhancing and maintaining them. Everyone else needs to balance working on internal projects and OSS at the same time, and prioritize corporate needs while working upstream.

When the Community Hat and the Company Hat are in balance, that brings benefits to both the open source project and the companies that rely on it. This balance makes it possible to implement functionality upstream that is valuable to users, while also finding time for maintenance work and making decisions that don’t favor one company over others, efficiently.

## Take Ownership of OSS Projects You’re Involved In

There is a silent belief that only maintainers have the qualifications and permissions to do things like code reviews and maintaining processes and systems, along with the assumption that they work on OSS projects full time. In reality, the community at large is responsible not just for the code and documentation, but also for the tools and processes they rely on, and many maintainers put in their free time to ensure all of these are covered to keep the lights on. This is your opportunity to make a change!

Along with your Company Hat, if you have one, put on the Community Hat and start executing the practical steps outlined above to strengthen resilience, reinforce trust, and ensure that the infrastructure we build together continues to evolve with intention.