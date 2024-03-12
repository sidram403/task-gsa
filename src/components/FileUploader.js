// FileUploader.js
import React from 'react';
import Dropzone from 'react-dropzone';

const FileUploader = ({ onFilesUploaded }) => {
  const handleFileDrop = (acceptedFiles) => {
    onFilesUploaded(acceptedFiles);
  };

  return (
    <div>
      <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <input type='file' accept=".pdf,.pptx" {...getInputProps()} style={{border:"1px solid black"}} />
            <p>Drag or Upload here</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUploader;
