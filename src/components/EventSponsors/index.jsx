import React from "react";

import LinkComponent from "../LinkComponent";

const EventSponsors = ({ title, tiers }) => {
  const populatedTiers = (tiers || []).filter(
    (tier) => tier && tier.sponsors && tier.sponsors.length > 0
  );

  if (populatedTiers.length === 0) return null;

  return (
    <section className="event-section event-sponsors">
      <div className="container">
        {title && <h2 className="event-section-title">{title}</h2>}
        {populatedTiers.map((tier, tierIndex) => (
          <div className="event-sponsor-tier" key={`event-sponsor-tier-${tierIndex}`}>
            {tier.name && (
              <h3 className="event-sponsor-tier-name">{tier.name}</h3>
            )}
            <div className="event-sponsor-logos">
              {tier.sponsors.map((sponsor, sponsorIndex) => {
                const logo = sponsor.logo
                  ? sponsor.logo.publicURL || sponsor.logo
                  : null;
                // Logos are normally sized by a single shared height. A stacked or
                // square lockup comes out much narrower than a wide one at that
                // height, so a sponsor can override it. The small-screen value
                // keeps the same ratio to the default as the two CSS steps do.
                const customHeight = Number(sponsor.logoHeight) || null;
                const heightVars = customHeight
                  ? {
                      "--event-sponsor-logo-height": `${customHeight}px`,
                      "--event-sponsor-logo-height-sm": `${Math.round(
                        (customHeight * 36) / 44
                      )}px`,
                    }
                  : undefined;
                const image = logo ? (
                  <img src={logo} alt={sponsor.name || ""} />
                ) : (
                  <span className="event-sponsor-name">{sponsor.name}</span>
                );

                return (
                  <div
                    className="event-sponsor"
                    key={`event-sponsor-${tierIndex}-${sponsorIndex}`}
                    style={heightVars}
                  >
                    {sponsor.url ? (
                      <LinkComponent href={sponsor.url} className="event-sponsor-link">
                        {image}
                      </LinkComponent>
                    ) : (
                      image
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSponsors;
