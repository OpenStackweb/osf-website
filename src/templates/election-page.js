import React, { useEffect } from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { getElectionStatus } from "../actions/election-actions"
import LinkComponent from "../components/LinkComponent";

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
                <NavbarV2 isLoggedUser={isLoggedUser} />
                <Header title={electionStatus?.name} />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            {electionStatus?.status === 'NominationsOpen' ?
                                <article className="message is-primary">
                                    <div className="message-body election-message">
                                        Nominations for Individual Board Members are now open.
                                    </div>
                                </article>
                                :
                                <article className="message is-warning">
                                    <div className="message-body election-message">
                                        Nominations for Individual Board Members have closed.
                                    </div>
                                </article>
                            }
                            <div className="columns">
                                <div className="column is-one-third">
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
                                    <p>
                                        Individual Member Director elections for the {electionStatus?.name} will be held
                                        <b>{` ${moment(electionStatus?.opens * 1000).utc().format('dddd MMMM DD, YYYY')} to
                                            ${moment(electionStatus?.closes * 1000).utc().format('dddd MMMM DD, YYYY')}`}</b>.
                                        Nominations occur between
                                        <b>{` ${moment(electionStatus?.nomination_opens * 1000).utc().format('MMMM DD')} and
                                            ${moment(electionStatus?.nomination_closes * 1000).utc().format('MMMM DD, YYYY')}`}</b>.
                                    </p>
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

const ElectionPage = ({ electionStatus, isLoggedUser, location, data, getElectionStatus }) => {
    const { markdownRemark: post } = data;

    useEffect(() => {
        getElectionStatus();
    }, [])

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
    getElectionStatus
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
