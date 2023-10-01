import React from 'react';
import TabFilter from './TabFilter.jsx';
import RoadmapPanel from './RoadmapPanel.jsx';
import '../../styles/sidebar.css';

export default function Sidebar({
  open,
  filterTabs,
  setFilterTabs,
  updateSuggestionsHandler,
  prodReqs,
}) {
  return (
    <div className={`sidebar ${open && 'open'}`}>
      <div className='overlay'></div>
      <div className='content'>
        <TabFilter
          filterTabs={filterTabs}
          setFilterTabs={setFilterTabs}
          updateSuggestions={updateSuggestionsHandler}
        />
        <RoadmapPanel prodReqs={prodReqs} />
      </div>
    </div>
  );
}
