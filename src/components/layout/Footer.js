import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './Footer.css';

const Footer = ({ className, ...props }) => (
  <footer className={classNames('footer', className)} {...props}>
    © 2020 Keepcoding
  </footer>
);

Footer.propTypes = {
  className: T.string,
};

export default Footer;
