import React, { useEffect } from 'react';
import { useAuthGuard } from '../Hooks/useAuthGuard';

const Admin = () => {
  useAuthGuard(true);

  return (
    <div>
      <h1 className="app_title">The Admin Page</h1>
      <p>You must be an logged in and an admin to view this</p>
    </div>
  );
};

export default Admin;
