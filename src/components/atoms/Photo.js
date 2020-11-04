import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './Photo.css';

const Photo = ({ className, ...props }) => (
  <img className={classNames('photo', className)} alt="" {...props} />
);

Photo.propTypes = {
  className: T.string,
};

export default Photo;
