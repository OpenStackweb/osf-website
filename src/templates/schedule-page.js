import React, {useEffect, useState, useCallback, useRef} from "react";
import PropTypes from "prop-types";
import {pickBy} from "lodash";
import Layout from "../components/Layout";
import FullSchedule from "../components/FullSchedule";
import ScheduleFilters from "../components/ScheduleFilters";
import FilterButton from "../components/FilterButton";
import SubNav from '../components/SummitSubNav'
import NotFoundPage from "../pages/404";
import SEO from "../components/SEO";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styles from "../style/full-schedule.module.scss";
import RegisterNowBanner from "../components/RegisterNowBanner";
import {PageScrollInspector, SCROLL_DIRECTION} from "../components/PageScrollInspector";
import withScheduleData from "../utils/withScheduleData";
import {deepLinkToEvent} from '../actions/schedule-actions'

import 'bootstrap/dist/css/bootstrap.min.css';

//@todo: connect to marketing api
const dummyMarketingSettings = {
    "color_primary": "#5e5f62",
    "color_secondary": "#262673",
    "color_text_dark": "#5e5f62",
    "color_text_light": "#ffffff"
};

const SchedulePageTemplate = ({
                                  summit,
                                  scheduleState,
                                  isLoggedUser,
                                  updateFilter,
                                  scheduleProps,
                                  schedKey,
                                  headerTitle
                              }) => {

    const filtersWrapperRef = useRef(null);

    const [showFilters, setShowfilters] = useState(false);
    const {key, events, allEvents, filters, view, timezone, colorSource} = scheduleState || {};

    const onScrollDirectionChange = useCallback(direction => {
        if (direction === SCROLL_DIRECTION.UP)
            filtersWrapperRef.current.scroll({top: 0, behavior: 'smooth'});
    }, [filtersWrapperRef]);

    const onPageBottomReached = useCallback(pageBottomReached => {
        if (pageBottomReached)
            filtersWrapperRef.current.scroll({top: filtersWrapperRef.current.scrollHeight, behavior: 'smooth'});
    }, [filtersWrapperRef]);

    useEffect(() => {
        if (scheduleState && !!events?.length) {
            deepLinkToEvent();
        }
    }, [key, events]);

    if (!summit) return null;

    // if we don't have a state, it probably means the schedule was disabled from admin.
    if (!scheduleState) {
        return <NotFoundPage/>;
    }

    const filterProps = {
        summit,
        events,
        allEvents,
        filters: pickBy(filters, (value) => value.enabled),
        triggerAction: (action, payload) => {
            updateFilter(schedKey, payload);
        },
        expandedByDefault: false,
        colorSource,
        marketingSettings: dummyMarketingSettings,
    };

    let schedProps = {
        summit,
        events,
        filters,
        view,
        timezone,
        colorSource,
        schedKey,
        marketingSettings: dummyMarketingSettings,
        title: null,
        ...scheduleProps,
    };

    if (isLoggedUser) {
        schedProps = {
            ...schedProps,
            // @todo implement
            //onEventClick: (ev) => navigate(`/a/event/${ev.id}`, { state: { previousUrl: location.pathname }}),
            onStartChat: null,
        };
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar/>
                <Navbar isLoggedUser={isLoggedUser}/>
                <SubNav active="summit-schedule" pageName="Schedule" isLoggedUser={isLoggedUser}/>
                <Header title={headerTitle}/>
            </div>
            <main className="main">
                <div className="content">
                    <div className="container">
                        <RegisterNowBanner mobile={true}/>
                        <div className={`${styles.wrapper} ${showFilters ? styles.showFilters : ""}`}>
                            <div className={styles.scheduleWrapper}>
                                <FullSchedule {...schedProps} />
                            </div>
                            <div ref={filtersWrapperRef} className={styles.filterWrapper}>
                                <RegisterNowBanner/>
                                <ScheduleFilters {...filterProps} />
                            </div>
                            <FilterButton open={showFilters} onClick={() => setShowfilters(!showFilters)}/>
                        </div>
                    </div>
                </div>
                <PageScrollInspector threshold={700} scrollDirectionChanged={onScrollDirectionChange}
                                     bottomReached={onPageBottomReached}/>
            </main>
        </div>
    );
};

SchedulePageTemplate.propTypes = {
    schedKey: PropTypes.string.isRequired,
    headerTitle: PropTypes.string.isRequired,
    summitPhase: PropTypes.number,
    isLoggedUser: PropTypes.bool,
};

const ConnectedSchedTemplate = withScheduleData(SchedulePageTemplate);

const SchedulePage = ({location, schedKey, headerTitle, data, ...rest}) => {
    const post = data?.markdownRemark ? data.markdownRemark : null;
    const seo = post?.frontmatter.seo ? post.frontmatter.seo : undefined;

    return (
        <Layout location={location}>
            <SEO seo={seo}/>
            <ConnectedSchedTemplate
                schedKey={post?.frontmatter.schedKey || schedKey}
                headerTitle={post?.frontmatter.headerTitle || headerTitle}
                {...rest}
            />
        </Layout>
    )

}

export default SchedulePage;

export const summitScheduleQuery = graphql`
  query SummitSchedule($id: String!) {
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
        headerTitle
        schedKey  
      }
    }
  }
`
