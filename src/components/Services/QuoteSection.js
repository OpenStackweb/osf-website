import React from 'react'

const QuoteSection = () => {
  return (
    <section className="section quotediv" id="quote">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="start-quote">“</div>
            <div className="body">
              <p>
                OpenInfra projects have access to a wide range of services that are geared towards fostering a healthy,
                sustainable, successful open source project. The processes and tools we use, developed through years of
                experimentation and proven by open source success, can be scaled based on your project’s long-term aspirations.
              </p>
              <i>- Thierry Carrez, General Manager</i>
              <i>OpenInfra Foundation</i>
            </div>
            <div className="end-quote">“</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
