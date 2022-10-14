import React, { useEffect, useState } from "react"
const WhatWeDoSection = () => {
    const projectValues = [
        { id: 0, text: "1 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test1" },
        { id: 1, text: "2 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test2" },
        { id: 2, text: "3 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test3" },
        { id: 3, text: "4 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test4" },
        { id: 4, text: "5 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test5" },
        { id: 5, text: "6 - Infrastruture has grown from being strictly in datacenters, to being composed of an evolving mix of bare metal, VMs, and containers, and now the edge. More technology is needed to meet all of thees new and diverse use cases. This is why we exist.", img: "/img/homeV2/sfa-2.svg", activeImg: "/img/homeV2/sfa-1-active.svg", link: "/test6" }
    ];
      const [activeId, setActiveId] = useState(0);
      const [projectHighlightClicked, setProjectHighlightClicked] = useState(false);
      const [projectHighlight, setProjectHighlight] = useState({id: projectValues[0].id, text: projectValues[0].text, img: projectValues[0].img, activeImg: projectValues[0].activeImg, link: projectValues[0].link});
      useEffect(() => {
        setProjectHighlight({id: projectValues[activeId].id, text: projectValues[activeId].text, img: projectValues[activeId].img, activeImg: projectValues[activeId].activeImg, link: projectValues[activeId].link})
      }, [activeId]);
      useEffect(() => {
        if (!projectHighlightClicked) {
            let valuesInterval = 0;
        const intervalID = setInterval(() => {
            let valuesLength = projectValues.length;
            if (valuesInterval < valuesLength - 1) {
                setActiveId((prevActiveId) => prevActiveId + 1);
                valuesInterval++;
            } else {
                setActiveId(0);
                valuesInterval = 0;
            }
        }, 5000);
        return () => clearInterval(intervalID)
        };
      }, [projectHighlightClicked]);
      let setActiveIdWrapper = function(valID) {
        setActiveId(valID);
        setProjectHighlightClicked(true);
      }
    return (
        <section className="home-v2-sfa-section">
          <div className="container">
            <div className="sfa-highlight-container">
                <div className="sfa-highlight-options">
                    <ul>
                        {projectValues.map((val) => (
                        <li key={val.id} onMouseEnter={() => setActiveIdWrapper(val.id)} className={activeId === val.id ? "active" : ""}>
                            {activeId === val.id ? (
                                <img src={val.activeImg} />
                            ) : (
                                <img src={val.img} />
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
                <h2 className="home-v2-header home-v2-header-sfa">Clouds Have Evolved. <span className="home-v2-header-red">So Have We.</span></h2>
                <div className="sfa-paragraph-container">
                    <p>{projectHighlight.text}</p>
                </div>
                <a href={projectHighlight.link} className="sfa-project-highlight-link">Read More</a>
            </div>
          </div>
        </section>
      )
  }
export default WhatWeDoSection