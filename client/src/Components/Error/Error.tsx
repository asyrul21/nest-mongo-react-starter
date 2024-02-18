import React from 'react';

export const ErrorComponent = ({ error }: { error?: string }) => {
  return (
    <div
      style={{
        height: 'inherit',
        minHeight: 'inherit',
        width: '100%',
        textAlign: 'center',
        padding: '20px',
      }}
      data-testid="error-root"
    >
      <p className="error_header">Oops something went wrong!</p>
      {error && (
        <p className="error_text" data-testid="error-text">
          {error}
        </p>
      )}
    </div>
  );
};

export default ErrorComponent;
