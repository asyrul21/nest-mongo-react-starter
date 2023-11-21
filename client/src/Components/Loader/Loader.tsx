import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 'inherit',
        height: 'inherit',
        paddingTop: '52px',
      }}
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
