import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurFocusSection = () => {
    const titleRef = useRef()
  useEffect(() => {
        function setScrollText(){
            gsap.from('#heading1', {
              scrollTrigger: {
                trigger: '#heading1',
                toggleActions: 'play reverse play reverse',
                start: '0s',
                end: '+=1000s',
              },
              opacity: 0,
            });
            gsap.to('#heading2', {
              scrollTrigger: {
                trigger: '#heading2',
                toggleActions: 'play reverse play reverse',
                start: '+=1000s',
                end: '+=1000s',
              },
              opacity: 1,
            });
            gsap.to('#heading3', {
              scrollTrigger: {
                trigger: '#heading3',
                toggleActions: 'play reverse play reverse',
                start: '+=2000s',
                end: '+=1000s',
              },
              opacity: 1,
            });
          }
          function setScrollImages() {
            gsap.from('#img1', {
              scrollTrigger: {
                trigger: '#img1',
                toggleActions: 'play reverse play reverse',
                start: '0s',
                end: '+=1000s',
              },
              opacity: 0,
            });
            gsap.to('#img2', {
              scrollTrigger: {
                trigger: '#img2',
                toggleActions: 'play reverse play reverse',
                start: '+=1000s',
                end: '+=1000s',
              },
              opacity: 1,
            });
            gsap.to('#img3', {
              scrollTrigger: {
                trigger: '#img3',
                toggleActions: 'play reverse play reverse',
                start: '+=2000s',
                end: '+=1000s',
              },
              opacity: 1,
            });
          }
          setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            setScrollText();
            setScrollImages();
            gsap.to('.home-v2-our-focus-section', {
                scrollTrigger: {
                pin: '.home-v2-our-focus-section',
                end: '+=3000s',
                pinSpacing: true,
                },
            });
          }, "500")
  }, [])
  return (
    <div>
        <div className="home-v2-our-focus-section">
            <div className="home-v2-focus-box">
                <div className="scroll-heading scroll-heading-1" id="heading1">
                    <h2 className="our-focus-heading our-focus-heading-1">The World Needs <br /><span className="our-focus-heading-1-db">Open</span> <span className="our-focus-heading-1-lb">Source</span> <span className="our-focus-heading-1-bl">Infrastructure</span> <br />Now More Than Ever</h2>
                </div>
                <div className="scroll-heading scroll-heading-2" id="heading2">
                    <h2 className="our-focus-heading our-focus-heading-1">We Build Communities <br /><span className="our-focus-heading-1-db">Who</span> <span className="our-focus-heading-1-lb">Write</span> <span className="our-focus-heading-1-bl">Software</span> <br />That Runs In Production</h2>
                </div>
                <div className="scroll-heading scroll-heading-3" id="heading3">
                    <h2 className="our-focus-heading our-focus-heading-1">Let Us Help <br /><span className="our-focus-heading-1-db">Build</span> <span className="our-focus-heading-1-lb">Your</span> <span className="our-focus-heading-1-bl">Community</span> <br />Now More Than Ever</h2>
                </div>
            </div>
            <div className="images-box" id="imageContainer">
                <img id="img1" src="https://openinfra.dev/static/12bde2fafb805c3182c9b2ba5f509357/983b6/image1.jpg" alt="stack" className="scroll-img" />
                <img id="img2" src="https://openinfra.dev/static/d7af4956eb41afab4172c83d94ab1a3d/983b6/image2.jpg" alt="stack" className="scroll-img" />
                <img id="img3" src="https://openinfra.dev/static/15e41e29a98ec80ef78ca916573c4601/983b6/image3.jpg" alt="stack" className="scroll-img" />
            </div>
        </div>
    </div>
  )
  }

  export default OurFocusSection