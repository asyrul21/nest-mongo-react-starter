import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useLoggedInUser = () => {
  const authReducer = useSelector((state: any) => state.authLogin);
  const { isAuthenticated, loggedInUser } = authReducer;

  return {
    isAuthenticated,
    loggedInUser,
  };
};
