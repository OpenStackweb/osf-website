import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { pickBy } from "lodash";
import { navigate } from "gatsby";
import { connect } from "react-redux";
import { updateFiltersFromHash, updateFilter } from "../actions/schedule-actions";
import Layout from "../components/Layout";
import FullSchedule from "../components/FullSchedule";
import ScheduleFilters from "../components/ScheduleFilters";
import FilterButton from "../components/FilterButton";
import NotFoundPage from "../pages/404";
import styles from "../style/full-schedule.module.scss";

const SchedulePage = ({summit, schedules, isLoggedUser, location, updateFilter, updateFiltersFromHash, scheduleProps, schedKey }) => {
    const [showFilters, setShowfilters] = useState(false);
    const scheduleState = schedules.find( s => s.key === schedKey);
    const {events, allEvents, filters, view, timezone, colorSource} = scheduleState || {};

    useEffect(() => {
        updateFiltersFromHash(schedKey, filters, view);
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
        colorSource,
    };

    let schedProps = {
        summit,
        events,
        filters,
        view,
        timezone,
        colorSource,
        schedKey,
        ...scheduleProps
    };

    if (isLoggedUser) {
        schedProps = {
            ...schedProps,
            onEventClick: (ev) => navigate(`/a/event/${ev.id}`, { state: { previousUrl: location.pathname }}),
            onStartChat: null,
        };
    }

    return (
        <Layout location={location}>
            <div className="container">
                <div className={`${styles.wrapper} ${showFilters ? styles.showFilters : ""}`}>
                    <div className={styles.scheduleWrapper}>
                        <FullSchedule {...schedProps} />
                    </div>
                    <div className={styles.filterWrapper}>
                        <ScheduleFilters {...filterProps} />
                    </div>
                    <FilterButton open={showFilters} onClick={() => setShowfilters(!showFilters)} />
                </div>
            </div>
        </Layout>
    );
};

SchedulePage.propTypes = {
    schedKey: PropTypes.string.isRequired,
    summitPhase: PropTypes.number,
    isLoggedUser: PropTypes.bool,
};

const mapStateToProps = ({ summitState, loggedUserState, allSchedulesState }) => ({
    summit: summitState.summit,
    isLoggedUser: loggedUserState.isLoggedUser,
    schedules: allSchedulesState.schedules,
});

export default connect(mapStateToProps, { updateFiltersFromHash, updateFilter })(SchedulePage);
