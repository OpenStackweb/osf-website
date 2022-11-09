import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurFocusSection3 = () => {
  useEffect(() => {
        console.log('here');

    setTimeout(() => {
        if (window.innerWidth > 767) { 

        console.log('there');

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

        gsap.set(".try-box-1, .try-box-2", {y: 800});


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
        
      } }, "500")
  }, [])
  if (window.innerWidth > 767) { 
    return (  
        <div className="scroller-container">
            <div className="try-3 scroller">
                    <div className="try-container">
  
                        <div className="try-panel blue">
                            <div className="try-box">
                                <h2 className="our-focus-heading our-focus-heading-1"><span className="our-focus-heading-top">The World Needs </span><br /><span className="our-focus-heading-primary our-focus-heading-1-db">Open</span> <span className="our-focus-heading-primary our-focus-heading-1-lb">Source</span> <span className="our-focus-heading-primary our-focus-heading-1-bl">Infrastructure</span> <br /><span className="our-focus-heading-bottom">Now More Than Ever</span></h2>
                            </div>
                        </div>
                        
                        <section className="try-panel red">
                            <div className="try-box-2 try-box">
                                <h2 className="our-focus-heading our-focus-heading-2"><span className="our-focus-heading-top">We Build Communities </span><br /><span className="our-focus-heading-primary our-focus-heading-2-lw">Who</span> <span className="our-focus-heading-primary our-focus-heading-2-dy">Write</span> <br className="our-focus-heading-break" /> <span className="our-focus-heading-primary our-focus-heading-2-ly">Infrastructure</span> <span className="our-focus-heading-primary our-focus-heading-2-dw">Software</span> <br /><span className="our-focus-heading-bottom">That Runs In Production</span></h2>
                            </div>
                        </section>
                        
                        <section className="try-panel gray">
                            <div className="try-box-3 try-box">
                                <h2 className="our-focus-heading our-focus-heading-3"><span className="our-focus-heading-top">Let Us Help </span><br /><span className="our-focus-heading-primary our-focus-heading-3-rd">Build</span> <span className="our-focus-heading-primary our-focus-heading-3-lb">Your</span> <span className="our-focus-heading-primary our-focus-heading-3-yl">Community</span> <br /><a className="our-focus-heading-link" href="/join/"><span className="our-focus-heading-bottom our-focus-heading-link">Learn More <img src="/img/homeV2/arrow-1.svg" /></span></a></h2>
                        </div>
                        </section>
                        </div>
            </div>
        </div>
  )
  } else {
    return (  
        <div className="scroller-container">
            <div className="try-3 scroller">
                    <div className="try-container-mobile">
  
                        <div className="try-panel-mobile blue">
                            <div className="try-box">
                                <h2 className="our-focus-heading our-focus-heading-1"><span className="our-focus-heading-top">The World Needs </span><br /><span className="our-focus-heading-primary our-focus-heading-1-db">Open</span> <span className="our-focus-heading-primary our-focus-heading-1-lb">Source</span> <span className="our-focus-heading-primary our-focus-heading-1-bl">Infrastructure</span> <br /><span className="our-focus-heading-bottom">Now More Than Ever</span></h2>
                            </div>
                        </div>
                        
                        <section className="try-panel-mobile red">
                            <div className="try-box-2 try-box">
                                <h2 className="our-focus-heading our-focus-heading-2"><span className="our-focus-heading-top">We Build Communities </span><br /><span className="our-focus-heading-primary our-focus-heading-2-lw">Who</span> <span className="our-focus-heading-primary our-focus-heading-2-dy">Write</span> <br className="our-focus-heading-break" /> <span className="our-focus-heading-primary our-focus-heading-2-ly">Infrastructure</span> <span className="our-focus-heading-primary our-focus-heading-2-dw">Software</span> <br /><span className="our-focus-heading-bottom">That Runs In Production</span></h2>
                            </div>
                        </section>
                        
                        <section className="try-panel-mobile gray">
                            <div className="try-box-3 try-box">
                                <h2 className="our-focus-heading our-focus-heading-3"><span className="our-focus-heading-top">Let Us Help </span><br /><span className="our-focus-heading-primary our-focus-heading-3-rd">Build</span> <span className="our-focus-heading-primary our-focus-heading-3-lb">Your</span> <span className="our-focus-heading-primary our-focus-heading-3-yl">Community</span> <br /><a className="our-focus-heading-link" href="/join/"><span className="our-focus-heading-bottom our-focus-heading-link">Learn More <img src="/img/homeV2/arrow-1.svg" /></span></a></h2>
                        </div>
                        </section>
                        </div>
            </div>
        </div>
  )
  }
  }

  export default OurFocusSection3