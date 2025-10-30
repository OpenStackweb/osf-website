import React from "react";
import SummitCard from "../SummitCard";
import "./styles.scss";

const UPCOMING_SUMMITS = [
  {
    key: "china-26",
    background: "/img/summit-landing/cards/summit-europe-25-2.png",
    date: "September 8-9, 2026",
    location: "Shanghai International Convention Center Oriental Riverside Hotel",
    notification: {
      text: " ",
      button: {
        link: "https://summit2025.openinfra.org",
        text: "Learn More",
      },
    },
  }
];

const UpcomingSummits = ({ title }) => {
  return (
    <div className="container upcoming-summits-wrapper">
      {title && <div className="upcoming-summits-title">{title}</div>}
      {UPCOMING_SUMMITS.map((summit) => (
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
