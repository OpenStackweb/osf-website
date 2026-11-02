---
templateKey: blog-post
title: "Follow the money: AI costs are reshaping infrastructure decisions"
author: Kendall Nelson
date: 2026-11-02T15:49:31.734Z
category:
  - value: category-h2Ztx9rpD
    label: Community
hidePost: true
seo:
  title: "Follow the money: AI costs are reshaping infrastructure decisions"
  description: OpenInfra Foundation board chair Julia Kreger joins the first
    episode of the new OpenInfra Live podcast to talk about why AI is sending
    infrastructure decisions to the accounting office, and where Ironic fits.
  url: https://openinfra.org/blog/openinfra-live-ai-economics
  twitterUsername: "@openinfradev"
---
Julia Kreger has spent about a decade automating bare metal servers, and lately the AI infrastructure conversations she hears keep circling back to the accounting department. That’s where someone decides whether a server is a capital asset or cheap enough to expense outright, and where someone signs off on hardware that now costs far more than anyone expected.

Kreger, who chairs the OpenInfra Foundation board and works on OpenStack Ironic at Red Hat, joined me and Wes Wilson for the first episode of OpenInfra Live in its new podcast format. The topic: what happens when AI changes the economics of infrastructure.

### The bill nobody planned for

Graphics processing units (GPUs) get most of the attention, but memory has become its own problem. [TrendForce reported](https://www.trendforce.com/presscenter/news/20260601-13070.html) that conventional dynamic random-access memory (DRAM) contract prices rose roughly 93% to 98% in the first quarter of 2026 compared with the quarter before, and it expected another 58% to 63% jump in the second.

Organizations can lease hardware or carry it as a capital asset, Kreger said, but “ultimately the amount of money that this hardware is now costing is so much more than what organizations ever expected to spend.” So they’re starting “to question the fundamental assumptions they’ve been making for the past 10 or 15 years regarding the infrastructure.”

She compared the moment to 2012 and 2013, when supply shocks sent memory prices soaring, and virtualization looked like the answer because it squeezed more work out of every server. 

Today the math runs the other way: “Now we’re at a point where the cost to build a hypervisor is actually now pretty much insane.”

### Bare metal, back on the table

One response is to skip virtualization for workloads that don’t need it. If a physical server comes in under a company’s capitalization threshold, Kreger explained, “then you may not have to report it and pay taxes on that hardware sitting in your data center.” She admitted it’s “an odd motivator,” but some jurisdictions treat that equipment as a revenue source for the county or state, and the savings add up.

Some teams, she said, are asking why they’d spend $250,000 on a hypervisor host for 10 or 20 machines when a single physical server could cost a tenth of that. In her telling, the reasoning goes like this: “I’ll just buy the server because this workload’s not going to go anywhere for however many years, and it’s going to be static, and I don’t need all the virtualization features.”

The options go all the way down to the chip. Kreger pointed to a growing market for small-batch custom silicon, much of it built on RISC-V, where buyers can pair AI-focused cores with secure processing cores on the same die. “It’s a recipe at that point,” she said. “‘So, fab, make recipe 33,’ or whatever, and like two months later you’ll have your cards.” RISC-V also carries no licensing fee. 

Power is the other variable. AI workloads are, in Nelson’s words, “greedy, greedy critters,” and Kreger added that “the utilization of expensive hardware is key to that bottom line.” With one rack drawing 200 kilowatts and the next drawing 20 kilowatts, she expects companies to stop chasing a uniform fleet and decide on a workload-by-workload basis. Her shorthand for how those calls get made: “What does the accounting office say? Can you get the expense account across accounting or not?”

### Where open infrastructure fits

Kreger described [Ironic](https://docs.openstack.org/ironic/latest/) as “a bare metal systems lifecycle orchestration engine,” then translated: “Which sounds like a whole bunch of words, but it is a community of people that have identified common patterns and where we’ve contributed code to solve some of these issues.”

Operators use it to manage large fleets without sending people onto the data center floor, sometimes with a script that says, in her words, “I need to deploy a thousand machines tomorrow and exist for two weeks.” Security is a big part of the appeal. Operators “really don’t want people knowing the passwords for the physical machines,” she said, and the floor itself comes with auditors and round-the-clock video for the insurers.

Ironic was long popular for machine installation, and Kreger now sees it moving “more towards not just machine installation, but machine management,” with adoption among AI compute vendors, traditional data center operators and enterprises.

Asked why openness matters more as hardware gets more specialized, Kreger called open infrastructure “a foundational layer where you can do well-known tasks, well-known setups, configurations as a building block to build additional layers on top.” That layer can hold both answers: virtual machines for short-lived work that can absorb “a 3% CPU tax on the overhead,” and dedicated hardware for long-running jobs at full scale.

The bigger payoff, she argued, comes from the community, where someone can raise a factor you hadn’t considered before it costs you. She described the reaction she’s heard from operators: “I would have found that out in three months, and that would have cost another three months.” (“So how many dollars?” Nelson asked.) “The huge value is not just the code, but it’s the people,” Kreger said. “It’s the engagement.”

### Watch or listen

Digital sovereignty came up just long enough for the hosts to promise it a future episode. Until then, watch our full conversation [on YouTube](https://youtu.be/Z30r1tDdQnE?si=UZlPra2KmrJPHZb_) or listen on [Spotify](https://spotifycreators-web.app.link/e/ryKu6sDOr7b) or [Apple Podcasts](https://podcasts.apple.com/us/podcast/ai-economics-and-the-impact-of-openstack-ironic/id6788132895?i=1000798730999). OpenInfra Live is now a podcast, so you can subscribe on Spotify or Apple Podcasts for new episodes. If the Ironic discussion left you wanting more, the episode on the OpenStack 2026.2 Hibiscus release \[HIBISCUS EPISODE LINK] covers recent changes to the project.

Have an idea for a future episode or a story to share on air? Submit it at [openinfra.org/live](https://openinfra.org/live/).