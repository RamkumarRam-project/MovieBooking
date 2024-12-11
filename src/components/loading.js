import React from "react";


const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
      <div className="spinner-border text-primary" role="status">
       
      </div>
      <span className="p-3">Loading...</span>
    </div>
  );
};

export default Loading;
