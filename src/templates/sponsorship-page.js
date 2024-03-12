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
import SponsoringBanner from "../components/SponsoringBanner";
import SponsorshipSubNav from "../components/SponsorshipSubNav";


const SPONSORSHIPS = [
  {
    title: ["September 3 & 4, 2024", "Suwon Convention Center", "Suwon, South Korea"],
    name: "OpenInfra Summit Asia",
    showname: ["OpenInfraSummit-OCPRegionalSummit"],
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
    title: ["SOVEREIGN CLOUD STACK X OPENINFRA DAY GERMANY - MAY 14 & 15, 2024", "BERLIN, GERMANY"],
    subtitle: <><a href="mailto:events@openinfra.dev">Contact us</a> to sponsor OpenInfra Day Germany.</>,
    showname: ["Germany"],
    name: "OID Germany",
    plans: [
      {
        title: 'platinum',
        price: '15.000 € Euro',
        color: '#43B85C',
        items: [
          {title: 'slots', value: '1'},
          {title: 'Stand in the Exhibition Area', value: '2 Stand Table, 4 Chairs'},
          {title: 'Logo Placement', value: 'Event Slides'},
          {title: 'Social media Advertising', value: true},
          {title: 'Rollup Next to Main Stage', value: true},
          {title: '30 minute pitch at the main stage', value: '(between program items)'},
        ]
      },
      {
        title: 'gold',
        price: '7.500 € Euro',
        color: '#F7B749',
        items: [
          {title: 'slots', value: '3'},
          {title: 'Stand in the Exhibition Area', value: '1 Stand Table, 2 Chairs'},
          {title: 'Logo Placement', value: 'Event Slides'},
          {title: 'Social media Advertising', value: true},
          {title: 'Rollup Next to Main Stage', value: true},
          {title: '15 minute pitch at the main stage', value: '(between program items)'},
        ]
      },
      {
        title: 'silver',
        price: '2.500 € Euro',
        color: '#A8A9AD',
        items: [
          {title: 'slots', value: '5'},
          {title: 'Stand in the Exhibition Area', value: '1 Stand Table, 2 Chairs'},
          {title: 'Logo Placement', value: 'Event Slides'},
          {title: 'Social media Advertising', value: true},
          {title: 'Rollup Next to Main Stage', value: false},
          {title: '5 minute pitch at the main stage', value: '(between program items)'},
        ]
      },
      {
        title: 'catering',
        price: '500 € Euro',
        color: '#EAEAEA',
        items: [
          {title: 'slots', value: false},
          {title: 'Stand in the Exhibition Area', value: false},
          {title: 'Logo Placement', value: false},
          {title: 'Social media Advertising', value: false},
          {title: 'Rollup', value: false},
          {title: '5 minute pitch at the main stage', value: false},
          {title: 'Display on the buffet', value: true},
        ]
      }
    ]
  },
  {
    title: ["OpenInfra Day Turkiye - May 20, 2024", "ALBERT LONG HALL CULTURAL CENTER, BOĞAZIÇI UNIVERSITY ISTANBUL, TURKIYE"],
    subtitle: <><a href="https://drive.google.com/file/d/1VI9BbhP2sOWD6QZDAsloElJRuTNif7LL/view">Learn more</a> about sponsoring OpenInfra Days Turkiye.</>,
    showname: ["Turkiye"],
    name: "OID Turkiye",
    plans: [
      {
        title: 'platinum',
        price: '$ 12,500 USD',
        color: '#757575',
        items: [
          {title: 'slots', value: '1'},
          {title: 'Booth are in the Foyer', value: '3m x 2m'},
          {title: '30 min. Presentation', value: '450+people in the Plenary session'},
          {title: 'Dedicated Meeting Room', value: true},
          {title: 'Logo Display', value: 'Website, Online Invitations'},
          {title: '', value: ''}, // for alignment
        ]
      },
      {
        title: 'gold',
        price: '$ 10,000 USD',
        color: '#DAA511',
        items: [
          {title: 'slots', value: 'not limited'},
          {title: 'Booth are in the Foyer', value: '2.5m x 2m'},
          {title: '20 min. Presentation', value: '450+people in the Plenary session'},
          {title: 'Dedicated Meeting Room', value: true},
          {title: 'Logo Display', value: 'Website, Online Invitations'},
          {title: '', value: ''}, // for alignment
        ]
      },
      {
        title: 'silver',
        price: '$ 7,500 USD',
        color: '#A8A9AD',
        items: [
          {title: 'slots', value: 'not limited'},
          {title: 'Booth are in the Foyer', value: '2m x 2m'},
          {title: '10 min. Presentation', value: '450+people in the Plenary session'},
          {title: 'Dedicated Meeting Room', value: false},
          {title: 'Logo Display', value: 'Website, Online Invitations'},
          {title: '', value: ''}, // for alignment
        ]
      },
      {
        title: 'lunch',
        price: '$ 5,000 USD',
        color: '#EAEAEA',
        items: [
          {title: 'slots', value: false},
          {title: 'Booth are in the Foyer', value: false},
          {title: 'Presentation', value: false},
          {title: 'Dedicated Meeting Room', value: false},
          {title: 'Logo Display', value: 'Roll-up in Lunch Area, Website, Online Invitations'},
          {title: '', value: ''}, // for alignment
        ]
      },
      {
        title: 'coffee break',
        price: '$ 2,500 USD',
        color: '#EAEAEA',
        items: [
          {title: 'slots', value: false},
          {title: 'Booth are in the Foyer', value: false},
          {title: 'Presentation', value: false},
          {title: 'Dedicated Meeting Room', value: false},
          {title: 'Logo Display', value: 'Roll-up in Coffee Area, Website, Online Invitations'},
          {title: '', value: ''}, // for alignment
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
            subtitle="Interested in sponsoring?</br>Reach out to be connected to the OpenInfra Foundation</br>and OpenInfra Summit community organizers!"
            backgroundImage="/img/sponsorship/summit-marketplace.png"
            button={{ link: 'mailto:events@openinfra.dev', text: 'Contact Now'}}
          />  
          <SponsorshipSubNav 
            sponsorships={[...SPONSORSHIPS, ...SPONSORSHIPS_DAYS]}
          />
          <SponsorshipSection
            title="OPENINFRA SUMMIT ASIA | OCP REGIONAL SUMMIT APAC"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS}
          />
          <SponsoringBanner 
            title='Interested in sponsoring?'
            subTitle='Reach out to be connected to the OpenInfra</br>Foundation and OpenInfra Summit Asia organizers!'
            button={{link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates', text: 'Contact Now'}} />
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
            text='Reach out to be connected</br>to the OpenInfra Foundation and</br>OpenInfra Summit Asia organizers!'
            button={{ link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates', text: 'Contact Now'}}
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
