import React from 'react'

import styles from './styles.module.scss';


const Section = ({orientation, title, text, image}) => {

  return (
    <div className={`${styles.sectionWrapper} ${styles[orientation]}`}>
      <div className={styles.sectionImage}>
        <img src={image} />
      </div>
      <div className={styles.sectionBody}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <p className={styles.sectionText}>{text}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
    return (
        <section className="section how-it-works">
            <div className="container">
              <p className="overview">how it works</p>
              <h2 className="title">
                Models for Collaboration
              </h2>
              <Section
                title="Course"
                text="Some of the universities we work with offer courses to their students. These courses vary from university to university but generally they are one semester long and a group of students will focus on a single project for the entire course. The general focus of the courses range from UI/UX, to cloud computing, to project management."
                image="/img/upp-page/how-it-works-1.png"
                orientation="left"
              />
              <Section
                title="Interneship"
                text="Some universities have labs focused on open source where they already have students working but have downtime at work where they could take on other tasks. Other universities have career offices that run internships within the university where students can work on projects defined by professors. The OpenInfra Foundation collaborates with these professors to help mentor students to target the needs of the community."
                image="/img/upp-page/how-it-works-2.png"
                orientation="right"
              />
            </div>
        </section>
    )
}

export default HowItWorks;
