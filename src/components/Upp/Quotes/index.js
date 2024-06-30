import React from 'react'

import styles from './styles.module.scss';

const Quote = ({text, author, title, color}) => {

  return (
    <div className={styles.quote}>
      <p className={styles.text}>{text}</p>
      <p className={styles.author} style={{color}}>{author}</p>
      <p className={styles.authorTitle}>{title}</p>
    </div>
  )
}


const Quotes = () => {
    return (
        <section className="section quotes">
            <div className="container">
              <h2 className="title">
                QUOTES
              </h2>
              <div className="quote-container">
                <Quote
                  text="Valencia College is thrilled to partner with the OpenInfra Foundation to further their mission in building and operating open infrastructure for the cloud. We are excited to work together to help students realize the power of open source software such as OpenStack and other OpenInfra projects. Valencia College looks forward to contributing to their open source projects and to the continued successes of the OpenInfra Foundation into the future."
                  author="- Corey Leong"
                  title="Professor, Valencia College"
                  color="#2CB4E2"
                />
                <Quote
                  text="Learning how to work in a team, contribute to open source, and develop production software is very difficult to teach in an academic environment. We try to give that experience in the BU/NU cloud computing course by having students work with industry mentors on real world projects in an agile fashion. The success of the course owes a great deal to the many projects over the years mentored by the OpenInfra community."
                  author="- Orran Krieger"
                  title="Professor, Boston University"
                  color="#2CB4E2"
                />
                <Quote
                  text="Getting selected as part of a group of Boston University Engineering capstone students to work with Openstack Manila back in the Fall of 2020 was the happiest accident of my school career.
As a first time contributor with no prior knowledge of the wonderful world of open source, I went in with an open mind and an eagerness to learn and make connections that eventually lead to my hire within RedHat, and joining the Manila team there.
 I learned valuable skills and continue to share the tenets of open source through various mentorship channels offered through the OpenInfra Foundation."
                  author="- Ashley Rodriguez"
                  title={<>Student, Boston University<br /> Red Hat - Worked on OpenStack</>}
                  color="#ED362F"
                />
              </div>
            </div>
        </section>
    )
}

export default Quotes;
