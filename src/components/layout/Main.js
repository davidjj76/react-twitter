import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './Main.css';

const Main = ({ className, children, ...props }) => (
  <main className={classNames('main', className)} {...props}>
    <h2 className="main__title bordered">Latest tweets</h2>
    <section className="main__section">{children}</section>
  </main>
);

Main.propTypes = {
  className: T.string,
  children: T.node,
};

export default Main;
