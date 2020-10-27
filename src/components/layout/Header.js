import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { logout } from '../../api/auth';
import { Button } from '../atoms';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';

const Header = ({ className, isLogged, onLogout, ...props }) => (
  <header className={classNames('header', className)} {...props}>
    <Link className="header__icon" to="/">
      <Icon className="twitter-icon" width="32" height="32" />
    </Link>
    <nav className="header__nav">
      <Button as={Link} to="/tweet" $primary className="header__nav-button">
        Tweet
      </Button>
      {isLogged ? (
        <Button
          className="header__nav-button"
          onClick={() => logout().then(onLogout)}
        >
          Log out
        </Button>
      ) : (
        <Button as={Link} to="/login" className="header__nav-button">
          Log in
        </Button>
      )}
    </nav>
  </header>
);

Header.propTypes = {
  className: T.string,
  isLogged: T.bool,
  onLogout: T.func.isRequired,
};

export default Header;
