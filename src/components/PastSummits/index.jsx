import React from "react";

import "./styles.scss";

import SummitCard from "../SummitCard";

const PAST_SUMMITS = [
  {
    key: "europe-25",
    background: "/img/summit-landing/cards/summit-europe-25-2.png",
    date: "October 17-19, 2025",
    location: "École Polytechnique, Paris-Saclay, France",
    notification: {
      text: " ",
      button: {
        link: "https://summit2025.openinfra.org",
        text: "Learn More",
      },
    },
  },
  {
    key: "asia-24",
    background: "/img/summit-landing/cards/summit-asia.png",
    date: "September 3 & 4, 2024",
    location: "Suwon Convention Center, Suwon, South Korea",
    notification: {
      text: " ",
      button: {
        link:
          "https://youtube.com/playlist?list=PLKqaoAnDyfgqjY-vzt45oayXLa4aLpMRU&feature=shared",
        text: "Learn More",
      },
    },
  },
  // {
  //     key: 'europe-25',
  //     background: '/img/summit-landing/cards/summit-europe25.png',
  //     date: '2025',
  //     location: 'Berlin, Germany',
  //     notification: null
  // }
];

const PastSummits = ({ title }) => {
  return (
    <div className="container upcoming-summits-wrapper">
      {title && <div className="upcoming-summits-title">{title}</div>}
      {PAST_SUMMITS.map((summit) => (
        <SummitCard
          key={summit.key}
          background={summit.background}
          summit={summit}
        />
      ))}
    </div>
  );
};

export default PastSummits;
