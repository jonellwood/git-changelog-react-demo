import React from 'react';

const FilterBar = ({ searchTerm, setSearchTerm, sortBy, setSortBy, displayStats }) => {
    return (
        <div className="filter-bar">
            <div className="filter-left">
                <div className="search-box">
                    <i className="ph ph-duotone ph-magnifying-glass"></i>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search releases..."
                        className="search-input"
                    />
                </div>
            </div>
            <div className="filter-right">
                <div className="sort-dropdown">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="date">Date</option>
                        <option value="version">Version</option>
                        <option value="changes">Changes</option>
                    </select>
                </div>
                <div className="results-count">
                    Showing {displayStats.showing} of {displayStats.total} releases
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
