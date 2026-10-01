import React from "react";

const EventVenue = ({ title, name, address, description }) => {
  return (
    <section className="event-section event-venue">
      <div className="container">
        {title && <h2 className="event-section-title">{title}</h2>}
        {name && <p className="event-venue-name">{name}</p>}
        {address && (
          <p className="event-venue-address">
            <img
              className="event-venue-icon"
              src="/img/summit/Vector-world.svg"
              alt=""
            />
            <span>{address}</span>
          </p>
        )}
        {description && (
          <p className="event-venue-description">{description}</p>
        )}
      </div>
    </section>
  );
};

export default EventVenue;
