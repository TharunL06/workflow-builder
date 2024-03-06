import React, { useState} from 'react';
import ReactFlow from 'reactflow';
import './WorkflowCanvas.css'; 
import BrowseInput from '../browseinput/BrowseInput';

const WorkflowCanvas = ({selectedFile}) => {
  const [elements, setElements] = useState([]);

  const handleFileSelect = (file) => {
    console.log('Selected file:', file);
    // Handle the selected file here
  };

  return (
    <div className="workflow-canvas">
      <div className="left-panel">
        <BrowseInput onFileSelect={handleFileSelect} />
      </div>
      <div className="canvas">
        <ReactFlow elements={elements} />
      </div>
    </div>
  );
};

export default WorkflowCanvas;
