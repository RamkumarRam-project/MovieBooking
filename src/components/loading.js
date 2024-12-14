import React from "react";


const Loading = ({LoadName}) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
      <div className="spinner-border text-primary" role="status">
       
      </div>
      <span className="p-3 load-name-api">{LoadName}...🍿</span>
    </div>
  );
};

export default Loading;
