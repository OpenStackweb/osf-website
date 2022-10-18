import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const OurFocusSection2 = () => {
  useEffect(() => {
    setTimeout(() => {

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        let panels = gsap.utils.toArray('.homepage-panel--animate');

        // Apply ScrollTo on each section upon entering/returning.
        panels.slice(0, -1).forEach((panel) => {
        ScrollTrigger.create({
            trigger: `#${panel.id}`,
            start: 'top top',
            end: 'bottom',
            scroller: '.homepage-panels-container', // define the scroll window.
            onEnter: (self) => {
            gsap.to('.homepage-panels-container', {
                scrollTo: { y: self.end },
                duration: 1,
            });
            },
            onEnterBack: (self) => {
            gsap.to('.homepage-panels-container', {
                scrollTo: { y: self.start },
                duration: 1,
            });
            },
            // markers: true,
        });
        });

        gsap.to('.homepage-panels-container', {
            scrollTrigger: {
            pin: '.homepage-panels-container',
            end: '.home-v2-sfa-section',
            pinSpacing: true,
            },
            overflow: "hidden scroll",
        });
        
        
      }, "500")
  }, [])
  return (  
            <div className="homepage-panels-container" id="homepage_panel_pin">
                <div className="homepage-panel homepage-panel--animate" id="homepage_panel_1">
                <div>
                    <h3>panel 2</h3>
                </div>
                    </div>
                <div className="homepage-panel homepage-panel--animate" id="homepage_panel_2">
                <div><h3>panel 3</h3></div>
                    </div>
                <div className="homepage-panel homepage-panel--animate" id="homepage_panel_3">
                <div><h3>panel 4</h3></div>
                    </div>
            </div>
  )
  }

  export default OurFocusSection2