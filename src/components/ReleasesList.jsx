import React from 'react';
import { formatDate, getVersionIcon } from '../hooks/useChangelog';

const ReleasesList = ({ releases, onReleaseClick }) => {
    return (
        <div className="releases-list">
            {releases.map((release) => (
                <div
                    key={release.version}
                    id={release.version}
                    className="release-row"
                    onClick={() => onReleaseClick(release)}
                >
                    <div className="release-list-header">
                        <div className="release-icon">
                            <i className={getVersionIcon(release.version)}></i>
                        </div>
                        <div className="release-info">
                            <h3 className="release-version">{release.version}</h3>
                            <p className="release-summary">{release.summary}</p>
                        </div>
                        <div className="release-meta">
                            <span className="release-date">{formatDate(release.date)}</span>
                            <span className="release-changes">{release.changeCount} changes</span>
                            <span className="release-tag">{release.tag}</span>
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
                                View
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReleasesList;
