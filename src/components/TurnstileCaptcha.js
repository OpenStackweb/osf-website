import { useState, useEffect, useRef } from 'react';

const siteKey = `${process.env.GATSBY_TURNSTILE_SITE_KEY}`;
const useTurnstileCaptcha = ({ widget }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window?.turnstile && widget?.current && !loading)
        {
            setLoading(true);
            window.turnstile.render(widget.current, {
                sitekey: siteKey,
                callback: setToken,
            });
        }
    }, [window?.turnstile, widget?.current]);

    return { token, siteKey };
};

export { useTurnstileCaptcha, useTurnstileCaptcha as default };