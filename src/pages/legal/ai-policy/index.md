---
templateKey: generic-page
seo:
  description: >-
    Technology rooted in artificial intelligence (AI) is an actively evolving area with exciting technical possibilities and significant legal uncertainties. The OpenInfra Board of Directors wants to encourage exploration and adoption of new technologies while exercising reasonable caution around potential risks.
  image: /img/OpenInfra-icon-white.jpg
  title: OpenInfra Foundation Policy for AI Generated Content
  twitterUsername: "@OpenInfraDev"
  url: "https://openinfra.dev/legal/ai-policy"
title: Policy for AI Generated Content
subTitle: "Version 0.11.2"
footer:
  title: ""
  subTitle: Join the OpenInfra Foundation to learn how you can get involved in
    initiatives around open infrastructure.
  buttonText: JOIN
  button: https://openinfra.dev/join/
  display: true
---

### Summaruy

Assistive AI tools are permitted, as long as contributions are marked with an “Assisted-By:” label in commit messages. Generative AI tools, which produce complete code artifacts (not just small fragments or suggestions), are also permitted under limited circumstances. Such tools are often used to provide a starting point, which is then reworked by the human author. If a substantial portion of a patch is generated in this way, it must be marked with a “Generated-By:” label.

We recommend using Open Source AI models trained on content with compatible licensing. However, we also recognize the AI tooling ecosystem and underlying models are evolving rapidly. This policy provides guardrails while encouraging transparency about tool usage, so contributors can benefit from AI productivity gains responsibly.

A human must always be in the loop. Contributors need to fully understand and be able to debug any AI-generated code they include. Treat such code as if it came from an untrusted source. Reviewers should apply heightened scrutiny to AI-generated content. Copyright law continues to apply to all preexisting works.

### Context

Technology rooted in artificial intelligence (AI) is an actively evolving area with exciting technical possibilities and significant legal uncertainties. The OpenInfra Board of Directors wants to encourage exploration and adoption of new technologies while exercising reasonable caution around potential risks.

Currently we have three general broad buckets of technology use cases we need to be mindful of:

- Predictive - Often viewed as “suggestive auto-complete”. A contributor is getting suggestive fragments which they are then making decisions to adopt and modify fragments based upon the work they are executing upon.
- Generative - The pattern of providing prose describing what you want, and the AI attempts to compose a result. This may create a pattern where the prose is revised until a suitable result has been reached.
- Assistive - Some generative tools can be used in assistive ways. For example a prompt which might rename files or make other targeted changes which would have otherwise been performed by a human.

### Challenges

- Copyright law in this area is presently an evolving topic with a landscape which will take some time to stabilize. As of March 16th, 2023, Computer Generated work is *not* considered an original work which can be copyrighted in the United States with similar stances being taken in other countries around the world.
- Source training data, and thus resulting material, may come from materials which have unclear or incompatible copyrights and/or licenses. In other cases, copyright of any generated code may be explicitly retained by the vendor operating the AI technology, which is incompatible with contribution to projects. Furthermore, some tools have demonstrated the ability to source context from the contents of a project being worked upon. Ultimately this requires awareness of the End-User License Agreement by the contributor.
- This is an evolving area, and tools will evolve. What may be a Predictive tool today could be a partially Generative tool next week. Contributors need to also be aware, and take action based upon each particular situation, which is the very reason for this document.

### Applicability

All contributions of content committed into source revision control systems by projects housed under the OpenInfra Foundation.

### Policy and Guidance

It is the policy of the OpenInfra Foundation that:

- Contributions must be compatible with the principals of the [Four Opens](/four-opens).
- Contributions created using Predictive or Generative AI tools are generally permitted if contributors and reviewers follow the checklists below.
- Contributions to OpenInfra Foundation projects are distributed under open source software licenses (Apache 2.0 or other OSI approved licenses), so code or content included in a contribution must be compatible with those licenses. The license of a contribution does not need to be exactly the same as the project's license, being compatible means that the contribution's license grants sufficient rights to allow everything the project's license allows (or allows more), and imposes similar restrictions (or fewer restrictions). Many open source licenses are compatible with other open source licenses, and code or content in the public domain is compatible with all open source licenses. Contributors need to verify they have the right to contribute output from AI tools, just like they do for their own original work, work owned by their employer, work copied or modified from another open source project, or work submitted on behalf of a third party.
  - Where possible, configure the AI tool to operate in modes that respect open source licensing. This will be different for each tool.
  - Any copyrighted materials authored or owned by third parties could be problematic, so make sure they are licensed as open source or public domain, or that you have permission from the copyright holder to release them as open source. Make sure the AI tool doesn’t claim proprietary rights to the code or content generated by the tool.
- We generally expect contributions to be made by a human taking an action, so the contributor has a chance to review their contribution for any technical or legal problems before submitting. The exception to the rule is that we do allow submissions from well documented automated processes, such as release tooling or for internationalization updates.
- This policy will be re-evaluated and updated as the law, technology, and open source best practices continue to evolve.

#### Contributor Checklist

As a contributor, you are responsible for the code you submit, whether you use AI tools or write it yourself. Some AI tools offer settings, features, or modes that can help, but these are no substitute for your own review of code quality, correctness, style, security, and licensing.

- With all AI tools, contributors should be mindful of their limitations. Carefully review any suggested or generated code or comments to ensure nothing is inherently harmful, malicious, or outright incorrect.
- OpenInfra projects will adopt the “Generated-By:” and “Assisted-By” labels. The “Generated-By” label was first proposed by the Apache Software Foundation as part of their Generative Tooling Guidance. These labels are in addition to the “Signed-Off-By” label identifying the contributor who submits the contribution into code review.
  - For contributions created using a Generative AI tool:
    - Generative AI tools should be operated in modes which are compatible with the Open Source Definition as maintained by the OSI.
    - When available, Generative AI features that flag output that resembles publicly available code and provide licensing information should be enabled. Such results should be used to prevent the contribution of incompatibly licensed open source code. 
    - When available, Generative AI features that are designed to block output suggestions that match publicly available code should be enabled.
    - Add a “Generated-By:” label to the commit message, and explain in comments or the commit message any prompts or background context the reviewers might need to fully understand the change and how much of the change was generated by the tool.
    - If your tool assisted your changes, such as minor content edits based upon a prompt, you will want to use the “Assisted-By” label instead of “Generated-By”.
  - For contributions created using a Predictive AI tool:
    - Add the “Assisted-By” label to your commit message and explain in comments or the commit message any context the reviewers might need to understand the change and how much of the change came from the tool.
- By contributing you are indicating you have the permission and rights to submit the content to a project, so take care in checking that the output of the tool is compatible with the project’s license. The “Signed-Off-By” label in your contribution is a statement that you take responsibility for the entire contents of the commit, including any parts that were generated or assisted by AI tools or other tools
- This policy does not supersede any project specific requirements around actions to be taken prior to the submission of changes into review.

#### Reviewer Checklist

- When reviewing contributions with the “Generated-By” or “Assisted-By labels, verify that the change includes sufficient explanation of the context that the reviewer and future contributors can understand the purpose and origin. 
- Apply a higher level of scrutiny to contributions created using AI tools, understanding the limitations of the tools. This does not mean automatically rejecting all contributions that use AI tools, it means giving them the same consideration of technical and legal merits and standards as you would give to any other change.
- Code style changes may be necessary to meet project standards and community guidelines, please work with the contributor as-needed
- If the change set is substantially re-worked by human changes during the code review process, consider whether it makes sense  to remove the “Generated-By” or “Assisted-By” label prior to committing.


### References

- U.S. Copyright Office Registration Guidance Pertaining to Works Generated by Artificial Intelligence  - https://www.federalregister.gov/documents/2023/03/16/2023-05321/copyright-registration-guidance-works-containing-material-generated-by-artificial-intelligence
- Four Opens - https://openinfra.dev/four-opens/
- Apache Software Foundation Generative Tooling Guidance - https://www.apache.org/legal/generative-tooling.html

### Change History

<table>
  <thead>
    <tr>
      <th>Version</th>
      <th>Description</th>
      <th>Date</th>
      <th>Author</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.1</td>
      <td>Initial Draft</td>
      <td>November 9th, 2023</td>
      <td>J. Kreger</td>
    </tr>
    <tr>
      <td>0.2</td>
      <td>Revision including T. Carrez's feedback</td>
      <td>February 16, 2024</td>
      <td>J. Kreger &amp; T. Carrez</td>
    </tr>
    <tr>
      <td>0.3</td>
      <td>Four opens link and content acceptability</td>
      <td>February 22, 2024</td>
      <td>J. Kreger</td>
    </tr>
    <tr>
      <td>0.4</td>
      <td>Formatting changes, minor wording changes</td>
      <td>February 22, 2024</td>
      <td>J. Kreger on behalf of the working group</td>
    </tr>
    <tr>
      <td>0.5</td>
      <td>Revisions from C. Stevenson</td>
      <td>February 28, 2024</td>
      <td>C. Stevenson</td>
    </tr>
    <tr>
      <td>0.6</td>
      <td>Rewrite the policy section into contributor/reviewer checklist oriented statements to provide clear guidance as action items from board working group discussion, and reformat the change history into a table, and further minor text edits suggested by A. Marrich.</td>
      <td>March 14, 2024</td>
      <td>J. Kreger</td>
    </tr>
    <tr>
      <td>0.7</td>
      <td>Revisions to make the text both easier to read and more legally precise.</td>
      <td>March 26, 2024</td>
      <td>A. Randal</td>
    </tr>
    <tr>
      <td>0.8</td>
      <td>Revisions from C. Stevenson</td>
      <td>April 8th, 2024</td>
      <td>C. Stevenson</td>
    </tr>
    <tr>
      <td>0.8.1</td>
      <td>Minor formatting revision and change for clarity, adoption of suggestion from C. Stevenson.</td>
      <td>April 17, 2024</td>
      <td>J. Kreger</td>
    </tr>
    <tr>
      <td>0.9.0</td>
      <td>Clarification of Permissively Licensed suggestion from C. Stevenson to Compatible License.</td>
      <td>April 23, 2024</td>
      <td>A. Randal</td>
    </tr>
    <tr>
      <td>0.9.1</td>
      <td>Change the word &quot;less&quot; to &quot;fewer&quot; in terms of license restrictions.</td>
      <td>May 21, 2024</td>
      <td>C. Stevenson</td>
    </tr>
    <tr>
      <td>0.9.2</td>
      <td>Revision of contributor guidelines based upon feedback from J. Blair</td>
      <td>May 31, 2024</td>
      <td>A. Randal</td>
    </tr>
    <tr>
      <td>0.10.0</td>
      <td>Revised content based upon Board and Community discussions, including addition of an assisted-by label.</td>
      <td>May 9, 2025</td>
      <td>J. Kreger</td>
    </tr>
    <tr>
      <td>0.10.1</td>
      <td>Added a Summary suggestion based upon discussion with A. Marrich</td>
      <td>May, 12 2025</td>
      <td> </td>
    </tr>
    <tr>
      <td>0.11</td>
      <td>Revision to clarify “Assisted-By” along with further clarifying the Summary and removal of the example commit message from open discussion with A. Marrich, G. Mann, and community members.</td>
      <td>June 24, 2025</td>
      <td> </td>
    </tr>
    <tr>
      <td>0.11.1</td>
      <td>Added clarifications about combining labels and the responsibility of contributors</td>
      <td>July 8, 2025</td>
      <td>A. Randal</td>
    </tr>
    <tr>
      <td>0.11.2</td>
      <td>Revised Summary text</td>
      <td>July 8th, 2025</td>
      <td>E. Glynn</td>
    </tr>
  </tbody>
</table>