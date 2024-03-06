import React from 'react';
import WorkflowCanvas from './components/canvas/WorkflowCanvas'

function App() {
  return (
    <div>
      <h6 style={{textAlign: 'center',fontWeight: 'bold'}}>Workflow Builder</h6>
      <WorkflowCanvas />
    </div>
  );
}

export default App;
