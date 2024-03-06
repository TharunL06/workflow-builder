import React from 'react';
import WorkflowCanvas from '../components/WorkflowCanvas';
import CsvDataSelection from '../components/CsvDataSelection';
import ArrayMethodNode from '../components/ArrayMethodNode';

const Workflow = () => {
  
  const [selectedCsv, setSelectedCsv] = React.useState(null);

 
  const handleSelectCsv = (csvId) => {
   
    setSelectedCsv(csvId);
  };

  return (
    <div>
      <CsvDataSelection csvFiles={[]} onSelectCsv={handleSelectCsv} />
      <WorkflowCanvas />
      <ArrayMethodNode type="Filter" />
      <ArrayMethodNode type="Map" />
      
    </div>
  );
};

export default Workflow;
