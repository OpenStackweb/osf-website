import React from 'react'
import LinkComponent from './LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'

const FeaturedSpeakersYvr = () => {
    return (
        <div className='featured-speakers-component'>
            <span className='title'>Featured Speakers</span>
            <div className='featured-speakers-list vancouver-featured-speakers-list'>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/Howard-Abrams-crop.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Howard Abrams</div>
                    <div className="featured-speaker-company">Workday</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/EBocchi.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Enrico Bocchi</div>
                    <div className="featured-speaker-company">CERN</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/Nisha-Brahmankar.jpeg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Nisha Brahmankar</div>
                    <div className="featured-speaker-company">LINE Corporation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/ThierryCarrez-Headshot1.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Thierry Carrez</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/johannes-foufas.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Johannes Foufas</div>
                    <div className="featured-speaker-company">Volvo Car Corporation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/JingGENG-crop.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jing Geng</div>
                    <div className="featured-speaker-company">Bloomberg</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/Julia-Kreger.png" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Julia Kreger</div>
                    <div className="featured-speaker-company">Red Hat</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/Tytus-Kurek.jpeg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Tytus Kurek</div>
                    <div className="featured-speaker-company">Canonical</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="/img/summit/vancouver-2023/paul_milller_small-crop.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Paul Miller</div>
                    <div className="featured-speaker-company">Wind River</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/Maria-Vaquero.jpg" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Maria Vaquero</div>
                    <div className="featured-speaker-company">Cloud&Heat Technologies</div>
                </div>
            </div>
            
        </div>
            
            <LinkComponent className="button-cta" href="https://vancouver2023.openinfra.dev/a/schedule">See All Summit Speakers<img src={leftArrow} alt="" /></LinkComponent>
        </div>
    )
}

export default FeaturedSpeakersYvr;