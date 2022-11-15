import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurFocusSection3 = () => {
  useEffect(() => {

    setTimeout(() => {
        if (window.innerWidth > 767) { 

        gsap.registerPlugin(ScrollTrigger);

        let scrollTween = gsap.to(".try-panel.blue", {
            // xPercent: -100 * (sections.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
            trigger: ".try-panel.blue",
            pin: true,
            scrub: 0.1,
            // toggleClass: 'enable',
            end: "+=2000",
            onEnter: () => {
                document.querySelector("#try-panel-1").classList.add("enable");
              },
              onLeaveBack: () => {
                document.querySelector("#try-panel-1").classList.remove("enable");
              }
            },
            
        });

        let scrollTween2 = gsap.to(".try-panel.red", {
            // xPercent: -100 * (sections.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
            trigger: ".try-panel.red",
            pin: true,
            scrub: 0.1,
            // toggleClass: 'enable',
            end: "+=2000",
            onEnter: () => {
                document.querySelector("#try-panel-2").classList.add("enable");
              },
              onLeaveBack: () => {
                document.querySelector("#try-panel-2").classList.remove("enable");
              }
            },
            
        });

        let scrollTween3 = gsap.to(".try-panel.gray", {
            // xPercent: -100 * (sections.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
            trigger: ".try-panel.gray",
            pin: true,
            scrub: 0.1,
            // toggleClass: 'enable',
            end: "+=2000",
            onEnter: () => {
                document.querySelector("#try-panel-3").classList.add("enable");
              },
              onLeaveBack: () => {
                document.querySelector("#try-panel-3").classList.remove("enable");
              }
            },
            
        });

        gsap.set(".try-box-1, .try-box-3", {x: "100%"});

        gsap.set(".try-box-2", {x: "-110%"});


        // gray section
        gsap.to(".try-box-2", {
        x: "0%",
        // backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
            trigger: ".try-box-2",
            containerAnimation: scrollTween2,
            start: "top center",
            end: "bottom center",
            scrub: true,
            id: "1",
            // toggleClass: "active"
        }
        });

        gsap.to(".try-box-3", {
            x: "0%",
            // backgroundColor: "#1e90ff",
            ease: "none",
            scrollTrigger: {
                trigger: ".try-box-3",
                containerAnimation: scrollTween3,
                start: "top center",
                end: "bottom center",
                scrub: true,
                id: "2",
                // toggleClass: "active"
            }
            });

        // gray section
        gsap.to(".try-box-1", {
            x: "0%",
            // backgroundColor: "#1e90ff",
            ease: "none",
            scrollTrigger: {
                trigger: ".try-box-1",
                containerAnimation: scrollTween,
                start: "top",
                end: "bottom",
                scrub: true,
                id: "3",
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
  
                        <div className="try-panel blue" id="try-panel-1">
                            <div className="try-box try-box-1">
                                <h2 className="our-focus-heading our-focus-heading-1"><span className="our-focus-heading-top">The World Needs </span><br /><span className="our-focus-heading-primary our-focus-heading-1-db">Open</span> <span className="our-focus-heading-primary our-focus-heading-1-lb">Source</span> <span className="our-focus-heading-primary our-focus-heading-1-bl">Infrastructure</span> <br /><span className="our-focus-heading-bottom">Now More Than Ever</span></h2>
                            </div>
                        </div>
                        
                        <section className="try-panel red" id="try-panel-2">
                            <div className="try-box-2 try-box">
                                <h2 className="our-focus-heading our-focus-heading-2"><span className="our-focus-heading-top">We Build Communities </span><br /><span className="our-focus-heading-primary our-focus-heading-2-lw">Who</span> <span className="our-focus-heading-primary our-focus-heading-2-dy">Write</span> <br className="our-focus-heading-break" /> <span className="our-focus-heading-primary our-focus-heading-2-ly">Infrastructure</span> <span className="our-focus-heading-primary our-focus-heading-2-dw">Software</span> <br /><span className="our-focus-heading-bottom">That Runs In Production</span></h2>
                            </div>
                        </section>
                        
                        <section className="try-panel gray" id="try-panel-3">
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