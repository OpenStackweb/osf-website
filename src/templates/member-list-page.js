import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'

import {connect} from "react-redux";
import {getMembers} from '../actions/member-actions';
import {getElectionStatus} from '../actions/election-actions';

import {AjaxLoader} from "openstack-uicore-foundation/lib/components";
import {Pagination} from 'react-bootstrap';
import LinkComponent from '../components/LinkComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MemberListPageTemplate = ({
                                           isLoggedUser,
                                           keyword,
                                           letter,
                                           changeKeyword,
                                           changeLetter,
                                           changePage,
                                           searchMembers,
                                           membersList,
                                           current_page,
                                           last_page,
                                           loading_members,
                                           election_status
                                       }) => {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar/>
                <NavbarV2 isLoggedUser={isLoggedUser}/>
                <Header title='OpenInfra Foundation' subTitle='Member Directory'/>
            </div>
            <AjaxLoader show={loading_members} size={120}/>
            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            {election_status?.status === 'NominationsOpen' &&
                            <div className="nomination-open">
                                <h3>Happening Now: Individual Board Member Nominations</h3>
                                <p>
                                    The OpenInfra community is currently nominating members for the <LinkComponent
                                    href="/election">{election_status.name} </LinkComponent>
                                    (as Individual Board Members). To nominate someone search for them using the
                                    directory and
                                    click the Nominate button in their profile.
                                </p>
                            </div>
                            }
                            <div className="member-list-search">
                                <form onSubmit={(ev) => {
                                    ev.preventDefault();
                                    searchMembers(keyword)
                                }}>
                                    <label>Search Member</label>
                                    <input value={keyword} onChange={(e) => changeKeyword(e.target.value)}
                                           placeholder="first name, last name or irc nickname"/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="member-list-letters">
                                {letters.map((l, index) => {
                                    return (
                                        <span onClick={() => changeLetter(l)}
                                              className={letter === l ? 'letter-selected' : ''}
                                              key={`letter-${index}`}>{l}</span>
                                    )
                                })}
                            </div>
                            <div className="member-list">
                                {!loading_members && membersList?.map((member, index) => {
                                    return (
                                        <span key={`member-${index}`}>
                      <LinkComponent
                          href={`/a/community/members/${member.id}`}>{`${member.first_name} ${member.last_name}`}</LinkComponent>
                    </span>
                                    )
                                })}
                            </div>
                            {!loading_members &&
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
                            }
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const MemberListPage = ({
                            isLoggedUser,
                            getMembers,
                            getElectionStatus,
                            membersList,
                            current_page,
                            last_page,
                            loading_members,
                            election_status
                        }) => {

    const [keyword, setKeyword] = useState('');
    const [letter, setLetter] = useState('A');

    const changeParam = (key, l) => {
        if (key) {
            setLetter(() => '');
            setKeyword(key)
        } else {
            setKeyword(() => '');
            setLetter(l);
            getMembers(null, l);
        }
    }

    const changePage = (page) => {
        getMembers(keyword, letter, page);
    }

    useEffect(() => {
        getMembers(null, letter);
        getElectionStatus();
    }, [])

    return (
        <Layout>
            <SEO/>
            <MemberListPageTemplate
                isLoggedUser={isLoggedUser}
                keyword={keyword}
                letter={letter}
                changeKeyword={(ev) => changeParam(ev, null)}
                changeLetter={(ev) => changeParam(null, ev)}
                changePage={changePage}
                searchMembers={getMembers}
                membersList={membersList}
                current_page={current_page}
                last_page={last_page}
                loading_members={loading_members}
                election_status={election_status}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    membersList: state.memberState.members_list,
    current_page: state.memberState.current_page,
    last_page: state.memberState.last_page,
    loading_members: state.memberState.loading_members,
    election_status: state.electionState.election_status,
}), {getMembers, getElectionStatus})(MemberListPage)
