import React, { useState} from 'react';
import WorkflowCanvas from './components/canvas/WorkflowCanvas'
import BrowseInput from './components/browseinput/BrowseInput';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };
  return (
    <div>
      <h6 style={{ textAlign: 'center', fontWeight: 'bold' }}>Workflow Builder</h6>
      <WorkflowCanvas selectedFile={selectedFile} />
    </div>
  );
}

export default App;
