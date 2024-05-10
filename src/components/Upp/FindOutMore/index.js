import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.scss';


const Article = ({title, description, image, link}) => {

  return (
    <div className={styles.articleWrapper}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.link}>Read more</a>
    </div>
  );
}

const VideoCard = ({title, link}) => {

  return (
    <div className={styles.videoWrapper}>
      <div className={styles.thumbnail}>
        <iframe
          width="853"
          height="480"
          src={link}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

const FindOutMore = () => {
  const slider = useRef(null);

  const next = () => {
    slider.current.slickNext();
  }
  const previous = () => {
    slider.current.slickPrev();
  }

  const settings = {
    infinite: false,
    slidesToShow: 3.5,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <section className="section find-out-more" id="find-out-more">
      <div className="black-section">
        <div className="container">
          <h2 className="title">
            Find out more!
          </h2>
          <p className="subtitle">
            ARTICLES
          </p>
          <div className="carousel">
            <Slider ref={slider} {...settings}>
              <Article
                title="University Program – Partner with Institutions"
                link=""
                description="The OpenInfra Foundation University program aims to expand its horizons beyond the United States, fostering a global community of students engaged in the world of open source technology."
                image="/img/upp-page/findout_thumb1.png"
              />
              <Article
                title="What a North Dakota State University Student Learned While Working On OpenStack"
                link=""
                description="Check out what North Dakota University Student Reynaldo Bontje had to say about working on OpenStack."
                image="/img/upp-page/findout_thumb2.png"
              />
              <Article
                title="North Dakota State University Students Share What They Learned Working On Kata Containers"
                link=""
                description="Check out what North Dakota University students, Gabe and Max had to say about working on Kata Containers."
                image="/img/upp-page/findout_thumb3.png"
              />
              <Article
                title="Contributor Q&A: A college student’s experience contributing to the OpenStack Ussuri release"
                link=""
                description="Dawson Coleman, one of four students helping to add support for configuring TLS ciphers and protocols on Octavia load balancers, shares his experience collaborating with the OpenStack community on the Ussuri release."
                image="/img/upp-page/findout_thumb4.png"
              />
            </Slider>
            <div className="home-v2-numbers-btn-container">
              <button className="numbers-button" onClick={previous}>
                <img src="/img/homeV2/prev-arrow.svg" />
              </button>
              <button className="numbers-button" onClick={next}>
                <img src="/img/homeV2/next-arrow.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="white-section">
        <div className="container">
          <p className="subtitle">
            RELATED VIDEOS
          </p>
        </div>
        <div className="videos">
          <VideoCard
            title="a Title"
            link="https://www.youtube.com/watch?v=fc6IJ7jGtdM&ab_channel=JordanKinlocke"
          />
        </div>
      </div>
    </section>
  )
}

export default FindOutMore
