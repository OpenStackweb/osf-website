import React, { useEffect, useRef } from "react";

/**
 * Renders a third-party schedule embed (e.g. Sessionize GridSmart).
 *
 * The embed is delivered as a <script> tag, which React will not execute if it
 * is injected as markup, so the element is created imperatively. The script is
 * only ever requested once this component mounts, so a hidden schedule section
 * makes no network request at all.
 */
const EventSchedule = ({ title, embedUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!embedUrl || !containerRef.current) return undefined;

    const container = containerRef.current;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = embedUrl;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [embedUrl]);

  if (!embedUrl) return null;

  return (
    <section className="event-section event-schedule">
      <div className="container">
        {title && <h2 className="event-section-title">{title}</h2>}
        <div className="event-schedule-embed" ref={containerRef} />
      </div>
    </section>
  );
};

export default EventSchedule;
