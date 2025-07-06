# React Changelog Renderer

A modern, responsive changelog renderer built with **React 19** and **Vite** - showcasing modern React patterns and hooks!

## Demo

🌐 **[Live Demo](https://react.jonellwood.dev){:target="_blank"}** - See it in action!

[![Netlify Status](https://api.netlify.com/api/v1/badges/df1eae0c-deb3-475a-85de-00e8f8cf5c61/deploy-status)](https://app.netlify.com/projects/react-changelog-demo/deploys)

## Features

- ⚛️ **React 19**: Latest React with modern hooks and patterns
- 🎨 **Modern Design**: Beautiful card-based interface with dark mode support
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- 🔍 **Search & Filter**: Real-time search and sorting capabilities
- 📊 **Statistics**: Automatic stats calculation and display
- 🎯 **Dual Views**: Switch between grid and list layouts
- 📅 **Sidebar Navigation**: Organized by month with collapsible sections
- 🎭 **Modal Details**: Click any release for detailed view
- 🚀 **Performance**: Optimized with useMemo and custom hooks
- 🎪 **Icons**: Beautiful Phosphor icons throughout
- 📦 **Dynamic**: Loads app name from package.json
- ⚡ **Vite**: Lightning-fast development experience

## React Patterns Showcased

### 🪝 Custom Hooks
```javascript
// Separation of concerns with custom hooks
const { searchTerm, sortBy, viewMode, filteredReleases } = useChangelog(data);
const appName = useAppName();
const { isOpen, openModal, closeModal } = useModal();
```

### 🧩 Component Composition
```javascript
<ChangelogManager data={changelogData}>
  <Sidebar />
  <Header />
  <ViewControls />
  <FilterBar />
  <StatsBar />
  <ReleasesGrid />
  <ReleaseModal />
</ChangelogManager>
```

### ⚡ Performance Optimization
```javascript
// Memoized filtering and sorting
const filteredReleases = useMemo(() => {
  // Complex filtering logic
}, [data.releases, searchTerm, sortBy]);
```

## Quick Start

```bash
# Clone this directory
cd react-changelog

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Modern React Features Used

### Functional Components
All components use modern functional components with hooks - no classes!

### Custom Hooks
- `useChangelog` - Manages filtering, sorting, and view state
- `useAppName` - Handles dynamic app name loading
- `useModal` - Modal state and keyboard controls

### React 19 Features
- **Latest hooks** - useState, useEffect, useMemo
- **Event handling** - Modern event patterns
- **Conditional rendering** - Clean JSX patterns
- **Props destructuring** - Clean component APIs

## Component Architecture

```
ChangelogManager (Main Container)
├── Sidebar (Navigation & Stats)
├── Header (App Title)
├── ViewControls (Grid/List Toggle)
├── FilterBar (Search & Sort)
├── StatsBar (Quick Statistics)
├── ReleasesGrid (Card Layout)
├── ReleasesList (List Layout)
├── EmptyState (No Results)
└── ReleaseModal (Detail View)
```

## License

MIT License - feel free to use in your projects!

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
