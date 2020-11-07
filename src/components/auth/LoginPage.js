import React from 'react';
import T from 'prop-types';

import { login } from '../../api/auth';
import { FormField, Button } from '../shared';
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
    const { history, onLogin } = this.props;
    ev.preventDefault();
    this.setState({ submitting: true, error: null });
    try {
      const auth = await login(this.state.form);
      this.setState({ submitting: false });
      onLogin(auth.id, () => {
        history.push('/tweet');
      });
    } catch (error) {
      this.setState({ submitting: false, error });
    }
  };

  isSubmitEnabled = () => {
    const {
      submitting,
      form: { email, password },
    } = this.state;
    return email && password && !submitting;
  };

  render() {
    const {
      error,
      form: { email, password },
    } = this.state;

    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to Twitter</h1>
        <form onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="email"
            label="phone, email or username"
            className="loginPage-field"
            value={email}
            onChange={this.handleChange}
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="loginPage-field"
            value={password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="loginPage-submit"
            $primary
            disabled={!this.isSubmitEnabled()}
          >
            Log in
          </Button>
          {error && <div className="loginPage-error">{error.message}</div>}
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: T.shape({ push: T.func.isRequired }).isRequired,
  onLogin: T.func.isRequired,
};

export default LoginPage;
