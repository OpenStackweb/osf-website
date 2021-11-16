const path = require('path')
const _ = require('lodash')
const fs = require("fs")
const axios = require('axios')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const myEnv = require("dotenv").config({
  path: `.env`,
  expand: true
})

exports.onPreBootstrap = async () => {

  try {

    const legalDocument = await axios.get(
      `${process.env.GATSBY_API_BASE_URL}/api/public/v1/legal-documents/422`,
      {}).then((response) => response.data)
      .catch(e => console.log('ERROR: ', e));

    if (legalDocument) {

      fs.writeFileSync('src/content/legal-document.json', JSON.stringify(legalDocument), 'utf8', function (err) {
        if (err) throw err;
        console.log(`wrote legal document 422`);
      });
    }
  }
  catch (e) {
    console.log(e);
  }
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
