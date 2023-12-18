import React from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import SimpleHeader from "../components/SimpleHeader";
import GenericBanner from "../components/GenericBanner";
import BottomBanner from "../components/BottomBanner";
import SponsorshipSection from "../components/SponsorshipSection";

import '../style/sponsorship-page.scss';


const SPONSORSHIPS = [
  {
    title: ["September 2 & 3, 2024", "Suwon Convention Center", "Suwon, South Korea"],
    plans: [
      {
        title: 'diamond',
        priceMember: '$ 35.000',
        priceNonMember: '$ 42.000',
        color: '#43B85C',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'platinum',
        priceMember: '$ 35.000',
        priceNonMember: '$ 42.000',
        color: '#28A4DB',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'gold',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#F7B749',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'category 4',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#FF0A1B',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'category 5',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#888888',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'category 6',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#CBCBCB',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      }
    ]
  }
  ]
const SPONSORSHIPS_DAYS = [
  {
    title: ["OpenInfra Days Turkiye - May 20, 2024", "Garanti Cultural Center, Boğaziçi University - Istanbul, Turkiye"],
    plans: [
      {
        title: 'platinum',
        priceMember: '$ 90.000',
        priceNonMember: '$ 100.000',
        color: '#28A4DB',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
      {
        title: 'gold',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#F7B749',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      },
    ]
  },
  {
    title: ["OpenInfra Day Sweden - May 7, 2024", "Volvohallen, Gothenburg, Sweden"],
    plans: [
      {
        title: 'gold',
        priceMember: '$ 130.000',
        priceNonMember: '$ 140.000',
        color: '#F7B749',
        items: [
          {title: 'thing 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
          {title: 'thing 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit.'},
        ]
      }
    ]
  }
]


export const SponsorshipPageTemplate = ({
                                       isLoggedUser,
                                       title,
                                       subTitle,
                                       content,
                                       contentComponent
                                     }) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>
      <main className="main">
        <div className="content sponsorship-page-content">
          <SimpleHeader
            title="BECOME A SPONSOR"
            subtitle="SUPPORT THE NEXT DECADE OF OPEN INFRAESTRUCTURE"
            backgroundImage="/img/sponsorship/summit-marketplace.png"
          />
          <SponsorshipSection
            title="OPENINFRA SUMMIT ASIA"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS}
          />
          <GenericBanner
            upperText='Not a member?'
            text='Learn how to join the OpenInfra Foundation'
            button={{ link: '/join/members/', text: 'BECOME A MEMBER'}}
          />
          <SponsorshipSection
            title="OPENINFRA DAYS SPECIAL EDITION"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS_DAYS}
          />
          <GenericBanner 
            upperText=''
            text='Have any questions about<br/>sponsoring the events?'
            button={{ link: 'mailto:summit@openinfra.dev', text: 'contact us'}}
            fullwidth={false}
          />
          <BottomBanner 
            title={'Subscribe to our newsletter <br/>& keep up to date with the latest<br/>News about the Summits.'}
            button={{ link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates', text: 'SIGN ME UP' }}
          />

        </div>
      </main>
    </div>
  )
}

const SponsorshipPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <SponsorshipPageTemplate
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        contentComponent={HTMLContent}
        content={post.html}
        isLoggedUser={isLoggedUser}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SponsorshipPage)

export const SponsorshipPageQuery = graphql`
  query SponsorshipPageQuery($id: String!) {
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
      }
    }
  }
`
