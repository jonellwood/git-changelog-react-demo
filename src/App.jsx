import React from 'react';
import ChangelogManager from './components/ChangelogManager';
import { changelogData } from './data/sampleData';

function App() {
  return (
    <div className="mode-dark">
      <ChangelogManager data={changelogData} />
    </div>
  );
}

export default App;
