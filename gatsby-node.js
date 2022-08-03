const path = require('path')
const _ = require('lodash')
const fs = require("fs")
const axios = require('axios')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { ClientCredentials } = require('simple-oauth2');

const myEnv = require("dotenv").config({
  path: `.env`,
  expand: true
});

const getAccessToken = async (config, scope) => {
  const client = new ClientCredentials(config);

  try {
    return await client.getToken({ scope });
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

const SSR_getSummit = async (baseUrl) => {
  const params = {
    expand: 'event_types,tracks,track_groups,presentation_levels,locations.rooms,locations.floors,order_extra_questions.values,schedule_settings,schedule_settings.filters,schedule_settings.pre_filters,summit_sponsors,summit_sponsors.company,summit_sponsors.sponsorship,featured_speakers',
    t: Date.now()
  };

  return await axios.get(
    `${baseUrl}/api/public/v1/summits/current`,
    { params }
  )
    .then(({ data }) => data)
    .catch(e => console.log('ERROR: ', e));
};

const SSR_getEvents = async (baseUrl, summitId, accessToken, page = 1, results = []) => {
  return await axios.get(
    `${baseUrl}/api/v1/summits/${summitId}/events/published`,
    {
      params: {
        access_token: accessToken,
        per_page: 50,
        page: page,
        expand: 'slides, links, videos, media_uploads, type, track, track.allowed_access_levels, location, location.venue, location.floor, speakers, moderator, sponsors, current_attendance, groups, rsvp_template, tags',
      }
    }).then(({ data }) => {
      if (data.current_page < data.last_page) {
        return SSR_getEvents(baseUrl, summitId, accessToken, data.current_page + 1, [...results, ...data.data]);
      }

      return [...results, ...data.data];
    })
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

exports.onPreBootstrap = async () => {
  const apiBaseUrl = process.env.GATSBY_API_BASE_URL;
  const buildScopes = process.env.GATSBY_BUILD_SCOPES;
  const sponsoredProjectId = process.env.GATSBY_SPONSORED_PROJECT_ID;
  const globalSettings = { lastBuild: Date.now() };
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

  const accessToken = await getAccessToken(config, buildScopes).then(({ token }) => token.access_token);

  // settings
  writeToJson('src/content/settings.json', globalSettings);

  // pull legal doc
  const legalDocument = await SSR_getLegals(apiBaseUrl);
  if (legalDocument) {
    writeToJson('src/content/legal-document.json', legalDocument);
  }

  // pull summit
  const summit = await SSR_getSummit(apiBaseUrl);
  if (summit) {
    writeToJson('src/content/summit.json', summit);

    // pull events
    const events = await SSR_getEvents(apiBaseUrl, summit.id, accessToken);
    if (events) {
      writeToJson('src/content/events.json', events);
    }
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
  if(sponsoredProjects) {
    writeToJson('src/content/sponsored-projects.json', sponsoredProjects);
  };

}

// explicit Frontmatter declaration to make category, author and date, optionals. 
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
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
    `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(edge => {
      if (edge.node.frontmatter.templateKey) {
        const id = edge.node.id
        const SEO = edge.node.frontmatter.seo ? edge.node.frontmatter.seo : null;
        const slug = SEO && SEO.url ? SEO.url.replace('https://osf.dev', '').replace('https://openinfra.dev', '') : edge.node.fields.slug;
        createPage({
          path: slug,
          category: edge.node.frontmatter.category,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
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
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions, plugins, loaders }) => {
  actions.setWebpackConfig({
    // canvas is a jsdom external dependency
    externals: ['canvas'],
    plugins: [
      plugins.define({
        'global.GENTLY': false,
        'global.BLOB': false
      })
    ]
  })
}
