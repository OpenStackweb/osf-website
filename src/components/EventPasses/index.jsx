import React from "react";

import RoundedButton from "../RoundedButton";

const EventPasses = ({ title, passes, button }) => {
  return (
    <section className="event-section event-passes">
      <div className="container">
        {title && <h2 className="event-section-title">{title}</h2>}
        {passes && passes.length > 0 && (
          <ul className="event-passes-list">
            {passes.map((pass, index) => (
              <li className="event-pass" key={`event-pass-${index}`}>
                {pass.label && (
                  <span className="event-pass-label">{pass.label}</span>
                )}
                {pass.price && (
                  <span className="event-pass-price">{pass.price}</span>
                )}
                {pass.note && (
                  <span className="event-pass-note">{pass.note}</span>
                )}
              </li>
            ))}
          </ul>
        )}
        {button && button.display && button.text && (
          <div className="event-passes-cta">
            <RoundedButton
              link={button.link}
              text={button.text}
              className="event-button"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default EventPasses;
