import React from 'react';
import ReactFlow from 'reactflow';
import './WorkflowCanvas.css'; 

const WorkflowCanvas = () => {
  return (
    <div className="workflow-canvas">
      <ReactFlow elements={[]} />
    </div>
  );
};

export default WorkflowCanvas;
