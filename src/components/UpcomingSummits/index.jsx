import React from "react";
import SummitCard from "../SummitCard";
import "./styles.scss";

const UPCOMING_SUMMITS = [
  {
    key: "europe-25",
    background: "/img/summit-landing/cards/summit-europe-25-2.png",
    date: "October 17-19, 2025",
    location: "École Polytechnique, Paris-Saclay, France",
    link: "https://summit2025.openinfra.org",
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
          link={summit.link}
          summit={summit}
        />
      ))}
    </div>
  );
};

export default UpcomingSummits;
