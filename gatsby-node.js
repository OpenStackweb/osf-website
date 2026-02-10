const path = require('path')
const _ = require('lodash')
const fs = require("fs")
const webpack = require('webpack');
const axios = require('axios')
const {createFilePath} = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')
const {ClientCredentials} = require('simple-oauth2');
const yaml = require("yaml")
const moment = require("moment-timezone");
const prevElectionsBasePath = 'src/pages/election/previous-elections';
const URI = require("urijs");
const { getPageSlugFromSEO } = require('./src/utils/methods');

const myEnv = require("dotenv").config({
  path: `.env`,
  expand: true
});

const currentYear = new Date().getFullYear();
const electionsSinceYear = process.env.GATSBY_ELECTION_SINCE_YEAR || 2023;
const minimunElectionsToShow = process.env.GATSBY_ELECTION_TO_SHOW || 2;

const electionsToShow = (currentYear - electionsSinceYear) + minimunElectionsToShow;


const getAccessToken = async (config, scope) => {
  const client = new ClientCredentials(config);

  try {
    return await client.getToken({scope});
  } catch (error) {
    console.log('Access Token error', error);
  }
};

const writeToJson = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data), 'utf8', function (err) {
    if (err) throw err;
    console.log(`wrote ${filePath}`);
  });
};

const SSR_getLegals = async (baseUrl) => {
  return await axios.get(
    `${process.env.GATSBY_API_BASE_URL}/api/public/v1/legal-documents/422`,
    {}).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getCurrentReleaseComponents = async (baseUrl) => {
  return await axios.get(
    `${baseUrl}/api/public/v1/releases/current`,
    {
      params: {
        expand: 'components, components.component'
      }
    }).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getSponsorshipTypes = async (baseUrl, sponsoredProjectId) => {
  return await axios.get(
    `${baseUrl}/api/public/v1/sponsored-projects/${sponsoredProjectId}/sponsorship-types`,
    {
      params: {
        expand: 'supporting_companies, supporting_companies.company',
        page: 1,
        per_page: 100,
      }
    }).then((response) => response.data.data)
    .catch(e => console.log('ERROR: ', e));
}

const SSR_getSponsoredProjects = async (baseUrl) => {
  return await axios.get(
    `${baseUrl}/api/public/v1/sponsored-projects/`,
    {
      params: {
        per_page: 100,
        page: 1,
        expand: 'subprojects,subprojects.sponsorship_types,subprojects.sponsorship_types.supporting_companies,subprojects.sponsorship_types.supporting_companies.company'
      }
    }).then((response) => response.data.data)
    .catch(e => console.log('ERROR: ', e));
}

const SSR_getPreviousElections = async (baseUrl, accessToken, page = 1) => {
  const currentDate = parseInt(Date.now()/1000);
  // minimun per page is 5
  const perPage = electionsToShow > 5 ? electionsToShow : 5;
  const url = `${baseUrl}/api/v1/elections/`;
  console.log(`SSR_getPreviousElections url ${url} accessToken ${accessToken} currentDate ${currentDate} perPage ${perPage}`);
  return await axios.get(
    url,
    {
      params: {
        access_token: accessToken,
        page: page,
        per_page: perPage,
        filter: `closes<${currentDate}`,
        order: '-closes'
      }
    }).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getCurrentElection = async (baseUrl, accessToken, page = 1, perPage = 5) => {
  return await axios.get(
    `${baseUrl}/api/v1/elections/`,
    {
      params: {
        access_token: accessToken,
        page: page,
        per_page: perPage,
        order: '-closes'
      }
    }).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getPreviousElectionCandidates = async (baseUrl, accessToken, electionId, page = 1) => {
  return await axios.get(
    `${baseUrl}/api/v1/elections/${electionId}/candidates/`,
    {
      params: {
        access_token: accessToken,
        per_page: 100,
        page: page,
        order: '+first_name,+last_name',
        expand: 'member, member.election_applications, member.election_applications.nominator',
        fields: 'member.election_applications.nominator.first_name, member.election_applications.nominator.last_name'
      }
    }).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getPreviousElectionGoldCandidates = async (baseUrl, accessToken, electionId, page = 1) => {
  return await axios.get(
    `${baseUrl}/api/v1/elections/${electionId}/candidates/gold`,
    {
      params: {
        access_token: accessToken,
        per_page: 100,
        page: page,
        order: '+first_name,+last_name',
        expand: 'member',
      }
    }).then((response) => response.data)
    .catch(e => console.log('ERROR: ', e));
};

exports.onPreBootstrap = async () => {
  const apiBaseUrl = process.env.GATSBY_API_BASE_URL;
  const buildScopes = process.env.GATSBY_BUILD_SCOPES;
  const sponsoredProjectId = process.env.GATSBY_SPONSORED_PROJECT_ID;

  const globalSettings = {lastBuild: Date.now()};
  const config = {
    client: {
      id: process.env.GATSBY_OAUTH2_CLIENT_ID_BUILD,
      secret: process.env.GATSBY_OAUTH2_CLIENT_SECRET_BUILD
    },
    auth: {
      tokenHost: process.env.GATSBY_IDP_BASE_URL,
      tokenPath: process.env.GATSBY_OAUTH_TOKEN_PATH
    },
    options: {
      authorizationMethod: 'header'
    }
  };

  const accessToken = await getAccessToken(config, buildScopes).then(({token}) => token.access_token).catch(e => console.log('Access Token error', e));

  // settings
  writeToJson('src/content/settings.json', globalSettings);

  // pull legal doc
  const legalDocument = await SSR_getLegals(apiBaseUrl);
  if (legalDocument) {
    writeToJson('src/content/legal-document.json', legalDocument);
  }

  // pull current release
  const currentRelease = await SSR_getCurrentReleaseComponents(apiBaseUrl);
  if (currentRelease) {
    writeToJson('src/content/current-release.json', currentRelease);
  }

  // pull sponsorship types
  const sponsorshipTypes = await SSR_getSponsorshipTypes(apiBaseUrl, sponsoredProjectId);
  if (sponsorshipTypes) {
    writeToJson('src/content/sponsorship-types.json', sponsorshipTypes);
  }

  // pull sponsored projects
  const sponsoredProjects = await SSR_getSponsoredProjects(apiBaseUrl);
  if (sponsoredProjects) {
    writeToJson('src/content/sponsored-projects.json', sponsoredProjects);
  }
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const apiBaseUrl = process.env.GATSBY_API_BASE_URL;
  const buildScopes = process.env.GATSBY_BUILD_SCOPES;

  console.log(`onSourceNodes...`);

  const config = {
    client: {
      id: process.env.GATSBY_OAUTH2_CLIENT_ID_BUILD,
      secret: process.env.GATSBY_OAUTH2_CLIENT_SECRET_BUILD
    },
    auth: {
      tokenHost: process.env.GATSBY_IDP_BASE_URL,
      tokenPath: process.env.GATSBY_OAUTH_TOKEN_PATH
    },
    options: {
      authorizationMethod: 'header'
    }
  };

  const accessToken = await getAccessToken(config, buildScopes).then(({token}) => token.access_token).catch(e => console.log('Access Token error', e));

  // data for current election
  const currentElection = await SSR_getCurrentElection(apiBaseUrl, accessToken).then((res) => res.data[0]);

  createNode({
    ...currentElection,
    id: `${currentElection.id}`,
    electionYear: moment(currentElection.closes * 1000).utc().format('YYYY'),
    parent: null,
    children: [],
    internal: {
      type: 'CurrentElectionData', // Replace with an appropriate type
      contentDigest: createContentDigest(currentElection),
    },
  })

  // data for previous electionsfilePath
  const previousElections = await SSR_getPreviousElections(apiBaseUrl, accessToken)
  // remove current election from this array
  const lastElections = previousElections?.data?.filter(e => e.id !== currentElection.id).slice(0, electionsToShow);
  if (lastElections && lastElections.length > 0) {
    let candidates = [];
    let goldCandidates = [];
    // create paths
    fs.mkdirSync(prevElectionsBasePath, { recursive: true } );
    fs.mkdirSync(`${prevElectionsBasePath}/candidates`, { recursive: true } );
    fs.mkdirSync(`${prevElectionsBasePath}/candidates/gold`, { recursive: true } );

    // Get current markdown files
    const existingElectionFiles = fs.readdirSync(prevElectionsBasePath).filter(file => file.endsWith('.md'));
    const existingCandidateFiles = fs.readdirSync(`${prevElectionsBasePath}/candidates`).filter(file => file.endsWith('.md'));
    const existingGoldCandidateFiles = fs.readdirSync(`${prevElectionsBasePath}/candidates/gold`).filter(file => file.endsWith('.md'));
    
    const lastElectionIds = lastElections.map(election => `${election.id}`);

    // Function to check if filename contains any of the last election IDs
    const filenameContainsElectionId = (filename, electionIds) => electionIds.some(id => filename.includes(id));

    // Delete election files not included on the last elections to show
    existingElectionFiles.forEach(file => {
      if (!filenameContainsElectionId(file, lastElectionIds)) {
        try {
          fs.unlinkSync(path.join(prevElectionsBasePath, file));
          console.log(`Deleted outdated election file: ${file}`);
        } catch (err) {
          console.error(`Error deleting file ${file}:`, err);
        }
      }
    });

    // Delete candidate files not included on the last elections to show
    existingCandidateFiles.forEach(file => {
      if (!filenameContainsElectionId(file, lastElectionIds)) {
        try {
          fs.unlinkSync(path.join(prevElectionsBasePath, 'candidates', file));
          console.log(`Deleted outdated candidate file: ${file}`);
        } catch (err) {
          console.error(`Error deleting file ${file}:`, err);
        }
      }
    });

    // Delete gold candidate files not included on the last elections to show
    existingGoldCandidateFiles.forEach(file => {
      if (!filenameContainsElectionId(file, lastElectionIds)) {
        try {
          fs.unlinkSync(path.join(prevElectionsBasePath, 'candidates', 'gold', file));
          console.log(`Deleted outdated gold candidate file: ${file}`);
        } catch (err) {
          console.error(`Error deleting file ${file}:`, err);
        }
      }
    });


    for (const election of lastElections) {

      function formatMarkdown(post) {
        const { body } = post
        delete post.body
        return
      }

      const seoObject = {
        image: "/img/OpenInfra-icon-white.jpg",
        twitterUsername: "@OpenInfraDev"
      }

      const electionYear = moment(election.closes * 1000).utc().format('YYYY');
      // create MD file using yaml ...
      if(!fs.existsSync(`${prevElectionsBasePath}/${election.id}.md`))
        fs.writeFileSync(`${prevElectionsBasePath}/${election.id}.md`, `---\n${yaml.stringify({
            templateKey: 'election-page-previous',
            electionYear:electionYear,
            electionId:election.id,
            title:election.name,
            seo: {
              ...seoObject,
              title: election.name,
              url: `https://openinfra.dev/election/${electionYear}-individual-director-election`,
              description: `Individual Member Director elections for the ${electionYear} Board of Directors`
            }
          })}---\n`, 'utf8', function (err) {
          if (err) {
              console.log(err);
          }
        });

      // create MD file using yaml ...
      if(!fs.existsSync(`${prevElectionsBasePath}/candidates/${election.id}_candidates.md`))
        fs.writeFileSync(`${prevElectionsBasePath}/candidates/${election.id}_candidates.md`, `---\n${yaml.stringify({
            templateKey: 'election-candidates-page-previous',
            electionYear:electionYear,
            electionId:election.id,
            title:`${election.name} Candidates`,
            seo: {
              ...seoObject,
              title: election.name,
              url: `https://openinfra.dev/election/${electionYear}-individual-director-election/candidates`,
              description: `Individual Member Director elections for the ${electionYear} Board of Directors`
            }})}---\n`, 'utf8', function (err) {
          if (err) {
            console.log(err);
          }
        });

      if(!fs.existsSync(`${prevElectionsBasePath}/candidates/gold/${election.id}_gold_candidates.md`))
        fs.writeFileSync(`${prevElectionsBasePath}/candidates/gold/${election.id}_gold_candidates.md`, `---\n${yaml.stringify({
            templateKey: 'election-gold-candidates-page-previous',
            electionYear:electionYear,
            electionId:election.id,            
            title:`${election.name} Gold Candidates`,
            seo: {
              ...seoObject,
              title: election.name,
              url: `https://openinfra.dev/election/${electionYear}-individual-director-election/candidates/gold`,
              description: `Individual Member Director elections for the ${electionYear} Board of Directors`
            }})}---\n`, 'utf8', function (err) {
          if (err) {
            console.log(err);
          }
        });

      const electionCandidates = await SSR_getPreviousElectionCandidates(apiBaseUrl, accessToken, election.id);
      const electionGoldCandidates = await SSR_getPreviousElectionGoldCandidates(apiBaseUrl, accessToken, election.id);

      if (Array.isArray(electionCandidates?.data) && electionCandidates?.data?.length > 0) candidates = [...candidates, ...electionCandidates.data];
      if (Array.isArray(electionGoldCandidates?.data) && electionGoldCandidates?.data?.length > 0) goldCandidates = [...goldCandidates, ...electionGoldCandidates.data];
    }

    // ingest api data on graphql ...
    lastElections.forEach(election => {
      console.log(`gatsby-node.js::sourceNodes creating node for election ${JSON.stringify(election)}`)
      createNode({
        ...election,
        id: `${election.id}`,
        parent: null,
        children: [],
        internal: {
          type: 'ElectionData', // Replace with an appropriate type
          contentDigest: createContentDigest(election),
        },
      });
    })

    candidates.forEach(candidate => {
      createNode({
        ...candidate,
        id: createNodeId(`CandidateData-${candidate.member.id}-${candidate.election_id}`),
        election_id: `${candidate.election_id}`,
        parent: null,
        children: [],
        internal: {
          type: 'CandidateData', // Replace with an appropriate type
          contentDigest: createContentDigest(candidate),
        },
      });
    })

    goldCandidates.forEach(candidate => {
      createNode({
        ...candidate,
        id: createNodeId(`GoldCandidateData-${candidate.member.id}-${candidate.election_id}`),
        election_id: `${candidate.election_id}`,
        parent: null,
        children: [],
        internal: {
          type: 'GoldCandidateData', // Replace with an appropriate type
          contentDigest: createContentDigest(candidate),
        },
      });
    })
  }

};

// explicit Frontmatter declaration to make category, author and date, optionals.
exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      category: [Category]
      author: String
      date: Date @dateformat
      featuredProjects: MarkdownRemarkFrontmatterFeaturedProjects
      hero: MarkdownRemarkFrontmatterHero
      sponsorshipSection: MarkdownRemarkFrontmatterSponsorshipSection
      whatToExpect: MarkdownRemarkFrontmatterWhatToExpect
      row1: MarkdownRemarkFrontmatterRow1
      row2: MarkdownRemarkFrontmatterRow2
      row3: MarkdownRemarkFrontmatterRow3
      row4: MarkdownRemarkFrontmatterRow4
      row5: MarkdownRemarkFrontmatterRow5
      row6: MarkdownRemarkFrontmatterRow6
    }
    type Category {
      label: String
    }
    type SpeakerType {
       name: String
       company: String
       presentationTitle: String
       presentationLink: String
       pic: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterFeaturedSpeakers {
       title: String!
       speakers: [SpeakerType!]!
    }
    type MarkdownRemarkFrontmatterHero {
        subtitle: String
        title: String
        tagline: String
        description: String
        buttonText: String
        buttonURL: String
    }
    type MarkdownRemarkFrontmatterWhatToExpect{
        title: String
        text: String
        bullets: String
    }
    type MarkdownRemarkFrontmatterFeaturedProjects{
        title: String
        text: String
    }
    type SponsorshipSectionLeftColumn{
        title: String
        body: String
        footer: String
    }
    type SponsorshipSectionRightColumn{
        title: String
        body: String
        footer: String
    }
    type MarkdownRemarkFrontmatterSponsorshipSection{
       title: String
       text: String
       leftColumn: SponsorshipSectionLeftColumn
       rightColumn: SponsorshipSectionRightColumn
    }
    type MarkdownRemarkFrontmatterCompanyDetailsCompanies{
      col1: String
      col2: Date @dateformat
    }
    type ElectionData implements Node {
      opens: Int
      closes: Int
      nominationOpens: Int
      nominationCloses: Int
      nominationApplicationDeadline: Int
    }
    type CandidateDataMember implements Node {
      id: ID!
      first_name: String!
      last_name: String!
      pic: String
      bio: String
    }
    type GoldCandidateDataMember implements Node {
      id: ID!
      first_name: String!
      last_name: String!
      pic: String
      bio: String
    }
    # Define the main JSON type for summits
    type SummitsJson implements Node @dontInfer {
      jsonId: Int!
      featured_speakers: [FeaturedSpeaker]
      summit_sponsors: [SummitSponsor]
    }
    type FeaturedSpeaker @dontInfer {
      first_name: String
      last_name: String
      company: String
      pic: String
    }
    type SummitSponsor @dontInfer {
      sponsorship: Sponsorship
      company: SponsorCompany
    }
    type Sponsorship @dontInfer {
      id: String
      order: Int
    }
    type SponsorCompany @dontInfer {
      name: String
      url: String
      logo: String
      big_logo: String
    }        
    type MarkdownRemarkFrontmatterUpcomingMeetupsMeetups {
      background: File @fileByRelativePath
      date: String
      location: String
      link: String
    }    
    type MarkdownRemarkFrontmatterUpcomingMeetupsBannerButton {
      text: String
      url: String
    }    
    type MarkdownRemarkFrontmatterUpcomingMeetupsBanner {
      title: String
      content: String
      button: MarkdownRemarkFrontmatterUpcomingMeetupsBannerButton
    }    
    type MarkdownRemarkFrontmatterUpcomingMeetups {
      title: String
      banner: MarkdownRemarkFrontmatterUpcomingMeetupsBanner
      meetups: [MarkdownRemarkFrontmatterUpcomingMeetupsMeetups]
    }
    # Resolve frontmatter seo.image path (string) to File so childImageSharp/publicURL work
    type MarkdownRemarkFrontmatterSeo @infer {
      image: File @fileByRelativePath
    }
    # Summit/summit-coming-soon/vancouver header and form image/icon as File
    type MarkdownRemarkFrontmatterHeaderDate @infer {
      icon: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterHeaderLocation @infer {
      icon: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterHeader @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterForm @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterTopicsTopicList @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterPreviousSummitsSummitList @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSponsorshipsSponsorList @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterAbout @infer {
      image: File @fileByRelativePath
    }
    # Summit-landing-page: resolve image/background/src to File
    type MarkdownRemarkFrontmatterHeaderImage @infer {
      backgroundImage: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterHeaderImageLogo @infer {
      src: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSubHeaderBadge @infer {
      src: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSubHeaderFooter @infer {
      src: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSponsorBanner @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterPastSummitsSummits @infer {
      background: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterMiddleBanner @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterPreviousSummitsSummits @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterBottomBanner @infer {
      background: File @fileByRelativePath
    }
    # Other templates: resolve image/picture/logo/img to File where inferred as String
    type MarkdownRemarkFrontmatterRow1Images @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterRow2Images @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterIndividualMember @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterCommunitiesLogos @infer {
      img: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterInvolvedSlide @infer {
      picture: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterHeadlineSponsorsSponsors @infer {
      logo: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSupportingSponsorsSponsors @infer {
      logo: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterMembers @infer {
      picture: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterWhyJoinItems @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterQuotePeople @infer {
      picture: File @fileByRelativePath
      company: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterHelp @infer {
      picture: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterUpcomingDaysEventsHeaderImage @infer {
      img: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterUpcomingMeetupsMeetups @infer {
      background: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterPastMeetupsMeetups @infer {
      background: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterProjectList @infer {
      logo: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterProjectListFeatures @infer {
      icon: File @fileByRelativePath
    }
    # Row types with all optional fields for services-page template
    type MarkdownRemarkFrontmatterRow1 @infer {
      title1: String
      text1: String
      title2: String
      text2: String
      images: [MarkdownRemarkFrontmatterRow1Images]
    }
    type MarkdownRemarkFrontmatterRow2 @infer {
      title: String
      text: String
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterRow3 @infer {
      title: String
      text: String
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterRow4 @infer {
      title: String
      text1: String
      text2: String
      link: MarkdownRemarkFrontmatterRow4Link
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterRow4Link {
      url: String
      text: String
    }
    type MarkdownRemarkFrontmatterRow5 @infer {
      title: String
      text1: String
      text2: String
      text3: String
      link1: MarkdownRemarkFrontmatterRow5Link
      link2: MarkdownRemarkFrontmatterRow5Link
      images: [MarkdownRemarkFrontmatterRow5Images]
    }
    type MarkdownRemarkFrontmatterRow5Link {
      text: String
      url: String
    }
    type MarkdownRemarkFrontmatterRow5Images @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterRow6 @infer {
      title1: String
      text1: String
      title2: String
      text2: String
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterBanner @infer {
      image: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterSupportMembers @infer {
      picture: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterOpenInfraEventsData @infer {
      logo: File @fileByRelativePath
    }
    type MarkdownRemarkFrontmatterUpcomingEvents @infer {
      image: File @fileByRelativePath
    }
    `
  createTypes(typeDefs)
}

exports.createPages = ({actions, graphql}) => {
  const { createPage, createRedirect} = actions;

  const getElectionPath = (templateKey, electionYear) => {
    const electionTemplates = ['election-page-previous', 'election-page'];
    const candidatesTemplates = ['election-candidates-page-previous', 'election-candidates-page'];
    const goldCandidatesTemplates = ['election-gold-candidates-page-previous', 'election-gold-candidates-page'];
    if(electionTemplates.includes(templateKey)) return `/election/${electionYear}-individual-director-election`;
    if(candidatesTemplates.includes(templateKey)) return `/election/${electionYear}-individual-director-election/candidates`;
    if(goldCandidatesTemplates.includes(templateKey)) return `/election/${electionYear}-individual-director-election/candidates/gold`;
  }

  const electionQuery = graphql(`
    {
        allMarkdownRemark(
        limit: 1000
        filter: {frontmatter: {templateKey: {in: ["election-page", "election-candidates-page", "election-gold-candidates-page"]}}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
      currentElectionData {
        electionYear
      }
    }
  `).then(result => {

    console.log(`createPage res ${JSON.stringify(result)}`);

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const electionsPages = result.data.allMarkdownRemark.edges;
    const electionYear = result.data.currentElectionData.electionYear;

    electionsPages.forEach(edge => {
      const id = edge.node.id;
      const electionPath = getElectionPath(edge.node.frontmatter.templateKey, electionYear);

      console.log(`createPage processing edge ${JSON.stringify(edge)} path ${electionPath}`);

      createPage({
        path: electionPath,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        },
      })
    });

    createRedirect({
      fromPath: `/election/`,
      toPath: `/election/${electionYear}-individual-director-election`,
    });

    createRedirect({
      fromPath: `/election/candidates`,
      toPath: `/election/${electionYear}-individual-director-election/candidates`,
    });

    createRedirect({
      fromPath: `/election/candidates/gold`,
      toPath: `/election/${electionYear}-individual-director-election/candidates/gold`,
    });

    // Redirect deleted project pages to /about
    createRedirect({
      fromPath: `/projects/services`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/services/*`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/funding`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/funding/*`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/contact`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/contact/*`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/hosting`,
      toPath: `/about`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/projects/hosting/*`,
      toPath: `/about`,
      isPermanent: true,
    });
  });

  const previousElectionQuery = graphql(`
    {
        allMarkdownRemark(
        limit: 1000
        filter: {frontmatter: {templateKey: {in: ["election-page-previous", "election-candidates-page-previous", "election-gold-candidates-page-previous"]}}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              electionId
              electionYear
            }
          }
        }
  }
    }
  `).then(result => {

    console.log(`createPage res ${JSON.stringify(result)}`);

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const electionsPages = result.data.allMarkdownRemark.edges;

    electionsPages.forEach(edge => {

      const id = edge.node.id;
      const electionId = edge.node.frontmatter.electionId.toString();
      const electionYear = edge.node.frontmatter.electionYear;
      const electionPath = getElectionPath(edge.node.frontmatter.templateKey, electionYear);

      console.log(`createPage processing edge ${JSON.stringify(edge)} path ${electionPath}`);
      createPage({
        path: electionPath,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          electionId
        },
      })

    })

  });

  const allPagesQuery = graphql(`
    {
      allMarkdownRemark(limit: 1000, filter: {frontmatter: {electionId: {eq: null}, templateKey: {nin: ["election-page", "election-candidates-page", "election-gold-candidates-page"]}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              category {
                label
              }
              title
              author
              templateKey
              seo {
                url
              }
            }
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges;

    pages.forEach(edge => {
      if (edge.node.frontmatter.templateKey) {
        const id = edge.node.id;
        const SEO = edge.node.frontmatter.seo ? edge.node.frontmatter.seo : null;
        const slug = getPageSlugFromSEO(SEO, edge.node.fields.slug);
        createPage({
          path: slug,
          category: edge.node.frontmatter.category,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id
          },
        })
      }
    })

    // category pages:
    let categories = JSON.parse(fs.readFileSync('src/content/blog-config.json')).categories;

    // Make category pages
    categories.forEach(c => {
      const category = c.text;
      const categoriePath = `/blog/category/${_.kebabCase(category)}/`

      createPage({
        path: categoriePath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          category,
        },
      })
    })

    // author pages:
    let authors = []
    // Iterate through each post, putting all found authors into `authors`
    pages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.author`)) {
        authors = authors.concat(edge.node.frontmatter.author)
      }
    })
    // Eliminate duplicate authors
    authors = _.uniq(authors)

    // Make author pages
    authors.forEach(author => {
      const authorPath = `/blog/author/${_.kebabCase(author)}/`

      createPage({
        path: authorPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          author,
        },
      })
    })

  })

  return Promise.all([electionQuery, previousElectionQuery, allPagesQuery]);
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  /**
   * Gatsby v4 Upgrade NOTE: This is no longer needed in `gatsby-remark-relative-images` v2.
   * @see https://www.npmjs.com/package/gatsby-remark-relative-images#v2-breaking-changes
   */
  // fmImagesToRelative(node); // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({actions, plugins, loaders}) => {
  actions.setWebpackConfig({
    resolve: {
      /**
       * Webpack removed automatic polyfills for these node APIs in v5,
       * so we need to patch them in the browser.
       * @see https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#webpack-5-node-configuration-changed-nodefs-nodepath-
       * @see https://viglucci.io/how-to-polyfill-buffer-with-webpack-5
       */
      fallback: {
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
      }
    },
    // canvas is a jsdom external dependency
    externals: ['canvas'],
    plugins: [
      plugins.define({
        'global.GENTLY': false,
        'global.BLOB': false
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ]
  })
}




