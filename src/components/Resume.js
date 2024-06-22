// PDFViewer.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="pdf-viewer-container">
      <iframe
        title="Resume PDF"
        className="pdf-iframe"
        src={`${process.env.PUBLIC_URL}/media/Swapnik Resume.pdf`}
        frameBorder="0"
      />
    </div>
  );
}

export default Resume;