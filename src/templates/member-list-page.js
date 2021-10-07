import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { connect } from "react-redux";
import { getMembers } from '../actions/user-actions';

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";
import { Pagination } from 'react-bootstrap';

export const MemberListPageTemplate = ({
  isLoggedUser,
  keyword,
  changeKeyword,
  changeLetter,
  changePage,
  searchMembers,
  membersList,
  current_page,
  last_page,
  loading_members
}) => {

  console.log('asda', loading_members)

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];  

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title='Open Infrastructure Foundation' subTitle='Member Directory' />
      </div>
      <AjaxLoader show={ loading_members } size={ 120 }/>
      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="member-list-search">
                <form onSubmit={(ev) => { ev.preventDefault(); searchMembers(keyword) }}>
                  <label>Search Member</label>
                  <input value={keyword} onChange={(e) => changeKeyword(e.target.value)} placeholder="first name, last name or irc nickname" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="member-list-letters">
                {letters.map((l, index) => {
                  return (
                    <span onClick={() => changeLetter(l)} key={`letter-${index}`}>{l}</span>
                  )
                })}
              </div>
              <div className="member-list">
                {membersList?.map((member, index) => {
                  return (
                    <span key={`member-${index}`}>
                      {`${member.first_name} ${member.last_name}`}
                    </span>
                  )
                })}
              </div>

              <div className="member-list-pagination">
                <Pagination
                  className="pagination"
                  bsSize="medium"
                  prev
                  next
                  first
                  last
                  ellipsis
                  boundaryLinks
                  maxButtons={10}
                  items={last_page}
                  activePage={current_page}
                  onSelect={changePage}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

const MemberListPage = ({ isLoggedUser, getMembers, membersList, current_page, last_page, loading_members }) => {

  console.log('page', loading_members)

  const [keyword, setKeyword] = useState('');
  const [letter, setLetter] = useState('');

  const changeParam = (key, l) => {    
    if(key) {
      setLetter(() => '');
      setKeyword(key)
    } else {
      setKeyword(() => '');
      setLetter(l);
      getMembers(null, l, 1);
    }
  }

  const changePage = (ev) => {    
    getMembers(keyword, letter, ev);
  }

  useEffect(() => {
    getMembers();
  }, [])

  return (
    <Layout>
      <SEO />
      <MemberListPageTemplate
        isLoggedUser={isLoggedUser}
        keyword={keyword}
        changeKeyword={(ev) => changeParam(ev, null)}
        changeLetter={(ev) => changeParam(null, ev)}
        changePage={changePage}
        searchMembers={getMembers}
        membersList={membersList}
        current_page={current_page}
        last_page={last_page}
        loading_members={loading_members}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  membersList: state.userState.members.members_list,
  current_page: state.userState.members.current_page,
  last_page: state.userState.members.last_page,
  loading_members: state.userState.members.loading_members,
}), { getMembers })(MemberListPage)