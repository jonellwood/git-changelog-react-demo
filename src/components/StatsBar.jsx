import React from 'react';

const StatsBar = ({ displayStats }) => {
    return (
        <div className="stats-bar">
            <div className="stat-card">
                <div className="stat-icon">
                    <i className="ph ph-duotone ph-chart-line"></i>
                </div>
                <div className="stat-content">
                    <div className="stat-number">{displayStats.total}</div>
                    <div className="stat-label">Total Releases</div>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">
                    <i className="ph ph-duotone ph-list-bullets"></i>
                </div>
                <div className="stat-content">
                    <div className="stat-number">{displayStats.totalChanges}</div>
                    <div className="stat-label">Total Changes</div>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">
                    <i className="ph ph-duotone ph-rocket-launch"></i>
                </div>
                <div className="stat-content">
                    <div className="stat-number">{displayStats.latestVersion}</div>
                    <div className="stat-label">Latest Version</div>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
