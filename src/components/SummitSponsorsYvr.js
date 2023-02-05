import React, { useState, useEffect } from "react";

const SummitSponsorsYvr = ({ summit_sponsors }) => {

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
            <div>
                <h3 class="small-title-summit">Headline Sponsors</h3>
                <div class="logos">
                    <a class="logo-headline" href="https://web.archive.org/web/20220316165832/https://ubuntu.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://web.archive.org/web/20220316165832/https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1195/logos/ubuntu-cannonical-2bf0769d3dd3b2c9aea2d1f155160cea.svg" alt="Ubuntu" />
                    </a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Premier Sponsors</h3>
                <div class="logos">
                    <a class="logo-premier" href="https://web.archive.org/web/20220316165832/http://www.mirantis.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://web.archive.org/web/20220316165832/https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/mirantis-lg.jpg" alt="Mirantis" />
                    </a>
                    <a class="logo-premier" href="https://web.archive.org/web/20220316165832/http://vexxhost.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://web.archive.org/web/20220316165832/https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/120/logos/vexxhost-lg2.jpg" alt="VEXXHOST, Inc." />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SummitSponsorsYvr;