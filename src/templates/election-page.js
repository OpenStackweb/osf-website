import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";

export const ElectionPageTemplate = ({
    electionStatus,
    isLoggedUser,
    title,
    menu,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title={title} />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column is-one-third">
                                    {menu.map((m, index) => {
                                        return (
                                            <div className="election-item" key={index}>
                                                <a href={m.link}>
                                                    {m.text}
                                                    <i className="fa fa-chevron-right" />
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="column is-two-thirds">
                                    <PageContent content={content} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ElectionPage = ({ electionStatus, isLoggedUser, location, data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <SEO seo={post.frontmatter.seo} />
            <ElectionPageTemplate
                location={location}
                isLoggedUser={isLoggedUser}
                electionStatus={electionStatus}
                title={post.frontmatter.title}
                menu={post.frontmatter.menu}
                contentComponent={HTMLContent}
                content={post.html}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    electionStatus: state.electionState.election_status,
}), {

}
)(ElectionPage)

export const electionPageQuery = graphql`
  query ElectionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        title
        subTitle
        menu {
            text
            link
        }
      }
    }
  }
`