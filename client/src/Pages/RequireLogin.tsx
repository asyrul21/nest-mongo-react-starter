import React from 'react';
import { useAuthGuard } from '../Hooks/useAuthGuard';

const RequireLogin = () => {
  useAuthGuard();

  return (
    <div>
      <h1 className="app_title">A Protected Page</h1>
      <p>You must be logged in to view this</p>
    </div>
  );
};

export default RequireLogin;
