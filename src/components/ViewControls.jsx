import React from 'react';

const ViewControls = ({ viewMode, setViewMode }) => {
    return (
        <div className="view-controls">
            <div className="view-toggles">
                <button
                    className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                >
                    <i className="ph ph-duotone ph-squares-four"></i>
                    Grid
                </button>
                <button
                    className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                >
                    <i className="ph ph-duotone ph-list"></i>
                    List
                </button>
            </div>
        </div>
    );
};

export default ViewControls;
