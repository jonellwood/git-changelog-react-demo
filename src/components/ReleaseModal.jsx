import React from 'react';
import { formatDate, formatMarkdown } from '../hooks/useChangelog';

const ReleaseModal = ({ isOpen, release, onClose }) => {
    if (!isOpen || !release) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{release.version}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <i className="ph ph-duotone ph-x"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="release-detail">
                        <div className="release-meta">
                            <div className="meta-item">
                                <i className="ph ph-duotone ph-calendar"></i>
                                {formatDate(release.date)}
                            </div>
                            <div className="meta-item">
                                <i className="ph ph-duotone ph-list-bullets"></i>
                                {release.changeCount} changes
                            </div>
                            <div className="meta-item">
                                <i className="ph ph-duotone ph-tag"></i>
                                {release.tag}
                            </div>
                        </div>
                        <div className="release-content">
                            <div className="release-summary">
                                <p>{release.summary}</p>
                            </div>
                            <div 
                                className="markdown-content" 
                                dangerouslySetInnerHTML={{ 
                                    __html: formatMarkdown(release.rawContent) 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReleaseModal;
