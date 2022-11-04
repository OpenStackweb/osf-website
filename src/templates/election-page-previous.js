import React, { useEffect } from "react"
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { getElectionStatus } from "../actions/election-actions"
import LinkComponent from "../components/LinkComponent";

export const ElectionPagePreviousTemplate = ({
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
                <Header title={"January 2022 Board Elections"} />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                                <article className="message is-warning">
                                    <div className="message-body">
                                        Nominations for Individual Board Members have closed.
                                    </div>
                                </article>
                            <div className="columns">
                                <div className="column is-one-third">
                                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election">ELECTION DETAILS<i class="fa fa-chevron-right"></i></a></div>
                                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election/candidates/">SEE THE CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                                <div class="election-item"><a aria-current="page" class="" href="/election/2022-individual-director-election/candidates/gold">GOLD MEMBER ELECTION CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                                    {menu.map((m, index) => {
                                        return (
                                            <div className="election-item" key={index}>
                                                <LinkComponent href={m.link}>
                                                    {m.text}
                                                    <i className="fa fa-chevron-right" />
                                                </LinkComponent>
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

const ElectionPagePrevious = ({ electionStatus, isLoggedUser, location, data, getElectionStatus }) => {
    const { markdownRemark: post } = data;

    useEffect(() => {
        getElectionStatus();
    }, [])

    return (
        <Layout>
            <SEO seo={post.frontmatter.seo} />
            <ElectionPagePreviousTemplate
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
    getElectionStatus
}
)(ElectionPagePrevious)

export const electionPagePreviousQuery = graphql`
  query ElectionPagePrevious($id: String!) {
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