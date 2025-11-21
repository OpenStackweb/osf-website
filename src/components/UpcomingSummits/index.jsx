import React from "react";
import SummitCard from "../SummitCard";
import "./styles.scss";

const UpcomingSummits = ({ title, summits }) => {
  return (
    <div className="container upcoming-summits-wrapper">
      {title && <div className="upcoming-summits-title">{title}</div>}
      {summits.map((summit) => (
        <SummitCard
          key={summit.key}
          background={summit.background}
          summit={summit}
        />
      ))}
    </div>
  );
};

export default UpcomingSummits;