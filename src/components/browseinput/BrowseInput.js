import React from 'react';

const BrowseInput = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default BrowseInput;
