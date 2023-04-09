import React, { useRef } from 'react';
import download from 'downloadjs';

function DownloadWidget(props) {
  const { svgRef, geoName } = props;

  const handleDownloadJPEG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = svgRef.current.clientWidth;
    canvas.height = svgRef.current.clientHeight;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      download(canvas.toDataURL('image/jpeg'), `${geoName}.jpeg`, 'image/jpeg');
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgRef.current.outerHTML)}`;
  };

  const handleDownloadPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = svgRef.current.clientWidth;
    canvas.height = svgRef.current.clientHeight;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      download(canvas.toDataURL('image/png'), `${geoName}.png`, 'image/png');
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgRef.current.outerHTML)}`;
  };

  const handleDownloadSVG = () => {
    download(svgRef.current.outerHTML, `${geoName}.svg`, 'image/svg+xml');
  };

  return (
    <div>
      <button onClick={handleDownloadJPEG}>Download JPEG</button>
      <button onClick={handleDownloadPNG}>Download PNG</button>
      <button onClick={handleDownloadSVG}>Download SVG</button>
    </div>
  );
}

export default DownloadWidget;
