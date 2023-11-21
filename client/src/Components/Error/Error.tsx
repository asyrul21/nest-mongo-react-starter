import React from 'react';

const Error = ({ error }: { error?: string }) => {
  return (
    <div
      style={{
        height: 'inherit',
        minHeight: 'inherit',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <p className="error_header">Oops something went wrong!</p>
      {error && <p className="error_text">{error}</p>}
    </div>
  );
};

export default Error;
