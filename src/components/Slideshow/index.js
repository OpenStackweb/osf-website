import React from 'react'
import './styles.scss';

const Slideshow = ({children}) => {
    // Duplicate children multiple times for seamless infinite loop
    const duplicatedChildren = React.Children.toArray(children);
    // Use enough copies so the reset point is never visible
    const totalCopies = 4;
    
    // Create multiple copies with unique keys
    const allChildren = [];
    for (let copyIndex = 0; copyIndex < totalCopies; copyIndex++) {
        duplicatedChildren.forEach((child, index) => {
            allChildren.push(
                React.cloneElement(child, {
                    key: `slide-${copyIndex}-${index}-${child.key || index}`
                })
            );
        });
    }

    return (
        <div className="slideshow">
            <div className="overlay"/>
            <div className="images">
                {allChildren}
            </div>
        </div>
    )
}

export default Slideshow
