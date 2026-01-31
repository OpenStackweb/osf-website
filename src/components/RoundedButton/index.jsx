import React from 'react'

import LinkComponent from '../LinkComponent'

import './styles.scss'


const RoundedButton = ({ link, text, className, hasArrowIcon = true, arrowColor = null, buttonStyles = null }) => {

    if (!text) return null;

    const customArrowColor = arrowColor?.hasOwnProperty('color') ? arrowColor.color : 'white';
    const customArrowHoverColor = arrowColor?.hasOwnProperty('hover') ? arrowColor.hover : 'white';

    const arrowIcon = (color) => {
        return (
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                <path d="M21 19L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M21 9L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M12 14L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    }

    const arrowHoverIcon = (color) => {
        return (
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-hover-icon">
                <path d="M21 19L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M21 9L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M12 14L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    }

    return (
        <LinkComponent href={link} className={`osf-button ${className ?? className}`} style={buttonStyles ? { ...buttonStyles } : {}}>
            {text}
            {hasArrowIcon && arrowIcon(customArrowColor)}
            {hasArrowIcon && arrowHoverIcon(customArrowHoverColor)}
        </LinkComponent>
    )
}

export default RoundedButton
