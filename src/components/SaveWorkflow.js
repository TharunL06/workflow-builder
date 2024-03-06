import React from 'react';

const SaveWorkflow = ({ onSave }) => {
  const handleSave = () => {
    
    onSave();
  };

  return <button onClick={handleSave}>Save Workflow</button>;
};

export default SaveWorkflow;
