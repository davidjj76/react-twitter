import React from 'react';
import T from 'prop-types';

// import Header from './Header';
import Header from './Header.module';
import './Layout.css';

function Layout({ loggedUserId, onLogout, children, title }) {
  return (
    <div className="layout">
      <Header
        className="layout-header bordered"
        isLogged={!!loggedUserId}
        onLogout={onLogout}
      />
      <main className="layout-main bordered">
        <h2 className="layout-title bordered">{title}</h2>
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered">© 2020 Keepcoding</footer>
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
