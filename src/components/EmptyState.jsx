import React from 'react';

const EmptyState = ({ searchTerm }) => {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                <i className="ph ph-duotone ph-file-text"></i>
            </div>
            <h3>No releases found</h3>
            <p>
                {searchTerm 
                    ? 'Try adjusting your search criteria' 
                    : 'No releases have been published yet'
                }
            </p>
        </div>
    );
};

export default EmptyState;
