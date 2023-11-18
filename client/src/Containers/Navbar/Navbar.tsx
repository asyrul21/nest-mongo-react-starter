import React, { useContext, useState } from 'react';
import './Navbar.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutUser, resetRegisterUserReducer } from '../../state/auth/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authLoginReducer = useSelector((state: any) => state.authLogin);
  const { isAuthenticated, loggedInUser } = authLoginReducer;

  const handleLogoutButton = () => {
    dispatch(logoutUser());
    dispatch(resetRegisterUserReducer());
    history.push('/');
  };

  const containerClasses = classnames({
    container_navbar_container: true,
  });

  const navItemClasses = classnames({
    container_navbar_link: true,
    no_select: true,
  });

  // const userIsLoggedIn = isAuthenticated && loggedInUser;
  const userIsLoggedIn = true;
  return (
    <nav className={containerClasses}>
      <div className="navbar_left">
        <span className="nav_title" onClick={() => history.push('/')}>
          MyWebApp
        </span>
        {userIsLoggedIn && (
          <>
            <Link className={navItemClasses} to="/about">
              About
            </Link>

            <Link className={navItemClasses} to="/protected">
              Protected
            </Link>
          </>
        )}
      </div>
      <div className="navbar_right">
        {userIsLoggedIn ? (
          <>
            <div className="navbar_greeting">
              Hello, <span>{loggedInUser?.name || 'John'}</span>
            </div>
            <Link className={navItemClasses} to="/admin">
              Manage
            </Link>
            <button onClick={handleLogoutButton} className={navItemClasses}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className={navItemClasses} to="/signup">
              Sign Up
            </Link>
            <Link className={navItemClasses} to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
