import { useState, useEffect, useMemo } from 'react';

// Custom hook for managing changelog data and filtering
export const useChangelog = (initialData) => {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [viewMode, setViewMode] = useState('grid');

    // Filter and sort releases based on current state
    const filteredReleases = useMemo(() => {
        let filtered = [...data.releases];

        // Apply search filter
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(release => 
                release.version.toLowerCase().includes(searchLower) ||
                release.summary.toLowerCase().includes(searchLower) ||
                release.rawContent.toLowerCase().includes(searchLower)
            );
        }

        // Apply sorting
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'version':
                    return versionCompare(b.version, a.version);
                case 'date':
                    return new Date(b.date) - new Date(a.date);
                case 'changes':
                    return b.changeCount - a.changeCount;
                default:
                    return 0;
            }
        });

        return filtered;
    }, [data.releases, searchTerm, sortBy]);

    // Calculate display stats
    const displayStats = useMemo(() => ({
        showing: filteredReleases.length,
        total: data.releases.length,
        totalChanges: data.stats.totalChanges || 0,
        latestVersion: data.stats.latestVersion || 'Unknown',
    }), [filteredReleases.length, data.releases.length, data.stats]);

    return {
        data,
        setData,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        filteredReleases,
        displayStats
    };
};

// Custom hook for app name loading
export const useAppName = () => {
    const [appName, setAppName] = useState('My App');

    useEffect(() => {
        const loadAppName = async () => {
            try {
                const response = await fetch('./package.json');
                if (response.ok) {
                    const packageData = await response.json();
                    const name = packageData.name
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    setAppName(name);
                }
            } catch (error) {
                console.warn('Could not load package.json:', error);
            }
        };

        loadAppName();
    }, []);

    return appName;
};

// Custom hook for modal management
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRelease, setSelectedRelease] = useState(null);

    const openModal = (release) => {
        setSelectedRelease(release);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedRelease(null);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen]);

    return {
        isOpen,
        selectedRelease,
        openModal,
        closeModal
    };
};

// Utility functions
export const versionCompare = (a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aPart = aParts[i] || 0;
        const bPart = bParts[i] || 0;

        if (aPart !== bPart) {
            return aPart - bPart;
        }
    }
    return 0;
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

export const getVersionIcon = (version) => {
    const parts = version.split('.');
    const major = parseInt(parts[0]) || 0;
    const minor = parseInt(parts[1]) || 0;
    const patch = parseInt(parts[2]) || 0;

    if (major > 0) return 'ph ph-duotone ph-rocket-launch';
    if (minor > 0) return 'ph ph-duotone ph-star';
    if (patch > 50) return 'ph ph-duotone ph-medal';
    return 'ph ph-duotone ph-tag';
};

export const formatMarkdown = (content) => {
    if (!content) return '';
    
    // Simple markdown-like formatting
    return content
        .split('\n')
        .map(line => {
            if (line.trim().startsWith('- ')) {
                return `<li>${line.trim().substring(2)}</li>`;
            }
            return line;
        })
        .join('\n')
        .replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`);
};
