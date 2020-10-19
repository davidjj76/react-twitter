import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './Section.css';

const Section = ({ className, children, title, ...props }) => (
  <section className={classNames('section', className)}>
    <h2 className="section__title bordered">{title}</h2>
    <section className="section__content">{children}</section>
  </section>
);

Section.propTypes = {
  className: T.string,
  title: T.string.isRequired,
  children: T.node,
};

export default Section;
