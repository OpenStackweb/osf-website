import React, { useEffect, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { pickBy } from "lodash";
import { connect } from "react-redux";
import { updateFiltersFromHash, updateFilter } from "../actions/schedule-actions";
import { syncData } from "../actions/base-actions";
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
import ScheduleBanner from "../components/ScheduleBanner";
import { PageScrollInspector, SCROLL_DIRECTION } from "../components/PageScrollInspector";
import settings from "../content/settings.json";

//@todo: connect to marketing api
const dummyMarketingSettings = {
    "color_primary": "#5e5f62",
    "color_secondary": "#262673",
    "color_text_dark": "#5e5f62",
    "color_text_light": "#ffffff"
};

const SchedulePageTemplate = ({ summit, schedules, isLoggedUser, updateFilter, updateFiltersFromHash, scheduleProps, schedKey, headerTitle }) => {
    const filtersWrapperRef = useRef(null);
    const [showFilters, setShowfilters] = useState(false);
    const scheduleState = schedules.find(s => s.key === schedKey);
    const { events, allEvents, filters, view, timezone, colorSource } = scheduleState || {};

    const onScrollDirectionChange = useCallback(direction => {
        if (direction === SCROLL_DIRECTION.UP)
            filtersWrapperRef.current.scroll({ top: 0, behavior: 'smooth' });
    }, [filtersWrapperRef]);

    const onPageBottomReached = useCallback(pageBottomReached => {
        if (pageBottomReached)
            filtersWrapperRef.current.scroll({ top: filtersWrapperRef.current.scrollHeight, behavior: 'smooth' });
    }, [filtersWrapperRef]);

    useEffect(() => {
        if (scheduleState) {
            updateFiltersFromHash(schedKey, filters, view);
        }
    }, [schedKey, filters, view, updateFiltersFromHash]);

    if (!summit || schedules.length === 0) return null;

    // if we don't have a state, it probably means the schedule was disabled from admin.
    if (!scheduleState) {
        return <NotFoundPage />;
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
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <SubNav active="summit-schedule" pageName="Schedule" isLoggedUser={isLoggedUser} />
                <Header title={headerTitle} />
            </div>
            <main className="main">
                <div className="content">
                    <div className="container">
                        <div className={`${styles.wrapper} ${showFilters ? styles.showFilters : ""}`}>
                            <div className={styles.scheduleWrapper}>
                                <FullSchedule {...schedProps} />
                            </div>
                            <div ref={filtersWrapperRef} className={styles.filterWrapper}>
                                <ScheduleFilters {...filterProps} />
                                <ScheduleBanner />
                            </div>
                            <FilterButton open={showFilters} onClick={() => setShowfilters(!showFilters)} />
                        </div>
                    </div>
                </div>
                <PageScrollInspector threshold={700} scrollDirectionChanged={onScrollDirectionChange} bottomReached={onPageBottomReached} />
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

const SchedulePage = ({ location, isLoggedUser, summit, schedules, updateFiltersFromHash, updateFilter, syncData, schedKey, headerTitle, data, lastBuild }) => {
    const post = data?.markdownRemark ? data.markdownRemark : null;
    const seo = post?.frontmatter.seo ? post.frontmatter.seo : undefined;

    useEffect(() => {
        if (!lastBuild || settings.lastBuild > lastBuild) {
            syncData();
        }
    }, [lastBuild, syncData]);

    return (
        <Layout location={location}>
            <SEO seo={seo} />
            <SchedulePageTemplate
                summit={summit}
                schedules={schedules}
                isLoggedUser={isLoggedUser}
                updateFilter={updateFilter}
                updateFiltersFromHash={updateFiltersFromHash}
                schedKey={post?.frontmatter.schedKey || schedKey}
                headerTitle={post?.frontmatter.headerTitle || headerTitle}
            />
        </Layout>
    )

}

const mapStateToProps = ({ summitState, settingsState, loggedUserState, allSchedulesState }) => ({
    summit: summitState.summit,
    isLoggedUser: loggedUserState.isLoggedUser,
    lastBuild: settingsState.lastBuild,
    schedules: allSchedulesState.schedules,
});

export default connect(mapStateToProps, { updateFiltersFromHash, updateFilter, syncData })(SchedulePage);

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