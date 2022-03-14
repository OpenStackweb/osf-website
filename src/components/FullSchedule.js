import React from "react";
import { connect } from "react-redux";
import { needsLogin } from "../utils/alerts";
import {addToSchedule, removeFromSchedule} from "../actions/user-actions";
import {callAction, getShareLink} from "../actions/schedule-actions";

// these two libraries are client-side only
import Schedule from "full-schedule-widget/dist";
import "full-schedule-widget/dist/index.css";

const FullSchedule = ({
  summit,
  className,
  userProfile,
  marketingSettings,
  addToSchedule,
  removeFromSchedule,
  callAction,
  filters,
  view,
  schedKey,
  ...rest
}) => {
  const componentProps = {
    title: "Schedule",
    summit,
    marketingSettings,
    userProfile,
    withThumbs: false,
    showSendEmail: false,
    onStartChat: null,
    shareLink: getShareLink(filters, view),
    filters,
    view,
    needsLogin: needsLogin,
    triggerAction: (action, payload) => {
      switch (action) {
        case "ADDED_TO_SCHEDULE": {
          return addToSchedule(payload.event);
        }
        case "REMOVED_FROM_SCHEDULE": {
          return removeFromSchedule(payload.event);
        }
        default:
          return callAction(schedKey, action, payload);
      }
    },
    ...rest,
  };

  return (
    <div className={className || "schedule-container"}>
      <Schedule {...componentProps} />
    </div>
  );
};

const mapStateToProps = ({ userState }) => ({
  userProfile: userState.userProfile,
});

export default connect(mapStateToProps, {
  addToSchedule,
  removeFromSchedule,
  callAction,
})(FullSchedule);
