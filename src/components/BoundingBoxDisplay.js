// BoundingBoxDisplay.js
import React from 'react';

import PdfViewerComponent from './FileInput';



const BoundingBoxDisplay = ({ file }) => {
  // Simulated bounding box data
  const boundingBoxes = [
    
    { id: 1, type: 'image', x: 300, y: 200, width: 150, height: 100 }
  ];

  return (
    <div className="bounding-box-container">
      <h3>Bounding Boxes</h3>
      <div className="document-container">
        {file.type === 'application/pdf' ? (
          <object data={URL.createObjectURL(file)} type="application/pdf" className="document-object">
            <p>PDF viewer is not supported by your browser.</p>
          </object>
        ) : file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ? (
          <PdfViewerComponent document={`${file.path}`} />
        ) : (
          <p>Unsupported file format.</p>
        )}
        <svg className="bounding-box-svg">
          {boundingBoxes.map(box => (
            <rect
              key={box.id}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              stroke="blue"
              strokeWidth="2"
              fill="transparent"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default BoundingBoxDisplay;
