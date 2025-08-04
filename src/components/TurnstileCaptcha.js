import React, { useRef } from 'react';
import { useTurnstileSiteKey } from 'gatsby-plugin-turnstile/src';

const useTurnstileCaptcha = ({ widget }) => {
    const siteKey = useTurnstileSiteKey();
    const tokenRef = useRef('');

    useEffect(() => {
        if (window.turnstile && widget?.current) {
            window.turnstile.render(widget.current, {
                sitekey: siteKey,
                callback: (token) => {
                    tokenRef.current = token;
                },
            });
        }
    }, [siteKey]);

    return {token: tokenRef.current, siteKey};
};

export { useTurnstileCaptcha, useTurnstileCaptcha as default };