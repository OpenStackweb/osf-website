import React from 'react'
import PropTypes from "prop-types";

import styles from './index.module.scss';

const SpeakerCard = ({speaker, pic}) => {
    const getPresentation = () => {
        return speaker.presentationLink ?
            <a href={speaker.presentationLink}>{speaker.presentationTitle}</a> :
            <span>{speaker.presentationTitle}</span>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.pic}>
                <img src={pic} />
            </div>
            <div className={styles.body}>
                <div className={styles.name}>{speaker.name}</div>
                <div className={styles.company}>{speaker.company}</div>
                <div className={styles.presentation}>
                    {getPresentation()}
                </div>
            </div>
        </div>
    );
}


SpeakerCard.propTypes = {
    speaker: PropTypes.shape({
        name: PropTypes.string,
        company: PropTypes.string,
        presentationTitle: PropTypes.string,
        presentationLink: PropTypes.string
    }).isRequired,
}

export default SpeakerCard