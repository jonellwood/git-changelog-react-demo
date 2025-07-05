import React, { useMemo } from 'react';
import { formatDate } from '../hooks/useChangelog';

const Sidebar = ({ releases, stats }) => {
    const releasesByMonth = useMemo(() => {
        const grouped = {};
        releases.forEach((release) => {
            const date = new Date(release.date);
            const monthKey = `${date.getFullYear()}-${String(
                date.getMonth() + 1
            ).padStart(2, '0')}`;
            const monthName = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
            });

            if (!grouped[monthKey]) {
                grouped[monthKey] = {
                    name: monthName,
                    releases: [],
                };
            }
            grouped[monthKey].releases.push(release);
        });

        // Sort months by date (newest first)
        const sortedMonths = Object.keys(grouped).sort((a, b) =>
            b.localeCompare(a)
        );

        return sortedMonths.map(monthKey => ({
            monthKey,
            ...grouped[monthKey],
            isCurrentMonth: monthKey === new Date().toISOString().slice(0, 7)
        }));
    }, [releases]);

    const scrollToRelease = (version) => {
        const element = document.getElementById(version);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Briefly highlight the card
            element.style.transform = 'scale(1.02)';
            element.style.borderColor = 'var(--c-accent)';
            setTimeout(() => {
                element.style.transform = '';
                element.style.borderColor = '';
            }, 1000);
        }
    };

    return (
        <aside className="changelog-sidebar">
            <div className="sidebar-header">
                <h2>📝 Changelog</h2>
                <p>Release History</p>
            </div>

            <div className="sidebar-content">
                <div className="sidebar-stats">
                    <div className="stat">
                        <span className="stat-number">{releases.length}</span>
                        <span className="stat-label">Releases</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">{stats.totalChanges || 0}</span>
                        <span className="stat-label">Changes</span>
                    </div>
                </div>

                <div className="sidebar-releases">
                    <div className="sidebar-section">
                        <h3>📅 Releases by Month</h3>
                        <div className="sidebar-summary">
                            <span className="total-releases">{releases.length} total releases</span>
                        </div>
                        <div className="release-groups">
                            {releasesByMonth.map(({ monthKey, name, releases: monthReleases, isCurrentMonth }) => (
                                <details key={monthKey} className="month-group" open={isCurrentMonth}>
                                    <summary className="month-summary">
                                        <span className="month-name">{name}</span>
                                        <span className="month-count">{monthReleases.length} releases</span>
                                    </summary>
                                    <div className="month-releases">
                                        {monthReleases.map((release) => (
                                            <a
                                                key={release.version}
                                                href={`#${release.version}`}
                                                className="release-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToRelease(release.version);
                                                }}
                                            >
                                                <div className="release-version">{release.version}</div>
                                                <div className="release-date">{formatDate(release.date)}</div>
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
