import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.scss';

const articles = [
  {key: "art-1", title: "University Program – Partner with Institutions", link: "", description: "The OpenInfra Foundation University program aims to expand its horizons beyond the United States, fostering a global community of students engaged in the world of open source technology.", image: "/img/upp-page/findout_thumb1.png"},
  {key: "art-2", title: "What a North Dakota State University Student Learned While Working On OpenStack", link: "", description: "Check out what North Dakota University Student Reynaldo Bontje had to say about working on OpenStack.", image: "/img/upp-page/findout_thumb2.png"},
  {key: "art-3", title: "North Dakota State University Students Share What They Learned Working On Kata Containers", link: "", description: "Check out what North Dakota University students, Gabe and Max had to say about working on Kata Containers.", image: "/img/upp-page/findout_thumb3.png"},
  {key: "art-4", title: "Contributor Q&A: A college student’s experience contributing to the OpenStack Ussuri release", link: "", description: "Dawson Coleman, one of four students helping to add support for configuring TLS ciphers and protocols on Octavia load balancers, shares his experience collaborating with the OpenStack community on the Ussuri release.", image: "/img/upp-page/findout_thumb4.png"},
];

const videos = [
  {key: "video-1", title: "University Partnerships with the OpenInfra Foundation and how to get your University Involved", videoId: "ygikkNAYL0w"},
  {key: "video-2", title: "Teaching padawans to chop wood and carry water in their open source journey", videoId: "RcnPSROcAOg"},
  {key: "video-3", title: "OpenInfra Live Ep 10: How to Start Contributing Upstream to OpenInfra", videoId: "4kGtM4J_hjM"},
  {key: "video-4", title: "OpenStack: Latest Release Highlights & How to Start Contributing", videoId: "8bl_fapnzPQ"},
  {key: "video-5", title: "UPP with Valencia College: OpenStack Manila", videoId: "fc6IJ7jGtdM"},
  {key: "video-6", title: "UPP with Valencia College: OpenStack Manila", videoId: "sytsAusZByo"},
  {key: "video-7", title: "UPP with Valencia College: OpenStack Manila", videoId: "hPlY-gybs04"},
  {key: "video-8", title: "UPP with Valencia College: OpenStack Manila", videoId: "pSMWt7p9QOM"},
  {key: "video-9", title: "UPP with Valencia College: OpenStack Tempest", videoId: "WpIt8p76M-c"},
  {key: "video-10", title: "UPP with Valencia College: OpenStack Tempest", videoId: "-ytVMONr-Uw"},
  {key: "video-11", title: "UPP with Valencia College: OpenStack Horizon", videoId: "tJn66ZTG71o"},
]

const Article = ({title, description, image, link}) => {

  return (
    <div className={styles.articleWrapper}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.link}>Read more</a>
    </div>
  );
}

const VideoCard = ({title, videoId}) => {

  return (
    <div className={styles.videoWrapper}>
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" >
        <div className={styles.thumbnail}>
          <img className={styles.image} src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={title} />
          <div className={styles.overlay}>
            <img src="/img/upp-page/play-button.png" className={styles.playButton} alt="play" />
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </a>
    </div>
  );
}

const settingsArt = {
  infinite: false,
  slidesToShow: 3.5,
  speed: 500,
  arrows: false,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
      }
    }
  ]
};

const settingsVid = {
  infinite: false,
  slidesToShow: 3.5,
  speed: 500,
  arrows: false,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
      }
    }
  ]
};

const FindOutMore = () => {
  const sliderArt = useRef(null);
  const sliderVid = useRef(null);

  const nextArt = () => {
    sliderArt.current.slickNext();
  }
  const previousArt = () => {
    sliderArt.current.slickPrev();
  }

  const nextVid = () => {
    sliderVid.current.slickNext();
  }
  const previousVid = () => {
    sliderVid.current.slickPrev();
  }

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
            <Slider ref={sliderArt} {...settingsArt}>
              {articles.map(art => (
                <Article
                  key={art.key}
                  title={art.title}
                  link={art.link}
                  description={art.description}
                  image={art.image}
                />
              ))}

            </Slider>
            <div className="slider-buttons-wrapper centered">
              <button className="slider-button" onClick={previousArt}>
                <img src="/img/homeV2/prev-arrow.svg" />
              </button>
              <button className="slider-button" onClick={nextArt}>
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
          <div className="videos">
            <Slider ref={sliderVid} {...settingsVid}>
              {videos.map(v => (
                <VideoCard
                  key={v.key}
                  title={v.title}
                  videoId={v.videoId}
                />
              ))}
            </Slider>
            <div className="slider-buttons-wrapper black">
              <button className="slider-button" onClick={previousVid}>
                <img src="/img/homeV2/prev-arrow.svg" />
              </button>
              <button className="slider-button" onClick={nextVid}>
                <img src="/img/homeV2/next-arrow.svg" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FindOutMore
