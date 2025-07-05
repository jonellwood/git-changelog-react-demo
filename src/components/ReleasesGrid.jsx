import React from 'react';
import { formatDate, getVersionIcon } from '../hooks/useChangelog';

const ReleasesGrid = ({ releases, onReleaseClick }) => {
    return (
        <div className="releases-grid">
            {releases.map((release) => (
                <div
                    key={release.version}
                    id={release.version}
                    className="release-card"
                    onClick={() => onReleaseClick(release)}
                >
                    <div className="release-header">
                        <div className="release-icon">
                            <i className={getVersionIcon(release.version)}></i>
                        </div>
                        <div className="release-info">
                            <h3 className="release-version">{release.version}</h3>
                            <p className="release-date">{formatDate(release.date)}</p>
                        </div>
                        <div className="release-tag">
                            <span className="tag-label">{release.tag}</span>
                        </div>
                    </div>

                    <div className="release-body">
                        <div className="release-summary">
                            <p>{release.summary}</p>
                        </div>
                    </div>

                    <div className="release-footer">
                        <div className="release-stats">
                            <span className="stat-item">
                                <i className="ph ph-duotone ph-list-bullets"></i>
                                {release.changeCount} changes
                            </span>
                            <span className="stat-item">
                                <i className="ph ph-duotone ph-calendar"></i>
                                {formatDate(release.date)}
                            </span>
                        </div>
                        <div className="release-actions">
                            <button
                                className="action-btn primary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onReleaseClick(release);
                                }}
                            >
                                <i className="ph ph-duotone ph-arrow-right"></i>
                                View Release
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReleasesGrid;
