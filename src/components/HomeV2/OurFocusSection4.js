import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const OurFocusSection4 = () => {
  useLayoutEffect(() => {
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
            end: "+=350",
            onEnter: () => {
              document.querySelector("#try-panel-1").classList.add("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-2");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-3");
            },
            onLeaveBack: () => {
              document.querySelector("#try-panel-1").classList.remove("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-2");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-3");
            },
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
            end: "+=350",
            onEnter: () => {
              document.querySelector("#try-panel-2").classList.add("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-2");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-3");
            },
            onLeaveBack: () => {
              document.querySelector("#try-panel-2").classList.remove("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-2");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-3");
            },
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
            end: "+=350",
            onEnter: () => {
              document.querySelector("#try-panel-3").classList.add("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-3");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-2");
            },
            onLeaveBack: () => {
              document.querySelector("#try-panel-3").classList.remove("enable");
              document
                .querySelector("#scroller-container")
                .classList.add("enable-slide-2");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-1");
              document
                .querySelector("#scroller-container")
                .classList.remove("enable-slide-3");
            },
          },
        });

        let scrollTween4 = gsap.to("#scroller-container", {
          // xPercent: -100 * (sections.length - 1),
          scrollTrigger: {
            trigger: "#scroller-container",
            // toggleClass: 'enable',
            start: "top 20%",
            end: "+=4000",
            toggleClass: "enable",
            // onUpdate: self => {
            //     if (self.progress == 0 || self.progress == 1) { document.querySelector("#scroller-container").classList.remove("enable-slide-1"); document.querySelector("#scroller-container").classList.remove("enable-slide-2"); document.querySelector("#scroller-container").classList.remove("enable-slide-3"); }
            //     else if (self.progress < 0.33) { document.querySelector("#scroller-container").classList.add("enable-slide-1"); document.querySelector("#scroller-container").classList.remove("enable-slide-2"); document.querySelector("#scroller-container").classList.remove("enable-slide-3"); }
            //     else if (self.progress > 0.33 && self.progress < 0.66) { document.querySelector("#scroller-container").classList.add("enable-slide-2"); document.querySelector("#scroller-container").classList.remove("enable-slide-1"); document.querySelector("#scroller-container").classList.remove("enable-slide-3"); }
            //     else if (self.progress > 0.66) { document.querySelector("#scroller-container").classList.add("enable-slide-3"); document.querySelector("#scroller-container").classList.remove("enable-slide-1"); document.querySelector("#scroller-container").classList.remove("enable-slide-2"); }

            // }
          },
        });

        gsap.set(".our-focus-heading-right", { x: "100vw" });

        gsap.set(".our-focus-heading-left", { x: "-100vw" });

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
          },
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
          },
        });

        // gray section
      }
    }, "500");
  }, []);
  if (window.innerWidth > 767) {
    function scroll1() {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#try-panel-1", offsetY: -1 },
      });
    }
    function scroll2() {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#try-panel-2", offsetY: -1 },
      });
    }
    function scroll3() {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#try-panel-3", offsetY: -1 },
      });
    }
    return (
      <div className="scroller-container" id="scroller-container">
        <div className="scroller-buttons">
          <div
            className="scroller-button"
            id="scroller-button-1"
            onClick={scroll1}
          ></div>
          <div
            className="scroller-button"
            id="scroller-button-2"
            onClick={scroll2}
          ></div>
          <div
            className="scroller-button"
            id="scroller-button-3"
            onClick={scroll3}
          ></div>
        </div>
        <div className="try-3 scroller">
          <div className="try-container">
            <div className="try-panel blue" id="try-panel-1">
              <div className="try-box try-box-1">
                <h2 className="our-focus-heading our-focus-heading-1">
                  <span className="our-focus-heading-top our-focus-heading-left">
                    The World Needs{" "}
                  </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-1-db our-focus-heading-right">
                    Open
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-1-lb our-focus-heading-right">
                    Source
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-1-bl our-focus-heading-left">
                    Infrastructure
                  </span>{" "}
                  <br />
                  <span className="our-focus-heading-bottom our-focus-heading-right">
                    Now More Than Ever
                  </span>
                </h2>
              </div>
            </div>

            <section className="try-panel red" id="try-panel-2">
              <div className="try-box-2 try-box">
                <h2 className="our-focus-heading our-focus-heading-2">
                  <span className="our-focus-heading-top our-focus-heading-right">
                    We Build Communities{" "}
                  </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-2-lw our-focus-heading-left">
                    Who
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-dy our-focus-heading-left">
                    Write
                  </span>{" "}
                  <br className="our-focus-heading-break" />{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-ly our-focus-heading-right">
                    Infrastructure
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-dw our-focus-heading-right">
                    Software
                  </span>{" "}
                  <br />
                  <span className="our-focus-heading-bottom our-focus-heading-left">
                    That Runs In Production
                  </span>
                </h2>
              </div>
            </section>

            <section className="try-panel gray" id="try-panel-3">
              <div className="try-box-3 try-box">
                <h2 className="our-focus-heading our-focus-heading-3">
                  <span className="our-focus-heading-top our-focus-heading-left">
                    Let Us Help{" "}
                  </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-3-rd our-focus-heading-right">
                    Build
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-3-lb our-focus-heading-right">
                    Your
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-3-yl our-focus-heading-left">
                    Community
                  </span>{" "}
                  <br />
                  <a className="our-focus-heading-link" href="/join">
                    <span className="our-focus-heading-bottom our-focus-heading-link our-focus-heading-right">
                      Learn More <img src="/img/homeV2/arrow-1.svg" />
                    </span>
                  </a>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="scroller-container">
        <div className="try-3 scroller">
          <div className="try-container-mobile">
            <div className="try-panel-mobile blue">
              <div className="try-box">
                <h2 className="our-focus-heading our-focus-heading-1">
                  <span className="our-focus-heading-top">
                    The World Needs{" "}
                  </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-1-db">
                    Open
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-1-lb">
                    Source
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-1-bl">
                    Infrastructure
                  </span>{" "}
                  <br />
                  <span className="our-focus-heading-bottom">
                    Now More Than Ever
                  </span>
                </h2>
              </div>
            </div>

            <section className="try-panel-mobile red">
              <div className="try-box-2 try-box">
                <h2 className="our-focus-heading our-focus-heading-2">
                  <span className="our-focus-heading-top">
                    We Build Communities{" "}
                  </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-2-lw">
                    Who
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-dy">
                    Write
                  </span>{" "}
                  <br className="our-focus-heading-break" />{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-ly">
                    Infrastructure
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-2-dw">
                    Software
                  </span>{" "}
                  <br />
                  <span className="our-focus-heading-bottom">
                    That Runs In Production
                  </span>
                </h2>
              </div>
            </section>

            <section className="try-panel-mobile gray">
              <div className="try-box-3 try-box">
                <h2 className="our-focus-heading our-focus-heading-3">
                  <span className="our-focus-heading-top">Let Us Help </span>
                  <br />
                  <span className="our-focus-heading-primary our-focus-heading-3-rd">
                    Build
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-3-lb">
                    Your
                  </span>{" "}
                  <span className="our-focus-heading-primary our-focus-heading-3-yl">
                    Community
                  </span>{" "}
                  <br />
                  <a className="our-focus-heading-link" href="/join/">
                    <span className="our-focus-heading-bottom our-focus-heading-link">
                      Learn More <img src="/img/homeV2/arrow-1.svg" />
                    </span>
                  </a>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default OurFocusSection4;
