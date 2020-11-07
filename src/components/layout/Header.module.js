import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { logout } from '../../api/auth';
import { Button } from '../shared';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import styles from './Header.module.css';

const Header = ({ className, isLogged, onLogout, ...props }) => (
  <header className={classNames(styles.header, className)} {...props}>
    <Link to="/">
      <div className={styles.logo}>
        <Icon width="32" height="32" />
      </div>
    </Link>
    <nav className={styles.nav}>
      <Button as={Link} to="/tweet" $primary className="header__nav-button">
        Tweet
      </Button>
      {isLogged ? (
        <Button
          className={styles.button}
          onClick={() => logout().then(onLogout)}
        >
          Log out
        </Button>
      ) : (
        <Button as={Link} to="/login" className={styles.button}>
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
