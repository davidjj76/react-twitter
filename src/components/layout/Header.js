import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';

const Header = ({ className, ...props }) => (
  <header className={classNames('header', className)} {...props}>
    <a className="header__icon" href="/">
      <Icon className="twitter-icon" width="32" height="32" />
    </a>
  </header>
);

Header.propTypes = {
  className: T.string,
};

export default Header;
