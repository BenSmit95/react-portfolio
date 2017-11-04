import React from 'react';

const HobbyObject = ({ imageLink, altText, hobbyText }) => (
    <div className="hobby">
        <img className="hobby__image" src={imageLink} alt={altText} />
        <div className="hobby__overlay">
            <p className="hobby__text">
                {hobbyText}
            </p>
        </div>
    </div>
);

export default HobbyObject;