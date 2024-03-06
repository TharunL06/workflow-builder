import React from 'react';

const ExportData = ({ data }) => {
  const handleExportJson = () => {
   
  };

  const handleExportCsv = () => {
    
  };

  return (
    <div>
      <button onClick={handleExportJson}>Export as JSON</button>
      <button onClick={handleExportCsv}>Export as CSV</button>
    </div>
  );
};

export default ExportData;
