import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import './Main.css';

const titleMap = {
  '/': 'This going to like you',
  '/login': 'Join Twitter',
  '/tweet': "What's happening?",
};

const defaultTitle = 'Opps, nothing here!';

const Main = ({ className, children, ...props }) => {
  const { pathname } = useLocation();
  return (
    <main className={classNames('main', className)} {...props}>
      <h2 className="main__title bordered">
        {titleMap[pathname] || defaultTitle}{' '}
      </h2>
      <section className="main__section">{children}</section>
    </main>
  );
};

Main.propTypes = {
  className: T.string,
  children: T.node,
};

export default Main;
