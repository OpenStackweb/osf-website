import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { graphql } from 'gatsby';
import moment from 'moment-timezone';
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from '../components/NavbarV2';
import Header from "../components/Header";
import SEO from "../components/SEO";
import LinkComponent from "../components/LinkComponent";

export const ElectionPagePreviousTemplate = ({
    isLoggedUser,
    title,
    electionData,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    const { closes, nomination_closes, nomination_opens, opens } = electionData

    const electionYear = moment(closes * 1000).utc().format('YYYY');

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                <Header title={title} />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            You're viewing a past election page. See the <LinkComponent className="current-election-link" href="/election">current election page</LinkComponent>.<br /><br />
                            <article className="message is-warning">
                                <div className="message-body election-alert">
                                    Nominations for Individual Board Members have closed.
                                </div>
                            </article>
                            <div className="columns">
                                <div className="column is-one-third">
                                    <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election`}>ELECTION DETAILS<i class="fa fa-chevron-right"></i></a></div>
                                    <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election/candidates/`}>SEE THE CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                                    <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election/candidates/gold`}>GOLD MEMBER ELECTION CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                                    <div class="election-item"><a aria-current="page" class="" href="../../legal/code-of-conduct">CODE OF CONDUCT<i class="fa fa-chevron-right"></i></a></div>
                                    <div class="election-item"><a aria-current="page" class="" href="mailto:info@openinfra.dev">REPORT A BUG<i class="fa fa-chevron-right"></i></a></div>
                                </div>
                                <div className="column is-two-thirds">
                                    <p>
                                        Individual Member Director elections for the {title} will be held
                                        <b>{` ${moment(opens * 1000).utc().format('dddd MMMM DD, YYYY')} to
                                            ${moment(closes * 1000).utc().format('dddd MMMM DD, YYYY')}`}</b>.
                                        Nominations occur between
                                        <b>{` ${moment(nomination_opens * 1000).utc().format('MMMM DD')} and
                                            ${moment(nomination_closes * 1000).utc().format('MMMM DD, YYYY')}`}</b>.
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

const ElectionPagePrevious = ({ isLoggedUser, location, data }) => {
    const { markdownRemark: post, electionData } = data;

    return (
        <Layout>
            <SEO seo={post.frontmatter.seo} />
            <ElectionPagePreviousTemplate
                location={location}
                isLoggedUser={isLoggedUser}
                title={post.frontmatter.title}
                menu={post.frontmatter.menu}
                electionData={electionData}
                contentComponent={HTMLContent}
                content={post.html}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
}), {})(ElectionPagePrevious)

export const electionPagePreviousQuery = graphql`
  query ElectionPagePrevious($id: String!, $electionId: String) {
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
        electionId
      }
    }
    electionData(id: {eq: $electionId}) {
        id
        opens
        closes
        nomination_closes
        nomination_opens
    }          
  }
`
