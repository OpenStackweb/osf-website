import React from 'react'
import LinkComponent from './LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'

const FeaturedSpeakers = ({ featured_speakers }) => {
    return (
        <div className='featured-speakers-component'>
            <span className='title'>Featured Speakers</span>
            <div className='featured-speakers-list'>
                {featured_speakers.map((s, index) => {
                    return (
                        <div key={`featured-speaker${index}`}>
                            {s.pic &&
                            <div className='featured-speaker-image'>
                                <img src={s.pic} />
                            </div>
                            }
                            <div className='featured-speaker-info'>
                                <div className='featured-speaker-name'>{`${s.first_name} ${s.last_name}`}</div>
                                <div className='featured-speaker-company'>{`${s.company || '\u00a0'}`}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedSpeakers;