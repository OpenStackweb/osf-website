import React from "react";

import RoundedButton from "../RoundedButton";

const EventHero = ({ banner, bannerAlt, title, dateLocation, note, buttons }) => {
  const visibleButtons = (buttons || []).filter(
    (button) => button && button.display && button.text
  );

  return (
    <section className="event-hero">
      {banner && (
        <div className="event-hero-banner">
          <img src={banner.publicURL || banner} alt={bannerAlt || title || ""} />
        </div>
      )}
      <div className="container event-hero-body">
        {title && <h1 className="event-hero-title">{title}</h1>}
        {dateLocation && (
          <p className="event-hero-meta">
            <img
              className="event-hero-icon"
              src="/img/summit/Vector-calendar.svg"
              alt=""
            />
            <span>{dateLocation}</span>
          </p>
        )}
        {note && <p className="event-hero-note">{note}</p>}
        {visibleButtons.length > 0 && (
          <div className="event-hero-buttons">
            {visibleButtons.map((button, index) => (
              <RoundedButton
                key={`event-hero-button-${index}`}
                link={button.link}
                text={button.text}
                className="event-button"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventHero;
