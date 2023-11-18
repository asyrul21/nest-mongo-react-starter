import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser, removeRegisterErrors } from '../state/auth/actions';
import { Banner } from '../Components/Banner/Banner';
import { useLoggedInUser } from '../Hooks/useLoggedInUser';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated, loggedInUser } = useLoggedInUser();

  const registerReducer = useSelector((state: any) => state.authRegister);
  const { loading, error } = registerReducer;

  useEffect(() => {
    console.log('useEffect isAuthenticated:', loggedInUser);

    if (isAuthenticated || loggedInUser) {
      history.push('/');
    }
  }, [isAuthenticated, loggedInUser, history]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(removeRegisterErrors());
    dispatch(registerUser({ name, email, password }));
  };

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(loggedInUser);

  return (
    <div>
      {error && <Banner type="error" text={error} />}
      <h1 className="app_title">Register</h1>
      <form className="app_form" onSubmit={handleFormSubmit}>
        <div className="input_group">
          <label className="input_label" htmlFor="register_name_input">
            Name
          </label>
          <div className="input_container">
            <input
              className="input_input"
              id="register_name_input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group">
          <label className="input_label" htmlFor="register_email_input">
            Email
          </label>
          <div className="input_container">
            <input
              className="input_input"
              id="register_email_input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group">
          <label className="input_label" htmlFor="register_password_input">
            Password
          </label>
          <div className="input_container">
            <input
              className="input_input"
              id="register_password_input"
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

export default Register;
