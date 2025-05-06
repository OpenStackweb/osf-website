import React from "react";

import "./styles.scss";

import SummitCard from "../SummitCard";

const PAST_SUMMITS = [
  {
    key: "asia-24",
    background: "/img/summit-landing/cards/summit-asia.png",
    date: "September 3 & 4, 2024",
    location: "Suwon Convention Center, Suwon, South Korea",
    link: "https://youtube.com/playlist?list=PLKqaoAnDyfgqjY-vzt45oayXLa4aLpMRU&feature=shared",
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
          link={summit.link}
          summit={summit}
        />
      ))}
    </div>
  );
};

export default PastSummits;
