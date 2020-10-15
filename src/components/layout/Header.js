import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as Logo } from '../../assets/twitter.svg';
import './Header.css';

const Header = ({ className, ...props }) => (
  <header className={classNames('header', className)} {...props}>
    <a className="header__logo" href="/">
      <Logo className="twitter-logo" />
    </a>
  </header>
);

Header.propTypes = {
  className: T.string,
};

export default Header;
