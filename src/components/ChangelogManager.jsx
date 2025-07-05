import React from 'react';
import { useChangelog, useAppName, useModal } from '../hooks/useChangelog';
import Sidebar from './Sidebar';
import Header from './Header';
import ViewControls from './ViewControls';
import FilterBar from './FilterBar';
import StatsBar from './StatsBar';
import ReleasesGrid from './ReleasesGrid';
import ReleasesList from './ReleasesList';
import ReleaseModal from './ReleaseModal';
import EmptyState from './EmptyState';

const ChangelogManager = ({ data }) => {
    const {
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        filteredReleases,
        displayStats
    } = useChangelog(data);

    const appName = useAppName();
    const { isOpen, selectedRelease, openModal, closeModal } = useModal();

    return (
        <div className="changelog-layout">
            <Sidebar releases={data.releases} stats={data.stats} />
            
            <main className="changelog-main">
                <Header appName={appName} />
                
                <div className="changelog-container">
                    <ViewControls viewMode={viewMode} setViewMode={setViewMode} />
                    
                    <FilterBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        displayStats={displayStats}
                    />
                    
                    <StatsBar displayStats={displayStats} />
                    
                    {filteredReleases.length === 0 ? (
                        <EmptyState searchTerm={searchTerm} />
                    ) : (
                        <>
                            {viewMode === 'grid' ? (
                                <ReleasesGrid releases={filteredReleases} onReleaseClick={openModal} />
                            ) : (
                                <ReleasesList releases={filteredReleases} onReleaseClick={openModal} />
                            )}
                        </>
                    )}
                </div>
            </main>

            <ReleaseModal
                isOpen={isOpen}
                release={selectedRelease}
                onClose={closeModal}
            />
        </div>
    );
};

export default ChangelogManager;
