import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Banner } from '../Components/Banner/Banner';
import { loginUser } from '../state/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authLoginReducer = useSelector((state: any) => state.authLogin);
  const { isAuthenticated, loggedInUser, loading, error } = authLoginReducer;

  useEffect(() => {
    if (isAuthenticated || loggedInUser) {
      history.push('/');
    }
  }, [isAuthenticated, loggedInUser, history]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      {error && <Banner type="error" text={error} />}
      <h1 className="app_title">Log In</h1>
      <form className="app_form" onSubmit={handleFormSubmit}>
        <div className="input_group">
          <label className="input_label" htmlFor="login_email_input">
            Email
          </label>
          <div className="input_container">
            <input
              className="input_input"
              id="login_email_input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group">
          <label className="input_label" htmlFor="login_password_input">
            Password
          </label>
          <div className="input_container">
            <input
              className="input_input"
              id="login_password_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="form_submit_button" type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
