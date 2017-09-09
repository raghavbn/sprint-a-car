import React from 'react';

const Header = () => {
    return (
        <div>
        <h1>
            <br/>
            <span className="color-grayDarkest fnt-h1">Hotels.com - </span>
            <span className = "color-gray fnt-h2">wake up happy</span>
        </h1>
        <br/>
        <p>
            <span className = "color-grayDark ft-lg">With over </span>
            <span className = "color-grayDark fnt-lg bold">140,000 hotels </span>
            <span className = "color-grayDark fnt-lg">worldwide, </span>
            <span className = "color-grayDark fnt-lg bold">price matched guaranteed </span>
            <span className = "color-grayDark fnt-lg">and </span>
            <span className = "color-grayDark fnt-lg bold">1.2 million </span>
            <span className = "color-grayDark ft-lg">reviews, why look elsewhere for your next hotel booking.</span>
        </p>
        </div>
    );
};

export default Header;
