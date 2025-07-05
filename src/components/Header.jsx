import React from 'react';

const Header = ({ appName }) => {
    return (
        <div className="page-header">
            <div className="header-content">
                <div className="header-left">
                    <h1>{appName} Release Notes</h1>
                    <p className="page-description">Complete version history and updates</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
