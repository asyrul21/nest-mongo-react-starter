import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoggedInUser } from './useLoggedInUser';

export const useAuthGuard = (mustBeAdmin = false) => {
  const history = useHistory();
  const { isAuthenticated, loggedInUser } = useLoggedInUser();

  useEffect(() => {
    const notLoggedIn = () => !isAuthenticated || !loggedInUser;

    if (notLoggedIn()) {
      history.push('/unauthorized');
    }
    if (mustBeAdmin) {
      if (notLoggedIn() || !loggedInUser.isAdmin) {
        history.push('/unauthorized');
      }
    }
  }, [history, isAuthenticated, loggedInUser, mustBeAdmin]);

  return {
    isAuthenticated,
    loggedInUser,
  };
};
