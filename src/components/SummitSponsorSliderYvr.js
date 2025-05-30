import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SummitSponsorSliderYvr = () => {

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <a role="button" data-slide="prev" className="carousel-control-prev" style={{ ...style, paddingLeft: 80, display: 'flex' }} onClick={onClick}>
            <span aria-hidden="true" className="carousel-control-prev-icon"></span>
            <img src="/img/symbols/logo-arrow-left.svg" alt="Previous" className="home-s8-container-child" />
          </a>
        );
      }
  
      function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <a role="button" data-slide="next" className="carousel-control-next" style={{ ...style, paddingRight: 80, display: 'flex' }} onClick={onClick}>
            <span aria-hidden="true" className="carousel-control-next-icon"></span>
            <img src="/img/symbols/logo-arrow-right.svg" alt="Next" className="home-s8-container-child" />
          </a>
        );
      }
  
      let slideSettings = {
        dots: false,
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true
            }
          }
        ]
      };

    return (
        <Slider {...slideSettings} className="sponsor-logos-slider">
            <div>
                <h3 class="small-title-summit">Headline Sponsors</h3>
                <div class="logos">
                    <a class="logo-headline" href="http://www.windriver.com" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1272/logos/Wind-River-logo1.svg" alt="Wind River" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Premier Sponsors</h3>
                <div class="logos">
                    <a class="logo-premier" href="https://www.okestro.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1152/logos/okestro-lg1.png" alt="Okestro" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Spotlight Sponsors</h3>
                <div class="logos">
                    <a class="logo-spotlight" href="https://canonical.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/57/logos/Canonical-lg.png" alt="Canonical" /></a>
                    <a class="logo-spotlight" href="https://www.redhat.com/en/topics/openstack?sc_cid=70160000000eBtyAAE&sc_cid=70160000000bEKkAAM&offer_id=701600000006R7KAAU" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/Redhat-newlogo-lg.jpg" alt="Red Hat, Inc." /></a>
                    <a class="logo-spotlight" href="https://vexxhost.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/vexxhost-lg2.jpg" alt="VEXXHOST, Inc." /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Exhibitor Sponsors</h3>
                <div class="logos">
                <a class="logo-exhibitor" href="https://acmegating.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/acmegating-lg.png" alt="Acme Gating" /></a>
                <a class="logo-exhibitor" href="https://almalinux.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1278/logos/almalinux.png" alt="AlmaLinux" /></a>
                <a class="logo-exhibitor" href="https://www.bloomberg.com/company/values/tech-at-bloomberg/open-source/?utm_medium=cto&utm_content=site-partner&utm_source=site-partner&utm_campaign=MKTG_2022TechEvent_OpenInfra&tactic=622682" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/667/logos/bloomberg-lg1.png" alt="Bloomberg" /></a>
                <a class="logo-exhibitor" href="https://www.centos.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1282/logos/centos-lg.png" alt="CentOS" /></a>
                <a class="logo-exhibitor" href="http://www.mirantis.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/mirantis-lg.jpg" alt="Mirantis" /></a>
                <a class="logo-exhibitor" href="https://opensource.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1223/logos/imageedit-2-6873030200.jpg" alt="Open Source Initiative" /></a>
                <a class="logo-exhibitor" href="https://openmetal.io/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/openmetal-lg.jpg" alt="Open Metal" /></a>
                <a class="logo-exhibitor" href="http://www.purestorage.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/pure-lg.jpg" alt="Pure Storage" /></a>
                <a class="logo-exhibitor" href="https://rockylinux.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1281/logos/rockylinuxlogo1.png" alt="Rocky Linux" /></a>
                <a class="logo-exhibitor" href="https://www.stackit.de/en/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1269/logos/stackitlogo.svg" alt="STACKIT" /></a>
                <a class="logo-exhibitor" href="https://storpool.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/main_logo/storpool.jpg" alt="StorPool Storage" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Supporting Sponsors</h3>
                <div class="logos">
                    <a class="logo-supporting" href="https://ceph.io/en/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1219/logos/ceph1.png" alt="Ceph" /></a>
                    <a class="logo-supporting" href="https://www.equinix.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1280/logos/equinix-lg.png" alt="Equinix" /></a>
                    <a class="logo-supporting" href="https://openuk.uk/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1266/logos/openuk-logo-new.png" alt="OpenUK" /></a>
                    <a class="logo-supporting" href="https://sodafoundation.io/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1200/logos/soda-foundation-logo-lg.jpeg" alt="Soda Foundation" /></a>
                    <a class="logo-supporting" href="https://www.stackhpc.com/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1135/logos/StackHPC-lg1.png" alt="StackHPC" /></a>
                </div>
            </div>
            <div>
                <h3 class="small-title-summit">Media Partners</h3>
                <div class="logos">
                    <a class="logo-exhibitor" href="https://kube.events/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1267/logos/logo-light-bg.png" alt="Kube Events" /></a>
                    <a class="logo-exhibitor" href="https://kube.careers/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1268/logos/logo-color.png" alt="Kube Careers" /></a>
                    <a class="logo-exhibitor" href="https://superuser.openstack.org/" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1270/logos/superuser-logo1.svg" alt="SuperUser" /></a>
                    <a class="logo-exhibitor" href="https://devitjobs.us" target="_blank" rel="noopener noreferrer"><img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/companies/1276/logos/devitus-lg.png" alt="devIT" /></a>
                </div>
            </div>
        </Slider>
    )
}

export default SummitSponsorSliderYvr;