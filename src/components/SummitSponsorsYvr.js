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
                    <a class="logo-headline" href="http://www.windriver.com" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/windriver-lg.png" alt="Wind River" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Premier Sponsors</h3>
                <div class="logos">
                    <a class="logo-premier" href="https://www.okestro.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1152/logos/okestro-sm1.png" alt="Okestro" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Exhibitor Sponsors</h3>
                <div class="logos">
                    <a class="logo-exhibitor" href="https://openuk.uk/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1266/logos/openuk-logo-new.png" alt="OpenUK" /></a>
                    <a class="logo-exhibitor" href="https://openmetal.io/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/openmetal-lg.jpg" alt="Open Metal" /></a>
                    <a class="logo-exhibitor" href="https://acmegating.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/acmegating-lg.png" alt="Acme Gating" /></a>
                    <a class="logo-exhibitor" href="http://www.mirantis.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/mirantis-lg.jpg" alt="Mirantis" /></a>
                    <a class="logo-exhibitor" href="https://www.stackit.de/en/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1269/logos/stackitlogo.svg" alt="STACKIT" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Media Partners</h3>
                <div class="logos">
                    <a class="logo-headline" href="https://kube.events/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1267/logos/logo-light-bg.png" alt="Kube Events" /></a>
                    <a class="logo-headline" href="https://kube.careers/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1268/logos/logo-color.png" alt="Kube Careers" /></a>
                    <a class="logo-headline" href="https://superuser.openstack.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1270/logos/superuser-icon1.svg" alt="SuperUser" /></a>
                </div>
            </div>
        </div>
    )
}

export default SummitSponsorsYvr;