import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurFocusSection3 = () => {
  useEffect(() => {
    setTimeout(() => {

        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".try-panel");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
            trigger: ".try-container",
            pin: true,
            scrub: 0.1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: 1, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
              },
            // snap: 1 / (sections.length - 1),
            end: "+=3000"
            }
        });

        // const getTotalWidth = () => sections.slice(1).reduce((val, section) => val + section.offsetWidth, 0);
        // const totalWidth = getTotalWidth();
        // gsap.to(sections, {
        // xPercent: -100 * (sections.length - 1),
        // ease: "none",
        // scrollTrigger: {
        //     scroller: ".scroller",
        //     trigger: ".try-container",
        //     pinType: "fixed",
        //     pin: true,
        //     scrub: 1,
        //     snap: 1 / (sections.length - 1),
        //     start: 0,
        //     end: "+=" + (totalWidth / 4).toString(),
        //     invalidateOnRefresh: true
        // }
        // });

        gsap.set(".try-box-1, .try-box-2", {y: 500});
        // ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

        // red section
        // gsap.to(".try-box-1", {
        // y: 0,
        // duration: 2,
        // ease: "elastic",
        // scrollTrigger: {
        //     trigger: ".try-box-1",
        //     containerAnimation: scrollTween,
        //     start: "left center",
        //     toggleActions: "play none none reset",
        //     id: "1",
        // }
        // });


        // gray section
        gsap.to(".try-box-2", {
        y: 0,
        // backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
            trigger: ".try-box-2",
            containerAnimation: scrollTween,
            start: "center 100%",
            end: "center 80%",
            scrub: true,
            id: "2",
            // toggleClass: "active"
        }
        });

        // only show the relevant section's markers at any given time
        // gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
        // ["red","gray","purple"].forEach((triggerClass, i) => {
        // ScrollTrigger.create({
        //     trigger: "." + triggerClass,
        //     containerAnimation: scrollTween,
        //     start: "left 30%",
        //     end: i === 2 ? "right right" : "right 30%",
        //     markers: false,
        //     onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
        // });
        // });
        
        
      }, "500")
  }, [])
  return (  
            <div className="try-3 scroller">
                    <div className="try-container">
  
                        <div className="try-panel blue">
                            <h2 className="our-focus-heading our-focus-heading-1">The World Needs <br /><span className="our-focus-heading-1-db">Open</span> <span className="our-focus-heading-1-lb">Source</span> <span className="our-focus-heading-1-bl">Infrastructure</span> <br />Now More Than Ever</h2>
                        </div>
                        
                        <section className="try-panel red">
                            <div className="try-box-2 try-box">
                                <h2 className="our-focus-heading our-focus-heading-1">We Build Communities <br /><span className="our-focus-heading-1-db">Who</span> <span className="our-focus-heading-1-lb">Write</span> <span className="our-focus-heading-1-bl">Software</span> <br />That Runs In Production</h2>
                            </div>
                        </section>
                        
                        <section className="try-panel gray">
                            <div>
                                <h2 className="our-focus-heading our-focus-heading-1">Let Us Help <br /><span className="our-focus-heading-1-db">Build</span> <span className="our-focus-heading-1-lb">Your</span> <span className="our-focus-heading-1-bl">Community</span> <br />Learn More</h2>
                        </div>
                        </section>
                        </div>
            </div>
  )
  }

  export default OurFocusSection3