import React from 'react';
import T from 'prop-types';

import { login } from '../../api/auth';
import { FormField, Button } from '../atoms';
import './LoginPage.css';

class LoginPage extends React.Component {
  state = {
    submitting: false,
    error: null,
    form: {
      email: '',
      password: '',
    },
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      form: { ...prevState.form, [name]: value },
    }));
  };

  handleSubmit = async ev => {
    const { history, onLoginSuccess } = this.props;
    ev.preventDefault();
    this.setState({ submitting: true, error: null });
    try {
      const auth = await login(this.state.form);
      this.setState({ submitting: false });
      onLoginSuccess(auth);
      history.push('/tweet');
    } catch (error) {
      this.setState({ submitting: false, error });
    }
  };

  render() {
    const {
      submitting,
      error,
      form: { email, password },
    } = this.state;

    return (
      <div className="login-page">
        <h1 className="login-page__title">Join Twitter</h1>
        <form className="login-page__form" onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="email"
            label="phone, email or username"
            className="login-page__form-field"
            value={email}
            onChange={this.handleChange}
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="login-page__form-field"
            value={password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="login-page__form-submit"
            $primary
            disabled={submitting || !email || !password}
          >
            Log in
          </Button>
          {error && <div className="login-page__error">{error.message}</div>}
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: T.shape({ push: T.func.isRequired }).isRequired,
  onLoginSuccess: T.func.isRequired,
};

export default LoginPage;
