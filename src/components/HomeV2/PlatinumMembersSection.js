import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlatinumMembersSection = class extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.next = this.next.bind(this);
    //     this.previous = this.previous.bind(this);
    //   }
    // next() {
    //     this.slider.slickNext();
    //   }
    //   previous() {
    //     this.slider.slickPrev();
    //   }
    // render() {
    //     var settings = {
    //       dots: true,
    //       infinite: false,
    //       speed: 500,
    //       slidesToScroll: 1,
    //       slidesToShow: 3,
    //       arrows: false
    //     };
    //     return (
    //     <div className="home-v2-outer-container-dark">
    //         <div className="container news-article-parent-container">
    //             <h2>Uneven sets (finite)</h2>
    //             <Slider ref={c => (this.slider = c)} {...settings}>
    //             <div className="news-article-container" key={1}>
    //                 <div className="news-article-inner-container">
    //                     <h3>1</h3>    
    //                 </div>
    //             </div>
    //             <div className="news-article-container" key={2}>
    //                 <div className="news-article-inner-container">
    //                     <h3>2</h3>    
    //                 </div>
    //             </div>
    //             <div className="news-article-container" key={3}>
    //                 <div className="news-article-inner-container">
    //                     <h3>3</h3>    
    //                 </div>
    //             </div>
    //             <div className="news-article-container" key={4}>
    //                 <div className="news-article-inner-container">
    //                     <h3>4</h3>    
    //                 </div>
    //             </div>
    //             <div className="news-article-container" key={5}>
    //                 <div className="news-article-inner-container">
    //                     <h3>5</h3>    
    //                 </div>
    //             </div>
    //             <div className="news-article-container" key={6}>
    //                 <div className="news-article-inner-container">
    //                     <h3>6</h3>    
    //                 </div>
    //             </div>
    //             </Slider>
    //         </div>
    //         <button className="button" onClick={this.previous}>
    //         Previous
    //       </button>
    //       <button className="button" onClick={this.next}>
    //         Next
    //       </button>
    //       </div>
    //     );
    //   }

    
    render() {
        const settings1 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'ease-out',
            slidesToShow: 3,
            slidesToScroll: 9,
            infinite: true,
            arrows: false
        };
        const settings2 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'ease-out',
            slidesToShow: 3,
            slidesToScroll: 9,
            infinite: true,
            arrows: false
        };
        return (
            <div className="container">
                <h3 className="home-v2-community-subheader">Backed By</h3>
                <h2 className="home-v2-header home-v2-community-header">Our Members</h2>
                <p className="home-v2-community-paragraph">The OpenInfra Foundation is supported by a strong network of some of the largest organizations in the world. These open source leaders champion open infrastructure and understand the vital importance it plays in their business.</p>
                <div className="home-v2-platinum-container">
                    <Slider {...settings1}>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    </Slider>
                </div>
                <div className="home-v2-platinum-container home-v2-platinum-container-offset">
                    <Slider {...settings2}>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    <div className="home-v2-platinum-sponsor">
                        <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                    </div>
                    </Slider>
                </div>
            </div>
        );
      }
}

export default PlatinumMembersSection