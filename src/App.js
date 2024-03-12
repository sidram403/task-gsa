// App.js
import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import BoundingBoxDisplay from './components/BoundingBoxDisplay';
import TextImageEditor from './components/TextImageEditor';
import SaveChanges from './components/SaveChanges';

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div>
      <h1>File Editor</h1>
      <FileUploader onFilesUploaded={setUploadedFiles} />
      {uploadedFiles.map((file, index) => (
        <div key={index}>
          <h2>{file.name}</h2>
          <BoundingBoxDisplay file={file} />
          <TextImageEditor file={file} />
          <SaveChanges file={file} />
        </div>
      ))}
    </div>
  );
};

export default App;
