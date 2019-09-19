import React from 'react';

export default ({ children }) => {
  return (
    <div className="app">
      <div className="body">
        {children}
      </div>
    </div>
  );
};