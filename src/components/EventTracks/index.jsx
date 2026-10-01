import React from "react";

const EventTracks = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="event-section event-tracks">
      <div className="container">
        {title && <h2 className="event-section-title">{title}</h2>}
        <ul className="event-tracks-list">
          {items.map((item, index) => (
            <li className="event-track" key={`event-track-${index}`}>
              {item.title && (
                <span className="event-track-title">{item.title}</span>
              )}
              {item.description && (
                <span className="event-track-description">
                  {item.description}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventTracks;
