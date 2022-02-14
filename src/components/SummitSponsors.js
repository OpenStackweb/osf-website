import React, { useState, useEffect } from "react";

const SummitSponsors = ({ summit_sponsors }) => {

    const [sponsorTiers, setSponsorTiers] = useState([])

    const getSponsorTiers = () => {
        let tempTiers = []
        summit_sponsors.map(s => {
            return tempTiers.some(t => t.id === s.sponsorship.id) ? null : tempTiers.push(s.sponsorship);
        });
        setSponsorTiers(tempTiers.sort((a, b) => a.order - b.order));
    };

    useEffect(() => {
        getSponsorTiers();
    }, summit_sponsors)

    return (
        <div className="sponsor-logos">
            {sponsorTiers.map((tier, tierIndex) => {
                return (
                    <div key={tierIndex}>
                        <h3 className="small-title-summit">{tier.label}</h3>
                        <div className="logos">
                            {summit_sponsors?.filter(sponsor => sponsor.sponsorship.id === tier.id).sort((a, b) => a.order - b.order).map((sponsor, sponsorKey) => {
                                return (
                                    <a className={`logo-${tier.name.toLowerCase()}`} href={sponsor.company.url}
                                        target="_blank" rel="noopener noreferrer" key={sponsorKey}>
                                        <img src={sponsor.company.big_logo ? sponsor.company.big_logo : sponsor.company.logo} alt={sponsor.company.name} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SummitSponsors;