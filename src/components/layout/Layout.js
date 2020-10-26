import React from 'react';
import T from 'prop-types';

import Header from './Header';
import './Layout.css';

function Layout({ loggedUserId, onLogout, children, title }) {
  return (
    <div className="layout">
      <Header
        className="layout__header bordered"
        isLogged={!!loggedUserId}
        onLogout={onLogout}
      />
      <div className="layout__container">
        <main className="layout__main bordered">
          <h2 className="layout__title bordered">{title}</h2>
          <section className="layout__content">{children}</section>
        </main>
      </div>
      <footer className="layout__footer bordered">© 2020 Keepcoding</footer>
    </div>
  );
}

Layout.propTypes = {
  loggedUserId: T.string,
  onLogout: T.func.isRequired,
  children: T.node.isRequired,
  title: T.string.isRequired,
};

export default Layout;
