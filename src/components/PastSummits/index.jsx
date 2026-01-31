import React from "react";

import "./styles.scss";

import SummitCard from "../SummitCard";

const PastSummits = ({ title, summits }) => {
  return (
    <div className="container upcoming-summits-wrapper">
      {title && <div className="upcoming-summits-title">{title}</div>}
      {summits.map((summit) => (
        <SummitCard
          key={summit.key}
          background={summit.background.publicURL}
          summit={summit}
          link={summit.link}
        />
      ))}
    </div>
  );
};

export default PastSummits;