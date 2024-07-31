import React from 'react'

import './styles.scss';
import RoundedButton from '../RoundedButton';

const UniverseJoinBanner = ({ title, subtitle, button }) => (

    <section className='universe-join-banner-wrapper'>
        <div className="universe-join-banner-container">
            <p className='universe-join-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
            <p className="universe-join-banner-subtitle">{ subtitle }</p>
            <div className="universe-join-banner-requirements">
                <p><strong>Before submitting a new project to the OpenInfra Universe, please ensure the following criteria is met:</strong></p>
                <ul>
                    <li>Must be openly licensed with an OSI-approved license.</li>
                    <li>Must be software used to provide infrastructure.</li>
                    <li>Must have at least one organization integrating it with an OpenInfra project.</li>
                </ul>
            </div>
            <RoundedButton link={button.link} text={button.text} className='universe-join-banner-button' />
        </div>
    </section>
)

export default UniverseJoinBanner
