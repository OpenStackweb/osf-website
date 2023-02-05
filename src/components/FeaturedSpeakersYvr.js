import React from 'react'
import LinkComponent from './LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'

const FeaturedSpeakersYvr = ({ featured_speakers }) => {
    return (
        <div className='featured-speakers-component'>
            <span className='title'>Featured Speakers</span>
            <div className='featured-speakers-list'>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
            <div>
                <div className="featured-speaker-image">
                    <img src="https://object-storage.public.mtl1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/profile-images/JonathanBryce-Headshot.JPG" />
                </div>
                <div className="featured-speaker-info">
                    <div className="featured-speaker-name">Jonathan Bryce</div>
                    <div className="featured-speaker-company">OpenInfra Foundation</div>
                </div>
            </div>
        </div>
            
            <LinkComponent className="button-cta" href="https://vancouver2023.openinfra.dev/a/schedule">See All Summit Speakers<img src={leftArrow} alt="" /></LinkComponent>
        </div>
    )
}

export default FeaturedSpeakersYvr;