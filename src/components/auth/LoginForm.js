import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { FormField, Button } from '../atoms';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = {
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

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state);
  };

  render() {
    const { className } = this.props;
    const {
      form: { email, password },
    } = this.state;
    return (
      <div className={classNames('login-form', className)}>
        <form onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="email"
            label="phone, email or username"
            className="login-form__field"
            value={email}
            onChange={this.handleChange}
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="login-form__field"
            value={password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="login-form__submit"
            $primary
            disabled={!email || !password}
          >
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  className: T.string,
};

export default LoginForm;
