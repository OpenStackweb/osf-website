
import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import styles from './index.module.scss'

function LazyLoadVideo({ videoUrl }) {
    const videoRef = useRef(null);
    const [videoId, setVideoId] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if(videoUrl)
            setVideoId(getVideoId(videoUrl));
    }, []);

    const getVideoId = (url) => {
        // TODO: get a better match method ( regex )
        return url.replace('https://www.youtube.com/embed/', '').split('?')[0];
    }

    const loadVideo = () => {
        if (!videoLoaded) {
            let embedIframe = React.createElement(
                'iframe',
                {
                    src: videoUrl,
                    frameBorder: 0,
                    allow: '',
                    width: 560,
                    height: 315
                },
                ''
            );
            setVideoLoaded(true);
            return ReactDOM.render(embedIframe, videoRef.current);
        }
    }

    if(!videoUrl){
        return null;
    }

    return (
        <div ref={videoRef} className={styles.embedYoutube} data-video-id={getVideoId(videoUrl)} onClick={() => loadVideo()}>
            <div className={styles.embedYoutubePlay}>
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
            </div>
            {videoId &&
                <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} />}
        </div>
    )
}

export default LazyLoadVideo