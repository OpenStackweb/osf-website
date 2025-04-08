import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const LinkComponent = ({ href, children, ...rest }) => {
  if (!href) {
    // render children directly if no href is provided
    return <>{children}</>;
  }

  if (/^(http:\/\/|https:\/\/|www\.)/.test(href)) {
    return (
      <OutboundLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </OutboundLink>
    );
  }

  if (/mailto:/.test(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default LinkComponent;
