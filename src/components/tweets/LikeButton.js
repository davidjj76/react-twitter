import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as IconUnliked } from '../../assets/like.svg';
import { ReactComponent as IconLiked } from '../../assets/like_filled.svg';
import './LikeButton.css';

const LikeButton = ({ className, children, liked }) => {
  const Icon = liked ? IconLiked : IconUnliked;
  return (
    <div
      className={classNames('like-button', className, {
        'like-button_liked': liked,
      })}
    >
      <span className="like-button__icon">
        <Icon className="like-icon" width="20" height="20" />
      </span>
      <span className="like-button__label">{children}</span>
    </div>
  );
};

LikeButton.propTypes = {
  children: T.node,
  className: T.string,
  liked: T.bool,
};

export default LikeButton;
