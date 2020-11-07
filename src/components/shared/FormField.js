import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './FormField.css';

class FormField extends React.Component {
  state = { focus: false };

  handleFocus = ev => {
    const { onFocus } = this.props;
    this.setState({ focus: true });
    if (onFocus) onFocus(ev);
  };

  handleBlur = ev => {
    const { onBlur } = this.props;
    this.setState({ focus: false });
    if (onBlur) onBlur(ev);
  };

  render() {
    const { className, label, ...props } = this.props;
    const { focus } = this.state;
    return (
      <div
        className={classNames(
          'formField',
          { 'formField--focused': focus },
          className,
        )}
      >
        <label className="formField-label">
          <span>{label}</span>
          <input
            className="formField-input"
            {...props}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            autoComplete="off"
          ></input>
        </label>
      </div>
    );
  }
}

FormField.propTypes = {
  className: T.string,
  label: T.string.isRequired,
  onFocus: T.func,
  onBlur: T.func,
};

export default FormField;
