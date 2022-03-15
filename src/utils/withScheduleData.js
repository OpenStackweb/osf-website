import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {compose} from "redux";
import HeroComponent from "../components/HeroComponent";
import {
  reloadScheduleData,
  updateFilter,
  updateFiltersFromHash,
} from "../actions/schedule-actions";

// This HOC makes sure the schedules array in allSchedulesState is populated before render.
const componentWrapper = (WrappedComponent) => ({schedules, updateFiltersFromHash, reloadScheduleData, ...props}) => {
  const [loaded, setLoaded] = useState(false);
  const { schedKey } = props;
  const scheduleState = schedules?.find( s => s.key === schedKey);
  const { key, filters, view } = scheduleState || {};

  // on first load we load schedules data, always
  useEffect(() => {
      reloadScheduleData();
  }, []);

  useEffect(() => {
    if (schedules.length > 0) {
      updateFiltersFromHash(schedKey, filters, view);
      setLoaded(true);
    }
  }, [key]);

  if (!loaded)
    return <HeroComponent title="Loading schedule data" />;

  return <WrappedComponent {...props} scheduleState={scheduleState} />;
};

const mapStateToProps = ({summitState, loggedUserState, allSchedulesState }) => ({
  summit: summitState.summit,
  isLoggedUser: loggedUserState.isLoggedUser,
  schedules: allSchedulesState.schedules,
});

const reduxConnection = connect(mapStateToProps, {
  updateFiltersFromHash,
  updateFilter,
  reloadScheduleData,
});

const withScheduleData = compose(reduxConnection, componentWrapper);

export default withScheduleData;