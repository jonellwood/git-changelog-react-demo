// Sample changelog data that would come from git-changelog-manager
export const changelogData = {
    releases: [
        {
            version: "1.2.0",
            date: "2025-01-04",
            summary: "Major feature release with new dashboard components",
            tag: "feature",
            changeCount: 12,
            rawContent: `- 🎨 New dashboard layout with improved navigation
- ✨ Added user preferences system
- 🔧 Enhanced search functionality
- 📊 New analytics dashboard
- 🐛 Fixed memory leak in data processing
- 🚀 Performance improvements for large datasets
- 📝 Updated documentation
- 🔒 Enhanced security middleware
- 🎯 Improved error handling
- 💫 Added dark mode support
- 🌐 Internationalization support
- 🧪 Added comprehensive test suite`
        },
        {
            version: "1.1.3",
            date: "2025-01-02",
            summary: "Hotfix for critical authentication bug",
            tag: "hotfix",
            changeCount: 3,
            rawContent: `- 🐛 Fixed critical authentication bypass vulnerability
- 🔒 Enhanced session management
- 📝 Updated security documentation`
        },
        {
            version: "1.1.2",
            date: "2024-12-28",
            summary: "Bug fixes and performance improvements",
            tag: "patch",
            changeCount: 7,
            rawContent: `- 🐛 Fixed pagination issue in user list
- ⚡ Improved database query performance
- 🎨 Fixed UI alignment issues on mobile
- 🔧 Updated dependencies to latest versions
- 📱 Better responsive design
- 🌟 Enhanced loading states
- 💬 Improved error messages`
        },
        {
            version: "1.1.1",
            date: "2024-12-20",
            summary: "Minor improvements and documentation updates",
            tag: "patch",
            changeCount: 5,
            rawContent: `- 📝 Updated API documentation
- 🎨 Minor UI polish
- 🔧 Configuration improvements
- 🧹 Code cleanup and refactoring
- 📦 Updated build process`
        },
        {
            version: "1.1.0",
            date: "2024-12-15",
            summary: "New notification system and workflow improvements",
            tag: "feature",
            changeCount: 15,
            rawContent: `- 🔔 New real-time notification system
- 📋 Enhanced workflow management
- 🎯 Improved task assignment
- 💼 New project templates
- 🔍 Advanced filtering options
- 📊 Enhanced reporting features
- 🎨 UI/UX improvements
- 📱 Mobile app enhancements
- 🔧 Backend optimizations
- 🧪 Expanded test coverage
- 📚 Comprehensive user guides
- 🌍 Multi-language support
- 🔗 Better third-party integrations
- ⚡ Performance optimizations
- 🛡️ Security enhancements`
        },
        {
            version: "1.0.0",
            date: "2024-12-01",
            summary: "Initial stable release with core functionality",
            tag: "major",
            changeCount: 25,
            rawContent: `- 🎉 Initial stable release
- 👥 User management system
- 📝 Project creation and management
- 📋 Task tracking and assignment
- 📊 Basic reporting and analytics
- 🔒 Authentication and authorization
- 📱 Responsive web interface
- 🔄 Real-time updates
- 📁 File upload and management
- 🔍 Search functionality
- 📧 Email notifications
- 🎨 Customizable themes
- 📊 Dashboard widgets
- 🔧 Admin panel
- 📱 Mobile-friendly design
- 🔐 Two-factor authentication
- 📈 Usage analytics
- 🌐 API endpoints
- 📚 Documentation portal
- 🧪 Testing framework
- 🚀 CI/CD pipeline
- 🛡️ Security audit
- 📦 Deployment automation
- 🔄 Database migrations
- 🎯 Performance monitoring`
        }
    ],
    stats: {
        totalReleases: 6,
        totalChanges: 67,
        latestVersion: "1.2.0"
    }
};
