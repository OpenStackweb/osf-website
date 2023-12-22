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
        title: 'headline',
        priceMember: '$ 50,000',
        priceNonMember: '$ 60,000',
        color: '#ED362F',
        items: [
          {title: 'slots', value: '1'},
          {title: 'tech session', subtitle: '(30 mins)', value: '4'},
          {title: 'Booth Size', value: '6m x 2m'},
          {title: 'Full Access Pass', value: '30'},
          {title: 'Logo placement', value: 'Lobby + Session + Summit web'},
          {title: 'Keynote speech', value: true},
          {title: 'Logo in Session Video', value: true},
          {title: 'Hands On Lab', value: 'Max 4 hours'},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: '60 sec'},
          {title: 'Registration List', value: true},
          {title: 'Monitor', value: true},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: true},
        ]
      },
      {
        title: 'diamond',
        priceMember: '$ 37,000',
        priceNonMember: '$ 48,100',
        color: '#28A4DB',
        items: [
          {title: 'slots', value: '2'},
          {title: 'tech session', subtitle: '(30 mins)', value: '2'},
          {title: 'Booth Size', value: '4m x 4m'},
          {title: 'Full Access Pass', value: '20'},
          {title: 'Logo placement', value: 'Session + Summit web'},
          {title: 'Keynote speech', value: true},
          {title: 'Logo in Session Video', value: false},
          {title: 'Hands On Lab', value: 'Max 4 hours'},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: '20 sec'},
          {title: 'Registration List', value: true},
          {title: 'Monitor', value: true},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: false},
        ]
      },
      {
        title: 'platinum',
        priceMember: '$ 17,000',
        priceNonMember: '$ 25,500',
        color: '#43B85C',
        items: [
          {title: 'slots', value: '2'},
          {title: 'tech session', subtitle: '(30 mins)', value: '1'},
          {title: 'Booth Size', value: '3m x 2m'},
          {title: 'Full Access Pass', value: '15'},
          {title: 'Logo placement', value: 'Session + Summit web'},
          {title: 'Keynote speech', value: false},
          {title: 'Logo in Session Video', value: false},
          {title: 'Hands On Lab', value: 'Max 2 hours'},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: false},
          {title: 'Registration List', value: true},
          {title: 'Monitor', value: true},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: false},
        ]
      },
      {
        title: 'gold',
        priceMember: '$ 10,000',
        priceNonMember: '$ 16,000',
        color: '#F7B749',
        items: [
          {title: 'slots', value: '4'},
          {title: 'tech session', subtitle: '(30 mins)', value: '1'},
          {title: 'Booth Size', value: '3m x 2m'},
          {title: 'Full Access Pass', value: '10'},
          {title: 'Logo placement', value: 'Session + Summit web'},
          {title: 'Keynote speech', value: false},
          {title: 'Logo in Session Video', value: false},
          {title: 'Hands On Lab', value: 'Max 2 hours'},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: false},
          {title: 'Registration List', value: false},
          {title: 'Monitor', value: true},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: false},
        ]
      },
      {
        title: 'silver',
        priceMember: '$ 6,000',
        priceNonMember: '$ 10,800',
        color: '#A3A3A3',
        items: [
          {title: 'slots', value: '4'},
          {title: 'tech session', subtitle: '(30 mins)', value: '1'},
          {title: 'Booth Size', value: '3m x 2m'},
          {title: 'Full Access Pass', value: '8'},
          {title: 'Logo placement', value: 'Session + Summit web'},
          {title: 'Keynote speech', value: false},
          {title: 'Logo in Session Video', value: false},
          {title: 'Hands On Lab', value: false},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: false},
          {title: 'Registration List', value: false},
          {title: 'Monitor', value: false},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: false},
        ]
      },
      {
        title: 'startup',
        priceMember: '$ 3,000',
        priceNonMember: '$ 3,000',
        color: '#E0E0DF',
        items: [
          {title: 'slots', value: '3'},
          {title: 'tech session', subtitle: '(30 mins)', value: false},
          {title: 'Booth Size', value: '2m x 2m'},
          {title: 'Full Access Pass', value: '5'},
          {title: 'Logo placement', value: 'Session + Summit web'},
          {title: 'Keynote speech', value: false},
          {title: 'Logo in Session Video', value: false},
          {title: 'Hands On Lab', value: false},
          {title: 'Ad video', subtitle: '(Max 4 hours)', value: false},
          {title: 'Registration List', value: false},
          {title: 'Monitor', value: false},
          {title: 'Customized Sponsors', subtitle: '(Cost add)', value: false},
        ]
      },
    ]
  }
];

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
            subtitle="SUPPORT THE NEXT DECADE OF OPEN INFRASTRUCTURE"
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
          {/*<SponsorshipSection
            title="OPENINFRA DAYS SPECIAL EDITION"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS_DAYS}
          />*/}
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
