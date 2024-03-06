import React from 'react';

const CsvDataSelection = ({ csvFiles, onSelectCsv }) => {
  return (
    <div>
      <h2>Select CSV Data:</h2>
      <ul>
        {csvFiles.map((csv) => (
          <li key={csv.id} onClick={() => onSelectCsv(csv.id)}>
            {csv.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CsvDataSelection;
