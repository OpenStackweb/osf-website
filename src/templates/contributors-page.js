import React, { useState, useEffect, useMemo } from 'react'
import { debounce } from 'lodash'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { useTable, useSortBy } from 'react-table'
import { Helmet } from "react-helmet"

import { connect } from "react-redux";

export const ContributorsPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
  companyDetails
}) => {
  const PageContent = contentComponent || Content

  const companyDetailsArr = React.useMemo(() => companyDetails.companies, []);

  const columns = React.useMemo(() => [
      {
        Header: companyDetails.leftColHeading,
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: companyDetails.rightColHeading,
        accessor: 'col2',
      },
    ],[]
  )

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
      columns,
      data,
      },
      useSortBy
    )
  
    // Render the UI for your table
    return (
      
      <table className="corpTable" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                 {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                      ? <i className="fa fa-chevron-down sort-icon" />
                      : <i className="fa fa-chevron-up sort-icon" />
                      : <i className="fas fa-sort sort-icon" />
                      }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <div>
        <Helmet>
          <script src="https://kit.fontawesome.com/9438df25f9.js" crossorigin="anonymous"></script>
        </Helmet>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={title} subTitle={subTitle} />
      </div>
      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content} />
                  <div id="arrayinfo"></div>
                  <div id="theObjects"></div>
                  <Table columns={columns} data={companyDetailsArr} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

ContributorsPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

const ContributorsPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ContributorsPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        content={post.html}
        companyDetails={post.frontmatter.companyDetails}
      />
    </Layout>
  )
}

ContributorsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ContributorsPage)

export const contributorsPageQuery = graphql`
  query ContributorsPage($id: String!) {
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
        companyDetails {
          leftColHeading
          rightColHeading
          companies {
            col1
            col2
          }
        }
      }
      
    }
  }
`